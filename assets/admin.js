(() => {
  'use strict';

  document.querySelectorAll('[data-count]').forEach((element) => {
    const target = Number(element.dataset.count || 0);
    let current = 0;
    const timer = window.setInterval(() => {
      current += 1;
      element.textContent = String(current);
      if (current >= target) window.clearInterval(timer);
    }, 35);
  });

  const refreshButton = document.querySelector('#refresh-demo');
  if (refreshButton) {
    refreshButton.addEventListener('click', () => {
      refreshButton.textContent = 'Demonstração atualizada';
      refreshButton.disabled = true;
      window.setTimeout(() => {
        refreshButton.textContent = 'Atualizar demonstração';
        refreshButton.disabled = false;
      }, 1400);
    });
  }
})();
