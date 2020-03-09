const PRICE = 150;
let count = 0;

const priceElement = document.getElementById("price");
const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

const incrementProductCount = () => {
    ++count;
    priceElement.textContent = "$" + count * PRICE;
    countElement.textContent = count;
};

const decrementProductCount = () => {
    if (count <= 0) return;
    --count;
    priceElement.textContent = "$" + count * PRICE;
    countElement.textContent = count;
};

incrementButton.addEventListener("click", incrementProductCount);
decrementButton.addEventListener("click", decrementProductCount);

let item = document.querySelectorAll('.circle');

item.forEach(el => {
    el.onclick = function(e){
        item.forEach(el => {
            el.classList.remove('active');
        });
        e.target.classList.add('active');
    }
})

// code for slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
 function currentSlide(n) {
     showSlides(slideIndex = n);
 }
 function showSlides(n) {
     var i;
     var slides = document.getElementsByClassName("bad");
     var dots = document.getElementsByClassName("dot");

     if (n > slides.length) {
         slideIndex = 1
     }
     if (n < 1) {
         slideIndex = slides.length
     }
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className.replace("active", "");
     }
     slides[slideIndex - 1].style.display = "inline-block";
     dots[slideIndex - 1].className+= "active";
 }
