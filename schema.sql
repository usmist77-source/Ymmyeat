CREATE TABLE IF NOT EXISTS menu (
  id TEXT PRIMARY KEY,
  cat TEXT NOT NULL,
  fr TEXT NOT NULL,
  ar TEXT NOT NULL,
  price INTEGER NOT NULL,
  img TEXT NOT NULL,
  available INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  order_no TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT,
  address TEXT NOT NULL,
  notes TEXT,
  items_json TEXT NOT NULL,
  total INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'new'
);

CREATE INDEX IF NOT EXISTS idx_orders_created ON orders(created_at DESC);
CREATE TABLE IF NOT EXISTS sessions (
  token_hash TEXT PRIMARY KEY,
  expires_at INTEGER NOT NULL
);
