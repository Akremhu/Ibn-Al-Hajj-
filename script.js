// نظام الحجز البسيط - إرسال البيانات للواتساب مباشرة
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelectorAll('input')[0].value;
    const doctor = this.querySelector('select').value;
    const date = this.querySelectorAll('input')[1].value;
    
    const message = `طلب حجز جديد من الموقع:%0Aالاسم: ${name}%0Aالعيادة: ${doctor}%0Aالتاريخ: ${date}`;
    
    window.open(`https://wa.me/967782629622?text=${message}`, '_blank');
});

// تأثير التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
