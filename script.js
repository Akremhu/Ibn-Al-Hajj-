// وظيفة لإظهار تنبيه ترحيبي عند النقر على حجز موعد
document.querySelectorAll('a[href^="https://wa.me"]').forEach(button => {
    button.addEventListener('click', () => {
        console.log("يتم الآن تحويل المريض إلى واتساب مستشفى ابن الحاج...");
    });
});

// إضافة حركة بسيطة للقائمة عند النزول بالصفحة
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-xl', 'border-b', 'border-blue-100');
    } else {
        nav.classList.remove('shadow-xl', 'border-b', 'border-blue-100');
    }
});
