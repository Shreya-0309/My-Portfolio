/* Particles.js */
if (window.particlesJS) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 700 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.35, width: 1 },
      move: { enable: true, speed: 4, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } }
    },
    retina_detect: true
  });
}

/* Typed.js */
if (window.Typed) {
  new Typed('#typed', {
    strings: ["Data Scientist", "Innovative Problem Solver", "Tech Enthusiast"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
    backDelay: 1500
  });
}

/* AOS */
if (window.AOS) { AOS.init({ once:true, duration:700 }); }

/* Scrollspy - IntersectionObserver */
(function(){
  const navLinks = document.querySelectorAll('header nav a.nav-link');
  const sections = Array.from(navLinks).map(l => document.getElementById(l.dataset.target));
  const options = { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0 };

  function clearActive() {
    navLinks.forEach(a => { a.classList.remove('active'); a.removeAttribute('aria-current'); });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const link = document.querySelector(`header nav a[data-target="${id}"]`);
        clearActive();
        if (link) { link.classList.add('active'); link.setAttribute('aria-current', 'true'); }
      }
    });
  }, options);

  sections.forEach(sec => { if (sec) observer.observe(sec); });

  // smooth scroll on click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      clearActive();
      link.classList.add('active');
      link.setAttribute('aria-current', 'true');
    });
  });
})();

/* Mobile Hamburger Menu */
(function(){
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('header nav');

  if(hamburger && nav){
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('show');
      hamburger.classList.toggle('active');
      const expanded = hamburger.classList.contains('active');
      hamburger.setAttribute('aria-expanded', expanded);
    });

    // Close menu on link click
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('show');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();


