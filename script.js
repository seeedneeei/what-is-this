document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        container.appendChild(heart);

        heart.addEventListener('animationed', function() {
            heart.remove();
        });
    }

    setInterval(createHeart, 500);
});
