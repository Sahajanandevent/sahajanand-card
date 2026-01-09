document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card-container');
    
    // Smooth Fade-in
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        card.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    }, 200);

    // Interactive Hover Tilt (Desktop Only)
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
            let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });
    }
});