document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to handle scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar-custom');
        const scrollThreshold = 50;  // Adjust this based on when you want the navbar to stick

        // Check if the page has scrolled past the threshold
        if (window.scrollY > scrollThreshold) {
            // Add the 'navbar-fixed' class to make the navbar fixed at the top
            navbar.classList.add('navbar-fixed');
        } else {
            // Remove the 'navbar-fixed' class when scrolling back to the top
            navbar.classList.remove('navbar-fixed');
        }
    });
});
