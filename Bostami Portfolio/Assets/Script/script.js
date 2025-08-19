
// Auto hide navbar when clicked on any nav-item

const navMenu = document.querySelector('.nav-menu');

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function(a){

    a.addEventListener("click",()=>{

        navMenu.classList.remove("show-menu");

    })

});

/*=============== DARK LIGHT THEME ===============*/ 


const themeToggle = document.getElementById('theme-switch-icon');
const body = document.body;

// Check the stored theme preference on page load
const storedTheme = localStorage.getItem('theme');

if (storedTheme) {
 body.classList.add(storedTheme);
 if (storedTheme === 'dark-mode') {
   themeToggle.classList.add('ri-sun-line'); // Sun icon
 }
}

themeToggle.addEventListener('click', () => {

  body.classList.toggle('dark-mode');
  themeToggle.classList.toggle('ri-sun-line');

  // Store the theme preference
  if(body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  }else{
    localStorage.removeItem('theme');
  }

});
