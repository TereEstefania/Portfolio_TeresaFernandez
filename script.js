// navbar on scroll
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});
 
// typed terminal line
const phrases = [
  'deploy --env=production',
  'git commit -m "ship it"',
  'npm run build --optimism=true'
];
const typedEl = document.getElementById('typed-line');
let pIndex = 0, cIndex = 0, deleting = false;
 
function typeLoop(){
  const current = phrases[pIndex];
  if(!deleting){
    cIndex++;
    typedEl.textContent = current.slice(0, cIndex);
    if(cIndex === current.length){
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    cIndex--;
    typedEl.textContent = current.slice(0, cIndex);
    if(cIndex === 0){
      deleting = false;
      pIndex = (pIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 35 : 60);
}
typeLoop();
 
// scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));
 
// gauge fill animation
const gauges = document.querySelectorAll('.gauge-fill');
const gio = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const fill = entry.target.dataset.fill;
      entry.target.style.width = fill + '%';
      gio.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
gauges.forEach(g => gio.observe(g));
 
// close mobile menu after click
document.querySelectorAll('#navMenu .nav-link, #navMenu .btn').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navMenu');
    if(menu.classList.contains('show')){
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});