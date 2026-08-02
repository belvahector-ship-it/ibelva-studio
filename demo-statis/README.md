# Demo Statis — iBelva Studio (Paket 1)

Company profile / landing page satu halaman, mewakili Paket 1 (Statis). Sekaligus dipakai sebagai
homepage marketing iBelva Studio sendiri.

**Stack:** HTML + Tailwind CDN + AOS. Tanpa build step, tanpa dependency npm.

## Sebelum Go-Live

- [x] Ganti nomor WhatsApp di `index.html` dengan nomor asli.
- [ ] Ganti/isi bagian portofolio dengan screenshot project klien asli (setelah ada).
- [ ] Cek ulang harga paket kalau berubah.

## Jalankan Lokal

Buka `index.html` langsung di browser — tidak perlu server.

## Deploy — Sudah Otomatis

Repo ini pakai satu GitHub Actions workflow ([`.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml))
yang deploy **ketiga demo sekaligus** ke satu GitHub Pages site tiap kali push ke `main`:

- `/` → redirect ke `demo-statis/` (halaman ini)
- `/demo-statis/`
- `/demo-semi-dinamis/`
- `/demo-fullstack/` (di-build otomatis lewat Vite sebelum deploy)

Aktifkan sekali di GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
Setelah itu tiap push ke `main` otomatis re-deploy. URL live muncul di tab **Actions** (run terakhir)
atau di Settings → Pages.

## Custom Domain (opsional)

Kalau sudah beli domain (paket "Domain Saja"), tambahkan file `CNAME` berisi domainnya di folder yang
di-deploy, lalu arahkan DNS domain ke GitHub Pages (`A` record ke IP GitHub Pages atau `CNAME` ke
`<username>.github.io`).
