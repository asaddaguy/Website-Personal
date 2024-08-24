document.getElementById('changeMessage').addEventListener('click', function() {
    const messages = [
        'You light up my life! 🌟',
        'I’m so grateful for you! 💖',
        'You’re my sunshine on a rainy day! ☀️',
        'Together we’re unstoppable! 💪',
        'You make every day special! 🎉'
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').innerText = messages[randomIndex];
});
