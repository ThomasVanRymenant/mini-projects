// buttons
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

// references
const carousel = document.querySelector(".carousel");
const slideContainer = carousel.querySelector('.slide-wrapper');
const slides = slideContainer.querySelectorAll('img');
const slideWidth = carousel.clientWidth;

// variables
let counter = 1;
let doWrap = false;

// event listeners
nextBtn.addEventListener('click', ()=>{
    if (counter >= slides.length - 1) return; // cap counter
    slideContainer.style.transition = 'transform 0.9s ease-out';
    counter++;
    slideContainer.style.transform = 'translateX(' + (-(counter*slideWidth)) + 'px)';
});

prevBtn.addEventListener('click', ()=>{
    if (counter <= 0) return; // cap counter
    slideContainer.style.transition = 'transform 0.9s ease-out';
    counter--;
    slideContainer.style.transform = 'translateX(' + (-(counter*slideWidth)) + 'px)';
});

slideContainer.addEventListener('transitionend', ()=>{
    if (slides[counter].classList.contains('firstSlide')) {
        doWrap = true;
        counter = slideContainer.querySelectorAll('img').length - 2;
    } else if (slides[counter].classList.contains('lastSlide')) {
        doWrap = true;
        counter = 1;
    }
    if (doWrap) {
        slideContainer.style.transition = 'none';
        slideContainer.style.transform = 'translateX(' + (-(counter*slideWidth)) + 'px)';
        doWrap = false;
    }
});
