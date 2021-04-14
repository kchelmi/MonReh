// GSAP Animation
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');
const burger = document.querySelector('.burger');

const tl = new TimelineMax();

// tl - timeline
tl.fromTo(hero, 1, {
  height: '0%'
}, {
  height: '80%',
  ease: Power2.easeInOut
}).fromTo(hero, 1.2, {
  width: '100%'
}, {
  width: '80%',
  ease: Power2.easeInOut
}).fromTo(slider, 1.2, {
  x: '-100%'
}, {
  x: '0%',
  ease: Power2.easeInOut
}, "-=1.2").fromTo(logo, 0.5, {
  opacity: 0,
  x: 30
}, {
  opacity: 1,
  x: 0
}, "-=0.5").fromTo(burger, 0.5, {
  opacity: 0,
  x: 30
}, {
  opacity: 1,
  x: 0
}, "-=0.5").fromTo(headline, 0.5, {
  opacity: 0,
  x: 30
}, {
  opacity: 1,
  x: 0
}, "-=0.5")

// Menu Animation

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.5}s`
      }
    });
    // Burger Animation
    burger.classList.toggle('toggleBurger');
    
  });
}

const app = () => {
  navSlide()
}

app();

// Scroll To Section jQuery

$('.nav-links li a').on('click', function () {
  const goToSection = "#" + $(this).attr('class');

  $('body, html').animate({
    scrollTop: $(goToSection).offset().top
  }, 1000)
  nav.classList.remove('nav-active')
  burger.classList.toggle('toggleBurger');
})

// Animation fadeIn 

const fadeIns = document.querySelectorAll('.fadeIn')

window.addEventListener('scroll', checkfadeIn);

checkfadeIn()

function checkfadeIn() {
  const triggerfadeIn = window.innerHeight / 5 * 4;

  fadeIns.forEach(fadeIn => {
    const fadeInTop = fadeIn.getBoundingClientRect().top

    if (fadeInTop < triggerfadeIn) {
      fadeIn.classList.add('animate-fadeIn')
    }
  })
}