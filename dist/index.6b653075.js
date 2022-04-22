document.addEventListener('DOMContentLoaded', ()=>{
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) // Add a click event on each of them
    $navbarBurgers.forEach((el)=>{
        el.addEventListener('click', ()=>{
            // Get the target from the "data-target" attribute
            const { target  } = el.dataset;
            const $target = document.getElementById(target);
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });
});
const links = document.querySelectorAll('a.navbar-item');
links.forEach((link)=>{
    link.addEventListener('click', ()=>{
        const currActive = document.querySelector('.is-active');
        const nextActive = currActive.className;
        currActive.className = nextActive.replace('is-active', '');
        // eslint-disable-next-line no-param-reassign
        link.className += ' is-active';
    });
});

//# sourceMappingURL=index.6b653075.js.map
