var hamburger = document.getElementById("menu");

    /* Event Listener */
    hamburger.addEventListener('click', ()=>{
        var menuBox= document.getElementById('menuBox');
        menuBox.classList.add('d-block');
        }
    );

    const closeBtn = document.getElementById("closeBtn")
    closeBtn.addEventListener('click', ()=>{
        var  menuBox= document.getElementById('menuBox');
        menuBox.classList.remove('d-block');
    }
    );

   let slideIndex = 1;
   showSlides(slideIndex);
   
   function plusSlides(n) {
    showSlides(slideIndex += n);
   }

   function currentSlide(n) {
    showSlides(slideIndex = n);
   }
   
   function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("header-content");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
   }

