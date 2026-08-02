# iBelva Studio — Katalog & Demo Repo

Monorepo internal untuk usaha jasa pembuatan website **iBelva Studio** (desain → deploy hosting).
Isinya: katalog komponen/animasi siap pakai + 3 demo flagship (satu per tier paket layanan) yang
dipakai sebagai portofolio nyata ke calon klien.

Tidak butuh API berbayar. Semua tools yang dipakai gratis: GitHub Pages, Vercel, Supabase free tier,
Google Form/Sheet, CDN (Tailwind, AOS, GSAP).

## Struktur Repo

```
.
├── components/          # Library komponen UI siap pakai (HTML + Tailwind)
├── animations/          # Contoh animasi siap pakai (AOS, GSAP) via CDN
├── templates/           # Template halaman full, hasil rakitan components/
├── demo-statis/         # Demo Paket 1 — landing page company profile (iBelva Studio sendiri)
├── demo-semi-dinamis/   # Demo Paket 2 — katalog + integrasi Google Form/Sheet
├── demo-fullstack/      # Demo Paket 3 — Full Stack + Supabase DB + Admin Panel
└── docs/                # Catatan proses kerja (sistem katalog organik, dsb)
```

## Paket Layanan (referensi)

| Paket | Cocok untuk | Fitur | Harga mulai | Demo terkait |
|---|---|---|---|---|
| 1. Statis | Profil usaha, CV, portofolio, landing page | Desain custom, domain .my.id + hosting 1th gratis | Rp150.000 | [`demo-statis/`](demo-statis) |
| 2. Semi Dinamis | Katalog/form yang sering update | Integrasi Google (Drive/Form/Sheet) | Rp200.000 | [`demo-semi-dinamis/`](demo-semi-dinamis) |
| 3. Full Stack + DB + Admin Panel | Sistem akun user, transaksi, inventaris, laporan | Database, panel admin | Rp500.000 | [`demo-fullstack/`](demo-fullstack) |
| 4. Domain saja | Siapa aja yang cuma butuh domain | .com/.org/.id/.my.id dll | Rp30.000/tahun | — |

## Cara Pakai Katalog Ini untuk Project Klien Baru

1. Buka `components/` dan `templates/`, ambil komponen yang cocok dengan kebutuhan klien.
2. Copy ke folder project klien baru (di luar repo ini, atau branch terpisah), lalu **minta Claude
   generate variasi desain custom** (warna, copywriting, layout) supaya hasilnya khas — jangan dipakai
   mentah-mentah supaya tiap klien tidak terasa generic.
3. Setelah project klien selesai dan komponennya work well, **tambahkan balik** versi generic/reusable-nya
   ke `components/` di repo ini. Ini "sistem katalog organik" — katalog makin gemuk seiring makin banyak project.
   Detail: [`docs/katalog-organik.md`](docs/katalog-organik.md).

## Stack per Demo

| Demo | Stack | Deploy gratis |
|---|---|---|
| Statis | HTML + Tailwind CDN + AOS | GitHub Pages |
| Semi Dinamis | HTML + Tailwind CDN + Google Sheet (CSV publish) + Google Form | GitHub Pages |
| Full Stack | Vite + vanilla JS + Supabase (Postgres, Auth, RLS) | Vercel (frontend) + Supabase (backend gratis) |

## Status

- [x] Scaffold struktur repo
- [x] Komponen & animasi dasar
- [x] Demo Statis (iBelva Studio company profile)
- [x] Demo Semi Dinamis (katalog + Google Form/Sheet)
- [x] Demo Full Stack (Supabase + admin panel)
- [ ] Ganti data/kontak placeholder dengan data asli sebelum dipromosikan ke klien
- [ ] Isi Supabase project asli untuk demo-fullstack (lihat `demo-fullstack/README.md`)
