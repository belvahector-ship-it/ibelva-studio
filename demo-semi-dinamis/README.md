# Demo Semi Dinamis — Kedai Kopi Lokal (Paket 2)

Katalog menu + form pemesanan untuk klien fiktif "Kedai Kopi Lokal". Mewakili Paket 2 (Semi Dinamis):
kontennya di-update oleh pemilik usaha sendiri lewat Google Sheet & Google Form, **tanpa sentuh kode**.

**Stack:** HTML + Tailwind CDN + fetch API (baca Google Sheet sebagai CSV) + embed Google Form.

## Cara Kerja

- `index.html` menampilkan menu dari `assets/js/catalog.js`, yang coba fetch CSV dari Google Sheet.
  Kalau belum di-setup (masih placeholder), otomatis fallback ke data contoh supaya demo tetap jalan.
- `order.html` meng-embed Google Form lewat `<iframe>`. Semua submit form otomatis masuk ke Google Sheet
  terpisah yang bisa dipantau pemilik usaha dari HP/Sheets app.

## Setup Google Sheet Asli (untuk project klien beneran)

1. Buat Google Sheet dengan kolom: `nama, harga, kategori` (baris pertama = header).
2. **File → Share → Publish to web** → pilih sheet yang mau dipublish → format **Comma-separated values (.csv)** → Publish.
3. Copy link CSV yang dihasilkan, tempel ke `SHEET_CSV_URL` di `assets/js/catalog.js`.
4. Sheet ini publik-readonly (siapa saja dengan link bisa baca, tidak bisa edit) — aman untuk data katalog non-sensitif.

## Setup Google Form Asli

1. Buat Google Form dengan field pesanan (nama, item, jumlah, kontak, dst).
2. **Send → tab `<>` (Embed HTML)** → copy `src` dari `<iframe>` yang muncul.
3. Ganti `src` di `order.html` (cari `PLACEHOLDER_FORM_ID`) dengan link tersebut.
4. Hasil submit form otomatis masuk ke tab "Responses" Google Form, atau link-kan ke Google Sheet
   lewat ikon Sheets di tab Responses untuk notifikasi/olah data lebih lanjut.

## Jalankan Lokal

Buka `index.html` langsung di browser (fetch ke Google Sheet publik tidak butuh server/CORS proxy
karena Google mengizinkan cross-origin untuk CSV yang di-publish).

## Deploy Gratis

Sama seperti demo-statis — GitHub Pages. Lihat `../demo-statis/README.md` bagian deploy untuk detail.
