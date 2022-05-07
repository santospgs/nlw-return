window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    changeBackgroundBakToTopButton()
};

function showNavOnScroll(){
    if (scrollY > 0){
        navigation.classList.add('scroll') 
    }else{
        navigation.classList.remove('scroll')
    }   
};

function showBackToTopButtonOnScroll(){
    if (scrollY > 550){
        backToTopButton.classList.add('show')
    } else {        
        backToTopButton.classList.remove('show')
    }
}

function changeBackgroundBakToTopButton(){
    if (scrollY > 4300){
        backToTopButton.classList.add('bgWhite')
    } else {
        backToTopButton.classList.remove('bgWhite')
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,    
}).reveal(`
    #home,
    #home img,
    #home .information,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content,
    #contact,
    #contact header,
    #contact .content`
);