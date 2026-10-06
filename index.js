
const json = (data, status=200) => new Response(JSON.stringify(data), {
  status,
  headers: {"content-type":"application/json; charset=utf-8"}
});

const seed = [{"id": "pz1", "cat": "pizzas", "fr": "Margherita", "ar": "مارغريتا", "price": 700, "img": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "pz2", "cat": "pizzas", "fr": "Chicken", "ar": "دجاج", "price": 850, "img": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "pz3", "cat": "pizzas", "fr": "Viande", "ar": "لحم", "price": 950, "img": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "pz4", "cat": "pizzas", "fr": "Végétarienne", "ar": "خضر", "price": 800, "img": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "pz5", "cat": "pizzas", "fr": "Thon", "ar": "تونة", "price": 900, "img": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "s1", "cat": "sandwiches", "fr": "Suprême", "ar": "سوبريم", "price": 650, "img": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "s2", "cat": "sandwiches", "fr": "Classic Beef", "ar": "كلاسيك لحم", "price": 600, "img": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "s3", "cat": "sandwiches", "fr": "Marinato", "ar": "ماريناتو", "price": 650, "img": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "s4", "cat": "sandwiches", "fr": "Le Crunch", "ar": "لو كرونش", "price": 700, "img": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "b1", "cat": "burgers", "fr": "Burger Classique", "ar": "برغر كلاسيك", "price": 650, "img": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "b2", "cat": "burgers", "fr": "Le Crousti", "ar": "لو كروستي", "price": 750, "img": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "b3", "cat": "burgers", "fr": "Giga Burger", "ar": "غيغا برغر", "price": 900, "img": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "b4", "cat": "burgers", "fr": "Yummy Burger", "ar": "يومي برغر", "price": 850, "img": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "pl1", "cat": "plats", "fr": "Poulet", "ar": "دجاج", "price": 1100, "img": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "pl2", "cat": "plats", "fr": "Escalope", "ar": "إسكالوب", "price": 1200, "img": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "pl3", "cat": "plats", "fr": "Mixte", "ar": "ميكس", "price": 1350, "img": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "t1", "cat": "tacos", "fr": "Tacos Poulet", "ar": "تاكوس دجاج", "price": 750, "img": "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "t2", "cat": "tacos", "fr": "Tacos Viande", "ar": "تاكوس لحم", "price": 850, "img": "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "t3", "cat": "tacos", "fr": "Tacos Mixte", "ar": "تاكوس ميكس", "price": 950, "img": "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "pt1", "cat": "poutine", "fr": "Poutine Classique", "ar": "بوتين كلاسيك", "price": 650, "img": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "pt2", "cat": "poutine", "fr": "Poutine Poulet", "ar": "بوتين دجاج", "price": 800, "img": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "pt3", "cat": "poutine", "fr": "Poutine Viande", "ar": "بوتين لحم", "price": 900, "img": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "k1", "cat": "kids", "fr": "Kids Burger", "ar": "وجبة أطفال برغر", "price": 650, "img": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "k2", "cat": "kids", "fr": "Kids Nuggets", "ar": "وجبة أطفال ناغتس", "price": 650, "img": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "x1", "cat": "supplements", "fr": "Frites", "ar": "بطاطا مقلية", "price": 250, "img": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "x2", "cat": "supplements", "fr": "Fromage", "ar": "جبن", "price": 150, "img": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "x3", "cat": "supplements", "fr": "Sauce", "ar": "صوص", "price": 100, "img": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "d1", "cat": "boissons", "fr": "Canette", "ar": "علبة مشروب", "price": 150, "img": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "d2", "cat": "boissons", "fr": "Soda 1L", "ar": "مشروب غازي 1 لتر", "price": 250, "img": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "d3", "cat": "boissons", "fr": "Jus", "ar": "عصير", "price": 250, "img": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80", "available": 1}, {"id": "d4", "cat": "boissons", "fr": "Eau", "ar": "ماء", "price": 50, "img": "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80", "available": 1}];

async function hashToken(token) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(token));
  return [...new Uint8Array(buf)].map(x => x.toString(16).padStart(2,"0")).join("");
}
async function makeToken() {
  const raw = `${crypto.randomUUID()}-${crypto.randomUUID()}`;
  return { raw, hash: await hashToken(raw) };
}
async function ownerOK(request, env) {
  const h = request.headers.get("authorization") || "";
  if (!h.startsWith("Bearer ")) return false;
  const hash = await hashToken(h.slice(7));
  const row = await env.DB.prepare(
    "SELECT token_hash, expires_at FROM sessions WHERE token_hash=?1"
  ).bind(hash).first();
  return !!row && Number(row.expires_at) > Date.now();
}
async function ensureMenu(env) {
  const row = await env.DB.prepare("SELECT COUNT(*) AS n FROM menu").first();
  if (Number(row?.n || 0) > 0) return;
  const stmt = env.DB.prepare(
    "INSERT INTO menu (id,cat,fr,ar,price,img,available) VALUES (?,?,?,?,?,?,?)"
  );
  for (const x of seed) {
    await stmt.bind(x.id,x.cat,x.fr,x.ar,x.price,x.img,1).run();
  }
}
async function getMenu(env) {
  await ensureMenu(env);
  const {results} = await env.DB.prepare(
    "SELECT id,cat,fr,ar,price,img,available FROM menu ORDER BY rowid"
  ).all();
  return results.map(x => ({...x, available: !!x.available}));
}
async function readJson(request) {
  try { return await request.json(); } catch { return {}; }
}
function esc(s){return String(s ?? "");}

export async function onRequest(context) {
  const {request, env} = context;
  const url = new URL(request.url);
  const action = url.searchParams.get("action");

  try {
    if (!env.DB) return json({error:"DB_NOT_BOUND"},500);

    if (request.method === "GET" && action === "menu") {
      return json({menu: await getMenu(env)});
    }

    if (request.method === "POST" && action === "login") {
      const body = await readJson(request);
      const code = String(body.code || "");
      const ownerCode = env.OWNER_CODE || "resyummyeat";
      if (code !== ownerCode) return json({error:"invalid_code"},401);

      const {raw, hash} = await makeToken();
      const expires = Date.now() + 24*60*60*1000;
      await env.DB.prepare(
        "INSERT INTO sessions (token_hash,expires_at) VALUES (?,?)"
      ).bind(hash,expires).run();
      return json({token:raw});
    }

    if (request.method === "POST" && action === "orders") {
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
