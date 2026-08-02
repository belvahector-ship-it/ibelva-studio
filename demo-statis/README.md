# Demo Statis — iBelva Studio (Paket 1)

Company profile / landing page satu halaman, mewakili Paket 1 (Statis). Sekaligus dipakai sebagai
homepage marketing iBelva Studio sendiri.

**Stack:** HTML + Tailwind CDN + AOS. Tanpa build step, tanpa dependency npm.

## Sebelum Go-Live

- [ ] Ganti nomor WhatsApp di `index.html` (cari `62XXXXXXXXXXX`) dengan nomor asli.
- [ ] Ganti/isi bagian portofolio dengan screenshot project klien asli (setelah ada).
- [ ] Cek ulang harga paket kalau berubah.

## Jalankan Lokal

Buka `index.html` langsung di browser — tidak perlu server.

## Deploy Gratis ke GitHub Pages

1. Push repo ini ke GitHub (lihat root `README.md`).
2. Di GitHub: **Settings → Pages → Source** pilih branch `main`, folder `/demo-statis` (atau `/` kalau
   repo ini dikhususkan untuk 1 demo saja, root `/` kalau di-deploy sendiri sebagai repo terpisah).
   > Catatan: GitHub Pages hanya bisa serve dari root atau `/docs` sebuah repo, **bukan sembarang subfolder**.
   > Kalau mau demo ini live di URL sendiri (`ibelva-studio.github.io`), cara termudah: buat repo GitHub
   > terpisah khusus untuk demo ini, atau pakai GitHub Actions untuk deploy subfolder ke branch `gh-pages`.
3. Tunggu beberapa menit, URL Pages akan muncul di halaman Settings → Pages.

## Custom Domain (opsional)

Kalau sudah beli domain (paket "Domain Saja"), tambahkan file `CNAME` berisi domainnya di folder yang
di-deploy, lalu arahkan DNS domain ke GitHub Pages (`A` record ke IP GitHub Pages atau `CNAME` ke
`<username>.github.io`).
