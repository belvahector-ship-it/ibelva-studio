# Component Library

Snippet HTML + Tailwind CSS siap pakai. Setiap file berisi beberapa varian komponen yang sama,
diberi komentar sumber inspirasi. Ambil, tempel ke project klien, lalu minta Claude ubah warna/copy/
layout supaya jadi khas — jangan dipakai mentah 1:1 di banyak klien berbeda.

Semua komponen pakai **Tailwind CDN** (`<script src="https://cdn.tailwindcss.com"></script>`) supaya
bisa langsung dibuka di browser tanpa build step. Kalau project klien pakai build tool (Vite dst),
classnya tetap valid tinggal pindah ke JSX/template engine yang dipakai.

## Isi

| File | Isi |
|---|---|
| `navbars.html` | Navbar simple, navbar dengan dropdown, navbar sticky + CTA button |
| `hero-sections.html` | Hero simple text+CTA, hero dengan gambar, hero dengan form (lead capture) |
| `cards.html` | Card produk/layanan, card pricing, card testimoni |
| `pricing-tables.html` | Tabel 3 kolom & 4 kolom (dipakai ulang dari tabel paket iBelva Studio) |
| `buttons.html` | Primary, secondary, outline, ghost, dengan/tanpa ikon |
| `forms.html` | Form kontak, form order sederhana |
| `footers.html` | Footer simple, footer dengan sitemap + sosial media |
| `mockups.html` | **Mockup browser, thumbnail portofolio, dan mockup HP — digambar 100% pakai CSS.** Pakai ini sebagai ganti kotak abu-abu `[ foto produk ]` saat klien belum punya screenshot asli. |

> Hero gelap + aurora glow (gaya utama iBelva Studio sekarang) ada di
> [`../templates/landing-page-template.html`](../templates/landing-page-template.html) — di sana lengkap
> dengan CSS animasinya, jadi tinggal copy satu file.

## Tema

Semua komponen di sini sudah pakai tema resmi iBelva Studio (navy `slate-900` + accent `sky-700`,
font Plus Jakarta Sans). Detail & alasan pemilihan: [`../docs/design-tokens.md`](../docs/design-tokens.md).

## Sumber Inspirasi (referensi gratis, bukan hasil scrape)

Komponen di sini ditulis ulang manual mengikuti pola umum dari library open-source berikut
(struktur & konvensi Tailwind, bukan copy-paste langsung):

- [shadcn/ui](https://ui.shadcn.com) — pola komponen & aksesibilitas
- [HyperUI](https://www.hyperui.dev) — variasi layout marketing
- [Tailblocks](https://tailblocks.cc) — blok hero/feature
- [Flowbite](https://flowbite.com) — komponen interaktif (dropdown, modal)

Kalau butuh komponen yang lebih kompleks (modal, tabs, carousel), cek langsung situsnya dan tulis
ulang manual — jangan copy kode berlisensi tanpa baca lisensinya dulu (kebanyakan MIT, aman, tapi tetap cek).
