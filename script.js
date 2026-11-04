// Mobile navigation
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Inquiry form
// Placeholder behaviour: validates and shows a thank-you message.
// Before launch, set the form's action to a form service endpoint
// (e.g. Formspree or Netlify Forms) so inquiries reach Elizabeth's inbox.
const form = document.getElementById('inquiry');
const status = form.querySelector('.form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  form.querySelectorAll('[required]').forEach((field) => {
    const ok = field.value.trim() !== '' && field.checkValidity();
    field.classList.toggle('invalid', !ok);
    if (!ok) valid = false;
  });

  if (!valid) {
    status.textContent = 'Please add your name, a valid email and a short note about your project.';
    return;
  }

  status.textContent = 'Thank you! Your inquiry is noted. Elizabeth will be in touch soon.';
  form.reset();
});
