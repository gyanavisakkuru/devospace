document.addEventListener('DOMContentLoaded', function () {
    const unlockContainer = document.querySelector('.Unlocking-container');
    const slidesContainer = document.querySelector('.unlock1');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const slideWidth = document.querySelector('.s1').offsetWidth;

    function nextSlide() {
        slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        slidesContainer.style.transform = `translateX(-${slideWidth}px)`;
        setTimeout(() => {
            slidesContainer.style.transition = 'none';
            slidesContainer.style.transform = 'translateX(0)';
            slidesContainer.appendChild(slidesContainer.firstElementChild);
        }, 500);
    }

    function prevSlide() {
        slidesContainer.style.transition = 'none';
        slidesContainer.insertBefore(slidesContainer.lastElementChild, slidesContainer.firstElementChild);
        slidesContainer.style.transform = `translateX(-${slideWidth}px)`;
        setTimeout(() => {
            slidesContainer.style.transition = 'transform 0.5s ease-in-out';
            slidesContainer.style.transform = 'translateX(0)';
        }, 50);
    }

    arrowLeft.addEventListener('click', prevSlide);
    arrowRight.addEventListener('click', nextSlide);

    // Optionally, you can add touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;

    unlockContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    unlockContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;

        if (touchStartX - touchEndX > 50) {
            nextSlide();
        } else if (touchEndX - touchStartX > 50) {
            prevSlide();
        }
    });
});

var acc = document.getElementsByClassName("accordion");
var i;

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var sign = this.querySelector('.sign');
    if (panel.style.display === "block") {
      panel.style.display = "none";
      sign.textContent = '+';
    } else {
      panel.style.display = "block";
      sign.textContent = '-';
    }
  });
}