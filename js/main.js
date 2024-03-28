// ============= navbar functionality ================//
let hamburgerEl = document.querySelector("div.hamburger");
let menuEl = document.querySelector("ul#menu-list");

dispnone = () =>{
    menuEl.style.display = "none";
}

hamburgerEl.addEventListener("click", () => {
    menuEl.classList.toggle("active");
    
    if(menuEl.classList.value == "active"){
        menuEl.style.display = "flex";
        menuEl.style.animation = "drop .2s ease forwards";

        hamburgerEl.innerHTML = "&times;";
        console.log("active");
    }
    else{
        menuEl.style.animation = "takeup .2s ease forwards";
        
        hamburgerEl.innerHTML = "&checkmark;";
        setTimeout(dispnone, 200);
    }
    // console.log(menuEl);
    // console.log(menuEl.classList.value);
    // console.log(menuEl)
})

// ============= carousel functionality ================//
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


// ============= button functionality ================//
let hireMeBtn = document.querySelectorAll("button.hire-me");
let downloadBtn = document.querySelectorAll("button.download");

//hire-me functionality
hireMeBtn.forEach(e => {
    e.addEventListener("click", () => {
            console.log("hire-me");
    });
})

//hire-me functionality
downloadBtn.forEach(e => {
    e.addEventListener("click", () => {
            console.log("download");
    });
})

