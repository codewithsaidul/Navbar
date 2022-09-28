/*================= Show Menu ================*/
let navMenu = document.querySelector('#nav-menu');
let navToggle = document.querySelector('#nav__toggle');
let navClose = document.querySelector('#nav__close');

/*-------------------- Menu Show ----------------------*/
/*=============  Validated If Constant Exist ==============*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        //console.log(navMenu)
        navMenu.classList.add('show-menu')
    })
}

/*------------------------------ Hide Menu ------------------------------------*/
/*===== Validated If Constant Exist =======*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*======================= Remove Menu Mobile ========================*/
let navLink = document.querySelectorAll('.nav__link');

let linkAction = () =>{
    let navMenu = document.querySelector('#nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))