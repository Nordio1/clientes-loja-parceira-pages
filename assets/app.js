(() => {
  'use strict';

  const form = document.querySelector('#query-form');
  const input = document.querySelector('#test-id');
  const error = document.querySelector('#test-error');
  const result = document.querySelector('#result');

  if (!form || !input || !error || !result) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const testId = input.value.trim().toUpperCase();
    const valid = /^TESTE-[A-Z0-9-]{1,32}$/.test(testId);

    if (!valid) {
      error.textContent = 'Use exclusivamente um identificador fictício iniciado por TESTE-.';
      error.hidden = false;
      result.hidden = true;
      input.setAttribute('aria-invalid', 'true');
      input.focus();
      return;
    }

    input.value = testId;
    input.removeAttribute('aria-invalid');
    error.hidden = true;
    result.hidden = false;
    result.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
