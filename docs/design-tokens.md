# Design Tokens — Tema iBelva Studio

Tema resmi brand iBelva Studio, di-generate lewat skill **[ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)**
(query: *"professional trustworthy affordable web agency service SaaS Indonesia"*) dan sudah diterapkan
ke `components/`, `templates/`, dan `demo-statis/` (situs iBelva Studio sendiri).

## Kenapa Style Ini

- **Pattern:** Feature-Rich Showcase + Trust (Hero → Features → CTA)
- **Style:** Trust & Authority — cocok untuk positioning "profesional & terpercaya", bukan "murahan"
  tapi juga bukan mewah/eksklusif. Anti-pattern yang dihindari: desain playful, kredensial tersembunyi,
  gradient ungu-pink ala AI-generic.

## Palet Warna

| Role | Hex | Tailwind (CDN, tanpa custom config) | Dipakai untuk |
|---|---|---|---|
| Primary | `#0F172A` | `slate-900` | Wordmark/logo, teks heading, section CTA gelap |
| Secondary | `#334155` | `slate-700` | Teks sekunder, label |
| Accent / CTA | `#0369A1` | `sky-700` | Semua tombol CTA, link aktif, border highlight |
| Accent hover | `#075985` | `sky-800` | Hover state tombol/link |
| Background | `#F8FAFC` | `slate-50` | Section background terang, gradient |
| Foreground | `#020617` | `slate-950`/`slate-900` | Body text di atas putih |
| Muted | `#E8ECF1` | `slate-100` | Placeholder box, badge netral |
| Border | `#E2E8F0` | `slate-200` | Border card, divider |
| Destructive | `#DC2626` | `red-600` | Error, hapus, stok habis |

Kebetulan semua hex ini **persis sama** dengan default palette Tailwind (`slate-*` dan `sky-*`), jadi
tidak perlu custom `tailwind.config` — cukup pakai nama kelas standar Tailwind CDN.

## Tipografi

- **Heading & Body:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — kesan
  friendly, modern, approachable tapi tetap profesional (cocok dipakai lintas segmen UMKM ↔ enterprise).

Cara pakai (taruh setelah tag `<script src="https://cdn.tailwindcss.com">`):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>body { font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif; }</style>
```

## Cakupan Penerapan

| Area | Pakai tema ini? |
|---|---|
| `components/`, `templates/`, `demo-statis/` | ✅ Ya — ini identitas resmi iBelva Studio |
| `demo-semi-dinamis/` (Kedai Kopi Lokal) | ❌ Sengaja tidak — tema amber/kopi sendiri, contoh variasi khas per klien |
| `demo-fullstack/` (Toko Sembako Makmur) | ❌ Sengaja tidak — tema emerald/sembako sendiri |

Demo klien memang **sengaja dibuat beda tema** dari brand iBelva Studio — sesuai prinsip di
[`katalog-organik.md`](katalog-organik.md): komponen dipakai sebagai starting point, lalu digenerate ulang
supaya tiap klien terasa khas, bukan generic/seragam.

## Update di Masa Depan

Kalau mau eksplorasi tema lain, jalankan ulang skill `ui-ux-pro-max` dengan keyword berbeda:

```bash
python scripts/search.py "<keyword produk/industri/mood>" --design-system -p "iBelva Studio" -f markdown
```

(dijalankan dari folder skill, biasanya `~/.claude/skills/ui-ux-pro-max`)
