// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Manejo del formulario de contacto
document.getElementById('formulario-reserva').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, usando fetch para enviar los datos a un servidor
    
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    this.reset();
});

// Navbar responsive
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.style.background = '#ffffff';
    navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
});

//Sección de Testimonios 
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const testimonios = document.querySelectorAll('.testimonio');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    function showSlide(n) {
        testimonios.forEach(testimonio => testimonio.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = n;
        if (currentSlide >= testimonios.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = testimonios.length - 1;
        
        testimonios[currentSlide].style.display = 'block';
        dots[currentSlide].classList.add('active');
    }

    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Mostrar el primer testimonio al cargar
    showSlide(0);

    // Cambio automático cada 10 segundos
    setInterval(() => showSlide(currentSlide + 1), 10000);
});