window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    changeBackgroundBakToTopButton()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
};

function activateMenuAtCurrentSection(section){

    // linha que determina o centro da viewport
    const targetLine = scrollY + (innerHeight / 2)
    
    //verificar se a seção passou da linha
    //quais dados vou precisar?
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    
    // verifica se o scroll passou do centro da seção 
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    // indica o fim da seção
    const sectionEndsAt = sectionTop + sectionHeight

    // verifica se o fim da seção passou da targetline    
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    // limite da seção
    const sectionBoudaries = sectionTopReachOrPassedTargetLine &&  !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoudaries){
        menuElement.classList.add('active')
    }
    
}

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

/* let sections = document.body.querySelectorAll('section')
sections.forEach(function(element){
    activateMenuAtCurrentSection(element.id)
}) */