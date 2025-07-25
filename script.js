  let menu = document.querySelector('#menu-icon');
let navbar =document.querySelector('navbar');

menu.onclick =() =>{
menu.classList.toggle('bx-x');
navbar.classList.toggle('active');

}
window.onscroll =() =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
      strings: [' FrontEnd Developer', 'BackEnd Developer' ,'Content Creator' ,'Graphic Designer'],
      typeSpeed: 80,
      backSpeed: 80,
      backdelay: 1200,
      loop: true,
    });
