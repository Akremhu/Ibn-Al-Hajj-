// وظيفة لجعل شريط التنقل يغير ظله عند النزول للأسفل
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-xl');
    } else {
        nav.classList.remove('shadow-xl');
    }
});

// تأثير بسيط لظهور بطاقات الأقسام بشكل تدريجي
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.dept-card');
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            card.style.transition = "all 0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 200 * index);
    });
});
