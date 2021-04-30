/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL BUY */
sr.reveal('.buy__img',{}); 
sr.reveal('.buy__subtitle',{delay: 400}); 
sr.reveal('.buy__text',{delay: 400}); 

/*SCROLL RENT*/
sr.reveal('.rent__subtitle',{}); 
sr.reveal('.rent__text',{}); 
sr.reveal('.rent__data',{interval: 200}); 
sr.reveal('.rent__img',{delay: 600});
 
/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

/*SUBMIT BUTTON*/
$(document).ready(function(){


 
    $('#btn').on('click', function(){
    $('#text').append("thanks");   
   
    
    });
    
  });


