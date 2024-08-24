document.addEventListener('DOMContentLoaded', () => {
    // Header scroll animation
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Fade-in animation for projects
    const fadeInElements = document.querySelectorAll('.fade-in');

    const handleScroll = () => {
        fadeInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Form submission handler (for demonstration)
    document.getElementById('contact-form').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message sent!');
    });
});
