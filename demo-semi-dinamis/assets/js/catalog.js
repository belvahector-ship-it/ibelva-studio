// Katalog ditarik dari Google Sheet yang di-publish sebagai CSV.
// Cara setup Sheet asli: lihat README.md di folder ini.
// Selama SHEET_CSV_URL masih placeholder / gagal fetch, dipakai SAMPLE_DATA sebagai fallback
// supaya demo tetap tampil normal tanpa perlu setup Google Sheet dulu.

const SHEET_CSV_URL = 'PLACEHOLDER_PUBLISHED_CSV_URL';

const SAMPLE_DATA = [
  { nama: 'Kopi Susu Gula Aren', harga: 18000, kategori: 'Kopi Susu' },
  { nama: 'Americano', harga: 15000, kategori: 'Kopi Hitam' },
  { nama: 'Cappuccino', harga: 20000, kategori: 'Kopi Susu' },
  { nama: 'Matcha Latte', harga: 22000, kategori: 'Non-Kopi' },
  { nama: 'Es Teh Manis', harga: 8000, kategori: 'Non-Kopi' },
  { nama: 'Croissant Coklat', harga: 15000, kategori: 'Snack' },
];

function formatRupiah(angka) {
  return 'Rp' + Number(angka).toLocaleString('id-ID');
}

function renderCatalog(items, { fromSheet }) {
  const grid = document.getElementById('catalog-grid');
  const status = document.getElementById('catalog-status');

  status.textContent = fromSheet
    ? '🟢 Data live dari Google Sheet'
    : '🟡 Menampilkan data contoh (Google Sheet belum terhubung — lihat README.md)';

  grid.innerHTML = items.map(item => `
    <div data-aos="fade-up" class="rounded-xl bg-white overflow-hidden shadow-sm border border-amber-100">
      <div class="aspect-video bg-amber-100 flex items-center justify-center text-amber-500 text-sm">
        [ foto ${item.nama} ]
      </div>
      <div class="p-4">
        <p class="text-xs text-amber-600 font-semibold">${item.kategori}</p>
        <h3 class="font-semibold mt-1">${item.nama}</h3>
        <p class="text-slate-900 font-bold mt-1">${formatRupiah(item.harga)}</p>
      </div>
    </div>
  `).join('');
}

// Parser CSV sederhana — cukup untuk kolom tanpa koma di dalam value.
// Kalau butuh handle koma-dalam-quote, ganti dengan library seperti PapaParse.
function parseCsv(text) {
  const [headerLine, ...lines] = text.trim().split('\n');
  const headers = headerLine.split(',').map(h => h.trim().toLowerCase());
  return lines.filter(Boolean).map(line => {
    const cells = line.split(',').map(c => c.trim());
    const row = {};
    headers.forEach((h, i) => { row[h] = cells[i]; });
    return { nama: row.nama, harga: Number(row.harga) || 0, kategori: row.kategori || '' };
  });
}

async function loadCatalog() {
  if (!SHEET_CSV_URL || SHEET_CSV_URL.startsWith('PLACEHOLDER')) {
    renderCatalog(SAMPLE_DATA, { fromSheet: false });
    return;
  }
  try {
    const res = await fetch(SHEET_CSV_URL);
    if (!res.ok) throw new Error('Fetch gagal: ' + res.status);
    const items = parseCsv(await res.text());
    renderCatalog(items.length ? items : SAMPLE_DATA, { fromSheet: !!items.length });
  } catch (err) {
    console.warn('Gagal ambil data Google Sheet, pakai data contoh:', err);
    renderCatalog(SAMPLE_DATA, { fromSheet: false });
  }
}

loadCatalog();
