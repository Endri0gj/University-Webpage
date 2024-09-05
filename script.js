  // script.js

  document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scroll down
            nav.classList.add('hidden-nav');
        } else {
            // Scroll up
            nav.classList.remove('hidden-nav');
        }
        
        lastScrollTop = scrollTop;
    });
});