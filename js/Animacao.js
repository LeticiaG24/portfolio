window.addEventListener('DOMContentLoaded', function() {
    const leftHand = document.querySelector('.left-hand');
    const rightHand = document.querySelector('.right-hand');
    
    let lastScrollY = window.scrollY;
    let scrollDirection = 'down';
    
    const maxRotation = 25; // Graus máximos de rotação
    const maxTranslation = 50; // Pixels máximos de movimento

    function animateHandsSmooth() {
        const currentScrollY = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollHeight > 0 ? currentScrollY / scrollHeight : 0;
        
        const waveOffset = Math.sin(scrollProgress * Math.PI) * maxTranslation;
        const rotationOffset = Math.sin(scrollProgress * Math.PI) * maxRotation;
        
        leftHand.style.transform = `translateY(-${waveOffset}px) rotate(-${rotationOffset}deg)`;
        rightHand.style.transform = `translateY(${waveOffset}px) rotate(${rotationOffset}deg)`;
    }
    
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                animateHandsSmooth();
                ticking = false;
            });
            ticking = true;
        }
    });
});
