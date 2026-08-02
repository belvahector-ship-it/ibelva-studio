# Sistem Katalog Organik

Cara kerja library ini supaya makin lama makin lengkap tanpa perlu sesi "bikin komponen" khusus.

## Alur

```
Project klien baru
      │
      ▼
Ambil starting point dari components/ + templates/
      │
      ▼
Minta Claude generate variasi khas untuk klien ini
(warna, copywriting, layout — bukan dipakai mentah)
      │
      ▼
Project selesai, klien puas
      │
      ▼
Lihat balik: ada komponen/pola baru yang works well?
      │
      ├─ Ya → generalisasi (hapus konten spesifik klien,
      │        balikin ke placeholder), tambahkan ke components/
      │        atau templates/ di repo ini
      │
      └─ Tidak ada yang baru → skip, lanjut project berikutnya
```

## Aturan Menambah Komponen Baru

1. **Generalisasi dulu** — ganti nama brand/warna/copy klien dengan placeholder (`[BrandName]`, dst)
   sebelum masuk `components/`. Jangan bocorkan data klien ke katalog internal.
2. **Taruh di file yang tepat** — kalau sudah ada file sejenis (mis. `cards.html`), tambahkan sebagai
   varian baru di file itu, jangan bikin file baru untuk 1 komponen kecil.
3. **Update README** di folder terkait (`components/README.md` dll) kalau menambah kategori baru.
4. **Commit terpisah** dari commit project klien, dengan pesan jelas mis.
   `git commit -m "components: tambah varian pricing table 2-kolom dari project X"`.

## Kenapa Sistem Ini Penting

Modal awal cuma Claude Pro (chat) — jadi waktu adalah biaya utama. Tiap komponen yang masuk katalog
adalah waktu yang tidak perlu dihabiskan lagi di project berikutnya. Setelah beberapa project, katalog
ini seharusnya sudah cover 80% kebutuhan umum (navbar, hero, pricing, form, footer), sisanya baru custom.
