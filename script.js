// mobile nav toggle
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // admission form — client-side only demo
  const form = document.getElementById('admissionForm');
  const success = document.getElementById('formSuccess');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    success.style.display = 'block';
    success.scrollIntoView({behavior:'smooth', block:'center'});
    form.reset();
  });
