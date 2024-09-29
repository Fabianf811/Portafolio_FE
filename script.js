const menuIcon = document.querySelector('#menu__icon');
const navMenu = document.querySelector('.nav__bar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bi-x');
    navMenu.classList.toggle('active');
}

document.getElementById('leer-mas').addEventListener('click', function(event) {
    event.preventDefault();
    var educacion = document.getElementById('educacion');
    educacion.classList.toggle('mostrar');
    
    if (educacion.classList.contains('mostrar')) {
        this.textContent = 'Leer menos'; 
    } else {
        this.textContent = 'Leer más'; 
    }
});

const slider = document.querySelector('.slider__contenedor');
const slides = document.querySelectorAll('.servicios__info');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let slideIndex = 0;

const showSlide = (n) => {
slides.forEach((slide) => {
    slide.style.display = 'none';
});
slides[n].style.display = 'block';
};

const nextSlide = () => {
slideIndex++;
if (slideIndex >= slides.length) {
    slideIndex = 0;
}
showSlide(slideIndex);
};

const prevSlide = () => {
slideIndex--;
if (slideIndex < 0) {
    slideIndex = slides.length - 1;
}
showSlide(slideIndex);
};

showSlide(slideIndex);

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);


document.getElementById("openModalBtn").onclick = function() {
    document.getElementById("authModal").style.display = "block";
}

document.querySelector(".closeBtn").onclick = function() {
    document.getElementById("authModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("authModal")) {
        document.getElementById("authModal").style.display = "none";
    }
}

function openForm(evt, formName) {
    var i, formContent, tablinks;
    formContent = document.getElementsByClassName("form-content");
    for (i = 0; i < formContent.length; i++) {
        formContent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(formName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

