import { supabase } from './supabaseClient.js';

const loginSection = document.getElementById('login-section');
const dashboardSection = document.getElementById('dashboard-section');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const logoutBtn = document.getElementById('logout-btn');
const productForm = document.getElementById('product-form');
const productTableBody = document.getElementById('product-table-body');
const ordersTableBody = document.getElementById('orders-table-body');
const statTotalRevenue = document.getElementById('stat-total-revenue');
const statTotalOrders = document.getElementById('stat-total-orders');
const statLowStock = document.getElementById('stat-low-stock');

function formatRupiah(n) {
  return 'Rp' + Number(n).toLocaleString('id-ID');
}

function toggleView(isLoggedIn) {
  loginSection.classList.toggle('hidden', isLoggedIn);
  dashboardSection.classList.toggle('hidden', !isLoggedIn);
}

async function checkSession() {
  const { data: { session } } = await supabase.auth.getSession();
  toggleView(!!session);
  if (session) await loadDashboard();
}

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  loginError.textContent = '';
  const { error } = await supabase.auth.signInWithPassword({
    email: loginForm.email.value,
    password: loginForm.password.value,
  });
  if (error) {
    loginError.textContent = 'Login gagal: ' + error.message;
    return;
  }
  toggleView(true);
  await loadDashboard();
});

logoutBtn.addEventListener('click', async () => {
  await supabase.auth.signOut();
  toggleView(false);
});

productForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { error } = await supabase.from('products').insert({
    name: productForm.name.value,
    price: Number(productForm.price.value),
    stock: Number(productForm.stock.value),
    category: productForm.category.value,
  });
  if (!error) {
    productForm.reset();
    await loadDashboard();
  } else {
    console.error(error);
  }
});

async function deleteProduct(id) {
  await supabase.from('products').delete().eq('id', id);
  await loadDashboard();
}

async function adjustStock(id, delta) {
  const { data } = await supabase.from('products').select('stock').eq('id', id).single();
  if (!data) return;
  await supabase.from('products').update({ stock: Math.max(0, data.stock + delta) }).eq('id', id);
  await loadDashboard();
}

async function loadDashboard() {
  const [{ data: products, error: pErr }, { data: orders, error: oErr }] = await Promise.all([
    supabase.from('products').select('*').order('created_at', { ascending: false }),
    supabase.from('orders').select('*').order('created_at', { ascending: false }),
  ]);

  if (pErr) console.error(pErr);
  if (oErr) console.error(oErr);

  productTableBody.innerHTML = (products ?? []).map(p => `
    <tr class="border-b border-slate-100">
      <td class="py-2 pr-4">${p.name}</td>
      <td class="py-2 pr-4">${formatRupiah(p.price)}</td>
      <td class="py-2 pr-4 ${p.stock <= 3 ? 'text-red-600 font-semibold' : ''}">${p.stock}</td>
      <td class="py-2 pr-4">
        <div class="flex gap-2">
          <button data-action="inc" data-id="${p.id}" class="text-xs rounded bg-slate-100 px-2 py-1 hover:bg-slate-200">+1</button>
          <button data-action="dec" data-id="${p.id}" class="text-xs rounded bg-slate-100 px-2 py-1 hover:bg-slate-200">-1</button>
          <button data-action="del" data-id="${p.id}" class="text-xs rounded bg-red-50 text-red-600 px-2 py-1 hover:bg-red-100">Hapus</button>
        </div>
      </td>
    </tr>
  `).join('') || '<tr><td class="py-3 text-sm text-slate-400" colspan="4">Belum ada produk.</td></tr>';

  ordersTableBody.innerHTML = (orders ?? []).map(o => `
    <tr class="border-b border-slate-100">
      <td class="py-2 pr-4">${o.product_name}</td>
      <td class="py-2 pr-4">${o.quantity}</td>
      <td class="py-2 pr-4">${formatRupiah(o.total_price)}</td>
      <td class="py-2 pr-4">${o.customer_name}</td>
      <td class="py-2 pr-4 text-xs text-slate-500">${new Date(o.created_at).toLocaleString('id-ID')}</td>
    </tr>
  `).join('') || '<tr><td class="py-3 text-sm text-slate-400" colspan="5">Belum ada order masuk.</td></tr>';

  statTotalRevenue.textContent = formatRupiah((orders ?? []).reduce((sum, o) => sum + Number(o.total_price), 0));
  statTotalOrders.textContent = (orders ?? []).length;
  statLowStock.textContent = (products ?? []).filter(p => p.stock <= 3).length;
}

productTableBody.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const id = btn.dataset.id;
  if (btn.dataset.action === 'inc') adjustStock(id, 1);
  if (btn.dataset.action === 'dec') adjustStock(id, -1);
  if (btn.dataset.action === 'del') deleteProduct(id);
});

checkSession();
