let slider = document.querySelector(".slider");
let item = document.querySelectorAll(".slider span");
let container = document.querySelector(".position-list");

let slideIndex = 0;

function moveSlider(index){
    if (index >= item.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = item.length - 1;
    } else {
        slideIndex = index;
    }

    const translateValue = - slideIndex * 46 + 'px';
    slider.style.transform = 'translateY(' + translateValue + ')';
}

activate = () => {

    moveSlider(slideIndex + 1);
}


setInterval(activate, 2000);
