document.addEventListener('DOMContentLoaded', function() {
    // Delay before hiding the splash screen and showing the main content
    setTimeout(function() {
        document.querySelector('.splash-screen').style.opacity = 0;
        document.querySelector('.splash-screen').style.pointerEvents = 'none'; // Disable interaction
        document.querySelector('.main-content').style.display = 'block';
    }, 3000); // 3 seconds delay
});
