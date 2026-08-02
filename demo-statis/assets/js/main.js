const menuBtn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('hidden') === false;
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

// Tutup menu setelah klik salah satu link, biar tidak menutupi konten tujuan.
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
