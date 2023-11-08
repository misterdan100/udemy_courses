const navMenu = document.querySelector('#nav-menu'),
      navToggle = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close'),
      navLink = document.querySelectorAll('.nav__link')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

function linkAction() {
    const navMenu = document.querySelector('#nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach( item => item.addEventListener('click', linkAction));

//* SWIPER
const homeSwiper = new Swiper('.swiper', {
    // direction: 'horizontal',
    spaceBetween: 30,
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

let newSwiper = new Swiper('.new-swiper', {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 16,
}) 

//* SCROLL UP
function scrollUp() {
    const scrollUp = document.querySelector('#scroll-up')
    if(this.scrollY >= 460) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp);

//* SECTION ACTIVE
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;
    
    sections.forEach( current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop -58,
              sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//* SCROLL REVEAL
const sr = ScrollReveal({
    origin: 'top',
    distance: '60%',
    duration: 2500,
});

sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`);
sr.reveal(`.category__data, .trick__content, .footer__content`, { interval: 500 })
sr.reveal(`.about__data, .discount__img`, { origin: 'left' });
sr.reveal(`.about__img, .discount__data`, { origin: 'right' });