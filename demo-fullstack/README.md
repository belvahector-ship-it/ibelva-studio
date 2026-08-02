# Demo Full Stack — Toko Sembako Makmur (Paket 3)

Storefront + Admin Panel dengan database beneran (Supabase/Postgres) untuk klien fiktif
"Toko Sembako Makmur". Mewakili Paket 3 (Full Stack + DB + Admin Panel): sistem akun (login admin),
inventaris (produk & stok), transaksi (order masuk), dan laporan sederhana (total pendapatan,
jumlah order, stok menipis).

**Stack:** Vite (vanilla JS) + Tailwind CDN + [Supabase](https://supabase.com) (Postgres + Auth + Row Level Security).

## Kenapa Supabase?

- Gratis (free tier cukup besar untuk portofolio/klien kecil).
- Dapat Postgres beneran + Auth siap pakai — tidak perlu bikin backend Express dari nol.
- Client-side only: frontend bicara langsung ke Supabase pakai `anon key` (aman karena akses diatur
  lewat **Row Level Security**, lihat `schema.sql`), jadi tidak perlu server tambahan untuk deploy.

## Setup dari Nol

### 1. Buat project Supabase

1. Daftar/login di [supabase.com](https://supabase.com) (gratis).
2. **New Project** → kasih nama (mis. `toko-sembako-demo`) → pilih region terdekat (Singapore) → set password DB.
3. Tunggu project selesai provisioning (~2 menit).

### 2. Jalankan schema

1. Di dashboard project → **SQL Editor** → **New query**.
2. Copy-paste isi [`schema.sql`](schema.sql), klik **Run**.
3. Ini akan bikin tabel `products` & `orders`, RLS policy, dan 5 produk contoh.

### 3. Buat user admin

1. Dashboard → **Authentication → Users → Add user**.
2. Isi email + password (ini yang dipakai login di `admin.html`).
3. Centang "Auto Confirm User" supaya tidak perlu verifikasi email.

### 4. Ambil API key

1. Dashboard → **Project Settings → API**.
2. Copy **Project URL** dan **anon public key**.

### 5. Setup environment lokal

```bash
cd demo-fullstack
npm install
cp .env.example .env
```

Isi `.env` dengan URL & anon key dari langkah 4:

```
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=isi-anon-key-kamu
```

### 6. Jalankan lokal

```bash
npm run dev
```

Buka `http://localhost:5173` untuk storefront, `http://localhost:5173/admin.html` untuk admin panel
(login pakai user yang dibuat di langkah 3).

## Deploy Gratis ke Vercel

1. Push repo ini ke GitHub (lihat root `README.md`).
2. Di [vercel.com](https://vercel.com) → **Add New Project** → import repo → set **Root Directory**
   ke `demo-fullstack`.
3. Tambahkan Environment Variables di Vercel (Settings → Environment Variables):
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy. Vercel otomatis deteksi Vite (`npm run build`, output `dist/`).

## Struktur

```
demo-fullstack/
├── index.html          # Storefront publik
├── admin.html          # Admin panel (login + CRUD produk + laporan order)
├── schema.sql           # Setup tabel + RLS di Supabase
├── src/
│   ├── supabaseClient.js
│   ├── main.js          # Logic storefront
│   └── admin.js         # Logic admin panel
└── .env.example
```

## Catatan Keamanan

- `anon key` **boleh** ada di frontend (memang didesain public) — keamanan datanya dijaga oleh
  **Row Level Security** di `schema.sql`, bukan dengan menyembunyikan key.
- Jangan pernah commit file `.env` (sudah di-`.gitignore`) atau `service_role key` ke repo manapun.
- Untuk project klien beneran, ganti policy RLS sesuai kebutuhan (mis. tiap klien beda level akses admin).
