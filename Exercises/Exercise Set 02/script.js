document.addEventListener('DOMContentLoaded', () => {
    VanillaTilt.init(document.querySelectorAll(".box"), {
        max: 5,
        speed: 200,
        glare: true,
        "max-glare": 0.5,
        scale: 1.02
    });

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        box.style.opacity = '0';
        box.style.animation = `fadeIn 0.6s ease ${index * 0.2}s forwards`;

        box.addEventListener('mousemove', (e) => {
            const rect = box.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / box.clientWidth) * 100;
            const y = ((e.clientY - rect.top) / box.clientHeight) * 100;
            
            box.querySelector('.glow').style.setProperty('--x', `${x}%`);
            box.querySelector('.glow').style.setProperty('--y', `${y}%`);

            const hueRotate = (x / 100) * 10 - 5;
            box.style.filter = `hue-rotate(${hueRotate}deg)`;
        });

        box.addEventListener('mouseleave', () => {
            box.style.filter = 'none';
        });

        setInterval(() => {
            if (Math.random() < 0.1) {
                box.style.transform = `translateX(${Math.random() * 2 - 1}px)`;
                setTimeout(() => {
                    box.style.transform = 'none';
                }, 50);
            }
        }, 2000);
    });
});