
const b = await readJson(request);
      if (!b.name || !b.phone || !b.address || !Array.isArray(b.items) || !b.items.length)
        return json({error:"invalid_order"},400);
      const id = crypto.randomUUID();
      const orderNo = "YE-" + String(Date.now()).slice(-6);
      const items = b.items.map(x => ({
        id:x.id, fr:x.fr, ar:x.ar, price:Number(x.price), qty:Number(x.qty)
      }));
      const total = Number(b.total) || 0;
      await env.DB.prepare(`
        INSERT INTO orders
        (id,order_no,created_at,name,phone,city,address,notes,items_json,total,status)
        VALUES (?,?,?,?,?,?,?,?,?,?,?)
      `).bind(
        id,orderNo,new Date().toISOString(),String(b.name),String(b.phone),
        String(b.city||""),String(b.address),String(b.notes||""),
        JSON.stringify(items),total,"new"
      ).run();
      return json({order:{
        id,orderNo,createdAt:new Date().toISOString(),name:String(b.name),
        phone:String(b.phone),city:String(b.city||""),address:String(b.address),
        notes:String(b.notes||""),items,total,status:"new"
      }});
    }
    if (request.method === "GET" && action === "image") {
      const key = url.searchParams.get("key");
      if (!key || !env.IMAGES || !key.startsWith("menu/")) return new Response("Not found",{status:404});
      const obj = await env.IMAGES.get(key);
      if (!obj) return new Response("Not found",{status:404});
      return new Response(obj.body,{headers:{
        "content-type":obj.httpMetadata?.contentType || "image/jpeg",
        "cache-control":"public, max-age=31536000, immutable"
      }});
    }
    if (!(await ownerOK(request,env))) return json({error:"unauthorized"},401);
    if (request.method === "GET" && action === "orders") {
      const {results} = await env.DB.prepare(
        "SELECT * FROM orders ORDER BY created_at DESC"
      ).all();
      return json({orders:results.map(o=>({
        id:o.id, orderNo:o.order_no, createdAt:o.created_at, name:o.name,
        phone:o.phone, city:o.city, address:o.address, notes:o.notes,
        items:JSON.parse(o.items_json||"[]"), total:Number(o.total)||0, status:o.status
      }))});
    }
    if (request.method === "PATCH" && action === "order") {
      const id = url.searchParams.get("id");
      const o = await env.DB.prepare("SELECT * FROM orders WHERE id=?").bind(id).first();
      if (!o) return json({error:"not_found"},404);
      const b = await readJson(request);
      const allowed = ["new","accepted","preparing","ready","completed","cancelled"];
      if (!allowed.includes(b.status)) return json({error:"invalid_status"},400);
      await env.DB.prepare("UPDATE orders SET status=?, updated_at=? WHERE id=?")
        .bind(b.status,new Date().toISOString(),id).run();
      return json({ok:true});
    }
    if (request.method === "DELETE" && action === "order") {
      const id = url.searchParams.get("id");
      const o = await env.DB.prepare("SELECT status FROM orders WHERE id=?").bind(id).first();
      if (!o) return json({error:"not_found"},404);
      if (!["completed","cancelled"].includes(o.status))
        return json({error:"only_completed_or_cancelled"},409);
      await env.DB.prepare("DELETE FROM orders WHERE id=?").bind(id).run();
      return json({ok:true});
    }
    if ((request.method === "PUT" || request.method === "PATCH") && action === "menu") {
      const b = await readJson(request);
      if (!b.id) return json({error:"missing_id"},400);
      const old = await env.DB.prepare("SELECT * FROM menu WHERE id=?").bind(b.id).first();
      if (!old) return json({error:"not_found"},404);
      let img = old.img;
      if (b.img && String(b.img).startsWith("data:image/")) {
        // Uploaded owner images are stored in R2.
        if (!env.IMAGES) return json({error:"R2_NOT_BOUND"},500);
        const match = String(b.img).match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/s);
        if (!match) return json({error:"invalid_image"},400);
        const mime = match[1];
        const bytes = Uint8Array.from(atob(match[2]), c => c.charCodeAt(0));
        if (bytes.byteLength > 2*1024*1024) return json({error:"image_too_large"},413);
        const ext = (mime.split("/")[1] || "jpg").replace("jpeg","jpg").replace(/[^a-z0-9]/gi,"");
        const key = `menu/${b.id}-${Date.now()}.${ext}`;
        await env.IMAGES.put(key, bytes, {httpMetadata:{contentType:mime,cacheControl:"public, max-age=31536000, immutable"}});
        img = `/api?action=image&key=${encodeURIComponent(key)}`;
      } else if (b.img) {
        img = String(b.img);
      }
      const price = b.price === undefined ? old.price : Number(b.price);
      await env.DB.prepare(
        "UPDATE menu SET price=?, img=?, fr=?, ar=?, available=? WHERE id=?"
      ).bind(
        price,img,b.fr===undefined?old.fr:String(b.fr),
        b.ar===undefined?old.ar:String(b.ar),
        b.available===undefined?old.available:(b.available?1:0),b.id
      ).run();
      return json({menu:await getMenu(env)});
    }
    return json({error:"not_found"},404);
  } catch (e) {
    return json({error:esc(e?.message || e)},500);
  }
}
