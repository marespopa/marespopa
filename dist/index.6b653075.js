/* eslint-disable no-plusplus */ const closeNavigationDelay = 1000;
function handleNavbarHighlight() {
    const sections = document.querySelectorAll('.page-section');
    function navHighlighter() {
        const scrollY = window.pageYOffset;
        sections.forEach((current)=>{
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.getBoundingClientRect().top + window.pageYOffset - 150;
            const sectionId = current.getAttribute('id');
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.main-navigation a[href*='${sectionId}']`).classList.add('is-active');
                return;
            }
            document.querySelector(`.main-navigation a[href*='${sectionId}']`).classList.remove('is-active');
        });
    }
    // Add an event listener listening for scroll
    window.addEventListener('scroll', navHighlighter);
}
function handleMobileNavigationDisplay() {
    const myNav = document.querySelector('#mainNavigation');
    const burger = document.querySelector('#mainNavigationBurger');
    burger.addEventListener('click', ()=>{
        myNav.classList.toggle('is-active');
        burger.classList.toggle('is-active');
    });
    function closeNavigation() {
        if (myNav) {
            myNav.classList.toggle('is-active');
            burger.classList.toggle('is-active');
        }
    }
    const links = document.querySelectorAll('#mainNavigation .navbar-item');
    links.forEach((link)=>{
        link.addEventListener('click', ()=>setTimeout(closeNavigation, closeNavigationDelay)
        );
    });
}
document.addEventListener('DOMContentLoaded', ()=>{
    handleMobileNavigationDisplay();
    handleNavbarHighlight();
});

//# sourceMappingURL=index.6b653075.js.map
