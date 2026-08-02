# Animation Library

Animasi ringan via CDN, tanpa build step. Dua pilihan:

- **[AOS](https://michalsnik.github.io/aos/) (Animate On Scroll)** — animasi fade/slide saat elemen masuk viewport. Paling gampang, cukup tambah atribut `data-aos` di HTML. Dipakai default di semua demo.
- **[GSAP](https://gsap.com) free tier** — animasi lebih kompleks (timeline, stagger, parallax). Dipakai kalau butuh efek yang AOS tidak bisa handle.

## Cara Pakai AOS (paling umum)

```html
<link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
<script>AOS.init({ duration: 700, once: true });</script>
```

Lalu tinggal tambah `data-aos="fade-up"` (atau `fade-in`, `zoom-in`, `slide-right`, dst) ke elemen manapun.

Lihat contoh lengkap: [`aos-example.html`](aos-example.html), [`gsap-example.html`](gsap-example.html).

## Aturan Pakai

- Jangan animasikan semua elemen sekaligus — pilih 1-2 titik fokus per section (hero, CTA, kartu fitur).
- Selalu pakai `once: true` di AOS supaya animasi tidak berulang tiap scroll naik-turun (mengganggu UX).
- Untuk klien dengan koneksi lambat, AOS cukup (13kb). GSAP (~60kb) hanya kalau perlu efek spesifik.
