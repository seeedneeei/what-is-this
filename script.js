document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        container.appendChild(heart);

        const randomPosition = Math.random() * 100;
        heart.style.left = randomPosition + 'vw';

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});
