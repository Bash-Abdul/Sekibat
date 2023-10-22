window.addEventListener('load',()=>{
  const load = document.querySelector('.loader');

  load.classList.add('loader-hidden');

  load.addEventListener('transitionend', ()=>{
      document.body.removeChild('loader');
  })
})






let menu = document.querySelector('.menu i');
let menu_2 = document.querySelector('.menu_2');
let navlink = document.querySelector('.navlink');
let navContainer = document.querySelector('.nav_container');

menu.addEventListener('click', ()=>{
  menu.classList.toggle('bx-x');
  navlink.classList.toggle('active');
})




let section = document.querySelectorAll('.section');
let nav = document.querySelectorAll('.nav_container nav .navlink a');

window.onscroll = () =>{

  if (window.scrollY > 20){
    navlink.classList.remove('active');
    navContainer.style.backgroundColor = 'black';
    menu.classList.remove('bx-x');
  }


    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height){
            nav.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.nav_container nav .navlink a[href*=' + id + ']').classList.add('active')
            })
        }
    })
  }









var swiper = new Swiper(".main_slider", {
    spaceBetween: 20,
    effect:'fade',
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
        delay:4500,
        disableOnInteraction: false,
    },
  });