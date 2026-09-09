/* ======= Home Split Text ======= */
const { animate, splitText, stagger } = anime

const { chars: chars1 } = splitText('.home__profession-1', { chars: true });
const { chars: chars2 } = splitText('.home__profession-2', { chars: true });

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
})
animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
})

/* ======= Swiper Projects ======= */
const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

/* ======= Work Tabs ======= */
// const tabs = document.querySelectorAll('[data-target]'),
//       tabContents  = document.querySelectorAll('[data-content]')

// tabs.forEach((tab) => {
//   tab.addEventListener('click', () => {
//     const targetSelector = tab.dataset.target,
//           targetContent = document.querySelector(targetSelector)

//     // Disable all content and active tabs
//     tabContents.forEach((content) => content.classList.remove('work-active'))
//     tabs.forEach((t) => t.classList.remove('work-active'))

//     // Active the tab and corresponding content
//     tab.classList.add('work-active')
//     targetContent.classList.add('work-active')
//   })
// });      

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {

    const targetContent = document.querySelector(
      `#${tab.dataset.target}`
    );

    // Hide all contents
    tabContents.forEach((content) => {
      content.classList.remove('work-active');
    });

    // Remove active state from buttons
    tabs.forEach((item) => {
      item.classList.remove('work-active');
    });

    // Activate current button and content
    tab.classList.add('work-active');
    targetContent.classList.add('work-active');
  });
});

/* ======= Service Acordion ======= */

/*  const serviceCards = document.querySelectorAll('.services__card');

serviceCards.forEach(card => {
    const button = card.querySelector('.services__button');

    button.addEventListener('click', () => {
        card.classList.toggle('services-open');
        card.classList.toggle('services-close');
    });
});  */
//  const serviceCards = document.querySelectorAll('.services__card');

// serviceCards.forEach(card => {
//     const button = card.querySelector('.services__button');

//     button.addEventListener('click', () => {
//         serviceCards.forEach(item => {
//             if (item !== card) {
//                 item.classList.remove('services-open');
//                 item.classList.add('services-close');
//             }
//         });

//         card.classList.toggle('services-open');
//         card.classList.toggle('services-close');
//     });
// });

const serviceButtons = document.querySelectorAll('.services__button');

serviceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const serviceCards = document.querySelectorAll('.services__card');
    const currentCard = button.parentElement;
    const currentInfo = currentCard.querySelector('.services__info');
    const isCardOpen = currentCard.classList.contains('services-open');

    // Close all cards
    serviceCards.forEach(card => {
      card.classList.remove('services-open');
      card.classList.add('services-close');

      const info = card.querySelector('.services__info');
      info.style.height = '0px';
    });

    // Open clicked card if it wasn't already open
    if (!isCardOpen) {
      currentCard.classList.remove('services-close');
      currentCard.classList.add('services-open');

      currentInfo.style.height = currentInfo.scrollHeight + 'px';
    }
  });
});

/* ======= Testimonials of Duplicate Cards ======= */
// Duplicate image to make the animation work

const tracks = document.querySelectorAll('.testimonials__content')

tracks.forEach(track => {
  const cards = [...track.children]  // spread to make a static copy

  // duplicate cards only once
  for (const card of cards) {
    track.appendChild(card.cloneNode(true))
  }
})

/* ======= Copy Email in Contact ======= */
const copyBtn = document.getElementById('contact-btn'),
  copyEmail = document.getElementById('contact-email').textContent.trim()

copyBtn.addEventListener('click', function () {
  // Use the clipboard API to copy text
  navigator.clipboard.writeText(copyEmail);
  copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>'

  // Restore the original text
  setTimeout(() => {
    copyBtn.innerHTML = 'Copy email <i class="ri-file-copy-line"></i>'
  }, 1000)
})

/* ======= Current Year of The Footer ======= */
const textYear = document.getElementById('footer-year'),
  currentYear = new Date().getFullYear()

// Each year it is updated to the current year
textYear.textContent = currentYear

/* ======= Scroll Section Active Link ======= */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  // We get position by scrolling down
  const scrollY = window.scrollY

  sections.forEach(section => {
    const id = section.id, // id of each section
    top = section.offsetTop - 50, // Distance from the top edge
      height = section.offsetHeight, // Element height
      link = document.querySelector('.nav__menu a[href*=' + id + ']')  // id nav link
    if(!link) return
    link.classList.toggle('active-link', scrollY > top && scrollY <= top + height)
  })
}

window.addEventListener('scroll', scrollActive)

/* ======= Custom Cursor ======= */
const cursor = document.querySelector('.cursor')
let mouseX = 0, mouseY = 0 // Store mouse position

const cursorMove = () => {
  // Position the cursor
  cursor.style.left = `${mouseX}px`
  cursor.style.top = `${mouseY}px`
  cursor.style.transform = `translate(-50%, -50%)`

  // Update the cursor animation
  requestAnimationFrame(cursorMove)
}

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
})

cursorMove()

/* Hide Custom Cursor on links */
const a = document.querySelectorAll('a')

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hide-cursor')
  })
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hide-cursor')
  })
})

/* ======= Scroll Reveal Animation ======= */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  // reset: true, // Animation repeat
})

sr.reveal('.home__image, .projects__container, .work__container, .testimonials__container, .contact__container')
sr.reveal('.home__data', {delay: 900, origin: 'buttom'})
sr.reveal('.home__info', {delay: 1200, origin: 'buttom'})
sr.reveal('.home__social, .home__cv', {delay: 1500})
sr.reveal('.about__data', {origin: 'left'})
sr.reveal('.about__image', {origin: 'right'})
sr.reveal('.services__card', {interval: 100})

/* ======= Home Split Text ======= */