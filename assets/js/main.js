
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');
//MENU SHOW 

if(navToggle){
navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu')
});
}
//MENU HIDDEN
if(navClose){
navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
});
}


const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
const navMenu = document.getElementById('nav-menu')
// When we click on each nav_link, we remove the show-menu class
navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
console.log(sections);

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(section =>{
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop;
        sectionId = section.getAttribute('id')

        if(scrollY >= sectionTop && scrollY <= (sectionTop + sectionHeight)){
            document.querySelector('#nav-menu a[href*="#' + sectionId + '"]')
            .classList.add('active-link')
        }else{
            document.querySelector('#nav-menu a[href*="#' + sectionId + '"]')
            .classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
const nav = document.getElementById('header')
// When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


//show scroll
function scrollUp(){
const scrollup = document.getElementById('scroll-up');
// When the scroll is higher than 80 viewport height, add the show-scroll class to the a tag with the scroll-top class
if(this.scrollY >= 80) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//Dark theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
// Add or remove the dark / icon theme
document.body.classList.toggle(darkTheme)
themeButton.classList.toggle(iconTheme)
// We save the theme and the current icon that the user chose
localStorage.setItem('selected-theme', getCurrentTheme())
localStorage.setItem('selected-icon', getCurrentIcon())
})

