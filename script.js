let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function showSlides() {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > totalSlides) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function moveSlide(n) {
  slideIndex += n;
  if (slideIndex > totalSlides) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = totalSlides; }
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

showSlides();
