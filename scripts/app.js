const nav = document.querySelector('nav');
const cancel = document.querySelector('nav .logo span')
const mobileNav = document.querySelector('.mobile-nav');


cancel.addEventListener('click', () =>{
  nav.classList.add('remove')
})

mobileNav.addEventListener('click', () =>{
  nav.classList.remove('remove')
})


document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        type: 'loop',
      });
    splide.mount();
});

