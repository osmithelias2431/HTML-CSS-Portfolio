// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
}

document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

//Typewriter Effect
const typeWriterText = document.querySelector('#hero-header');
const text = "Hi, I'm Oneilia";

function typeWriter(element, text, i = 0) {
    if (i === 0) {
        element.textContent = ""; // Clear the text content before starting
    }
    
    element.textContent += text[i];
    
    if (i === text.length - 1) {
    return;
}
  setTimeout(() => typeWriter(element, text, i + 1), 100);
  
}

typeWriter(typeWriterText, text); 
