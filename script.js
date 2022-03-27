let slideIndex = 0;
var timer = null;
let images = document.getElementsByClassName("image");
let dots = document.getElementsByClassName("dot");
let next = document.getElementsByClassName("next");
let prev = document.getElementsByClassName("prev");

showSlides(slideIndex);

next[0].onclick = function() {nextSlide(1)}
prev[0].onclick = function() {nextSlide(-1)}

dots[0].onclick = function() {currentSlide(1)};
dots[1].onclick = function() {currentSlide(2)};
dots[2].onclick = function() {currentSlide(3)};

// Next/prev buttons for slideshow
function nextSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n-1);
}

// dots image control
function currentSlide(n) {
  showSlides(slideIndex = n-1)
  clearTimeout(timer);
}

function showSlides() {
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex>images.length) {slideIndex = 1}
  if (slideIndex<1) {slideIndex = images.length}
  images[slideIndex-1].style.display = "block";
  console.log(slideIndex)
  timer = setTimeout(showSlides,3000);
}

