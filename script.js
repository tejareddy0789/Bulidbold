	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');



var typingEffect = new Typed(".typedText", {
        strings: ["Designer", "Coder","Developer","Programmer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000
});
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
  });
  
  /* HOME */
  sr.reveal(".social_icons", {});
  sr.reveal(".featured-name", { delay: 100 });
  sr.reveal(".featured-text-info", { delay: 200 });
  sr.reveal(".featured-image", { delay: 300 });
  
  /*  PROJECT BOX */
  sr.reveal(".services-box", { interval: 300 });
  
  /* HEADINGS */
  sr.reveal(".heading", {});
    
  /* ABOUT INFO & CONTACT INFO */
  const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true
  });
  
  srLeft.reveal(".about-container", { delay: 200 });
  srLeft.reveal(".contact", { delay: 100 });
  
  /* ABOUT SKILLS & FORM BOX */
  const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true
  });
  srRight.reveal(".portfolio-img", { delay: 100 });
  srRight.reveal(".skill", { delay: 100 });
  srRight.reveal(".skill-box", { delay: 100 });