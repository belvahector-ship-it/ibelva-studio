-- Jalankan di Supabase Dashboard -> SQL Editor -> New query -> Run.
-- Membuat 2 tabel: products (inventaris) dan orders (transaksi), lengkap dengan
-- Row Level Security supaya storefront publik cuma bisa baca produk & bikin order,
-- sedangkan admin panel (user yang sudah login) bisa kelola semuanya.

create extension if not exists "pgcrypto";

-- ============================================================
-- PRODUCTS (inventaris)
-- ============================================================
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  price numeric not null check (price >= 0),
  stock integer not null default 0 check (stock >= 0),
  category text,
  created_at timestamptz not null default now()
);

alter table products enable row level security;

create policy "public_read_products"
  on products for select
  using (true);

create policy "authenticated_manage_products"
  on products for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ============================================================
-- ORDERS (transaksi)
-- ============================================================
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete set null,
  product_name text not null,
  quantity integer not null check (quantity > 0),
  total_price numeric not null check (total_price >= 0),
  customer_name text not null,
  customer_contact text,
  status text not null default 'baru',
  created_at timestamptz not null default now()
);

alter table orders enable row level security;

-- Storefront publik boleh BIKIN order (checkout), tapi tidak boleh baca order orang lain.
create policy "public_can_create_orders"
  on orders for insert
  with check (true);

-- Cuma admin (authenticated) yang boleh lihat & update daftar order (laporan/status).
create policy "authenticated_can_read_orders"
  on orders for select
  using (auth.role() = 'authenticated');

create policy "authenticated_can_update_orders"
  on orders for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ============================================================
-- Data contoh (opsional, biar storefront tidak kosong pas pertama dicoba)
-- ============================================================
insert into products (name, price, stock, category) values
  ('Beras Premium 5kg', 68000, 25, 'Sembako'),
  ('Minyak Goreng 1L', 17000, 40, 'Sembako'),
  ('Gula Pasir 1kg', 15500, 30, 'Sembako'),
  ('Telur Ayam 1kg', 28000, 15, 'Sembako'),
  ('Kopi Sachet (renceng)', 12000, 3, 'Minuman');
