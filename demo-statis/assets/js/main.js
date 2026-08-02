document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});

AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });
