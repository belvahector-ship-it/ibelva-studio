import { supabase } from './supabaseClient.js';

const grid = document.getElementById('product-grid');
const statusEl = document.getElementById('load-status');
const orderForm = document.getElementById('order-form');
const orderProductSelect = document.getElementById('order-product');
const orderFeedback = document.getElementById('order-feedback');

function formatRupiah(n) {
  return 'Rp' + Number(n).toLocaleString('id-ID');
}

async function loadProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    statusEl.textContent = 'Gagal memuat produk — pastikan Supabase sudah dikonfigurasi (lihat README.md).';
    console.error(error);
    return;
  }

  if (!data.length) {
    statusEl.textContent = 'Belum ada produk. Tambahkan lewat Admin Panel.';
    orderProductSelect.innerHTML = '';
    return;
  }

  statusEl.textContent = '';
  grid.innerHTML = data.map(p => `
    <div class="rounded-xl bg-white overflow-hidden shadow-sm border border-slate-100">
      <div class="aspect-video bg-slate-100 flex items-center justify-center text-slate-400 text-sm">[ ${p.name} ]</div>
      <div class="p-4">
        <p class="text-xs text-slate-500">${p.category ?? ''}</p>
        <h3 class="font-semibold mt-1">${p.name}</h3>
        <p class="font-bold mt-1">${formatRupiah(p.price)}</p>
        <p class="text-xs mt-1 ${p.stock > 0 ? 'text-green-600' : 'text-red-500'}">
          ${p.stock > 0 ? `Stok: ${p.stock}` : 'Stok habis'}
        </p>
      </div>
    </div>
  `).join('');

  orderProductSelect.innerHTML = data
    .filter(p => p.stock > 0)
    .map(p => `<option value="${p.id}" data-price="${p.price}" data-name="${p.name}">${p.name} — ${formatRupiah(p.price)}</option>`)
    .join('');
}

orderForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const opt = orderProductSelect.selectedOptions[0];
  if (!opt) return;

  const quantity = Number(orderForm.quantity.value);
  const { error } = await supabase.from('orders').insert({
    product_id: opt.value,
    product_name: opt.dataset.name,
    quantity,
    total_price: Number(opt.dataset.price) * quantity,
    customer_name: orderForm.customer_name.value,
    customer_contact: orderForm.customer_contact.value,
  });

  orderFeedback.textContent = error
    ? 'Gagal kirim pesanan, coba lagi.'
    : 'Pesanan terkirim! Kami akan hubungi Anda segera.';
  orderFeedback.className = error ? 'text-sm text-red-600 mt-3' : 'text-sm text-green-600 mt-3';
  if (!error) orderForm.reset();
});

loadProducts();
