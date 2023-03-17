const sliders = document.querySelectorAll(".ganhadores");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");

let currentSlide = 0;

function hideSlider() {
  sliders.forEach((item) => item.classList.remove("on"));
}

function showSlider() {
  sliders[currentSlide].classList.add("on");
}
