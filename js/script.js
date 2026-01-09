document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card-container');
    const serviceSection = document.querySelector('.animate-on-load');

    // 1. Fade-in card smoothly
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';

    setTimeout(() => {
        card.style.transition = 'opacity 1s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    }, 200);

    // 2. Animate "Our Services" after card appears
    if (serviceSection) {
        setTimeout(() => {
            serviceSection.classList.add('visible');
        }, 800); // Slight delay after card fully loads
    }

    // 3. Interactive Hover Tilt (Desktop Only)
    if (window.innerWidth > 768) {
        let isTilting = false;

        document.addEventListener('mousemove', (e) => {
            if (!isTilting) {
                // Only apply tilt if not animating in
                const opacity = parseFloat(card.style.opacity);
                if (opacity >= 1) {
                    isTilting = true;
                }
            }

            if (isTilting) {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
                // Use CSS transform with preserve scale + add rotation
                card.style.transform = `scale(1) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            }
        });

        // Reset tilt on mouse leave
        document.addEventListener('mouseleave', () => {
            if (isTilting) {
                card.style.transform = 'scale(1)';
            }
        });
    }
});
