let clickCount = 0;
const aqui = document.getElementById('aqui');
const oi = document.getElementById('oi');
const text = document.getElementById('text');

aqui.addEventListener('click', () => {
    clickCount++;
    if (clickCount < 4) {
        // Move to random position
        const maxX = window.innerWidth - aqui.offsetWidth;
        const maxY = window.innerHeight - aqui.offsetHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        aqui.style.position = 'absolute';
        aqui.style.left = randomX + 'px';
        aqui.style.top = randomY + 'px';
    } else {
        // Show Oi and hide text
        oi.style.display = 'block';
        text.style.display = 'none';
    }
});