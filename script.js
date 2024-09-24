/* ================= toggle icon navbar =================== */
/**
 * Toggles the 'bx-x' class on the menu icon and the 'active' class on the navbar
 * when the menu icon is clicked.
 */
let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

/* ================= Scroll Section Active Link =================== */
/**
 * Updates the active link in the navbar based on the current scroll position.
 * Also makes the header sticky when scrolled past a certain point and removes
 * the toggle icon and navbar active state when a navbar link is clicked.
 */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  /* ================= Sticky Navbar =================== */
  /**
   * Toggles the 'sticky' class on the header based on the scroll position.
   */
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /* ================= Remove Toggle icon and navbar when click navbar link (scroll) =================== */
  /**
   * Removes the 'bx-x' class from the menu icon and the 'active' class from the navbar
   * when a navbar link is clicked.
   */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/* ================= Scroll Reveal =================== */
/**
 * Initializes [ScrollReveal](https://scrollrevealjs.org/) animations with specified settings and applies
 * different reveal origins to various elements.
 */
ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ================= Typed JS =================== */
/**
 * Initializes the [Typed.js](https://www.npmjs.com/package/typed.js) library to create a typing animation on the specified element
 * with the given strings and typing settings.
 */
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
