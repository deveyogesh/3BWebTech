function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

if (menuIcon && navLinks) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuIcon.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuIcon.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

(function() {
    emailjs.init("SLPmf9hvW35np6Ur-"); 
})();

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const btn = document.getElementById('submit-btn');
        const originalBtnContent = btn.innerHTML;
        
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        btn.style.opacity = '0.7';
        btn.disabled = true;

        emailjs.sendForm('service_asie8ze', 'template_14aztuc', this)
            .then(function() {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Thank you! I will get back to you soon.',
                    background: '#1e293b', 
                    color: '#fff',
                    confirmButtonColor: '#3b82f6',
                    timer: 3000 
                });

                btn.innerHTML = originalBtnContent;
                btn.style.opacity = '1';
                btn.disabled = false;
                contactForm.reset();
                
            }, function(error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong. Please check your EmailJS IDs.',
                    background: '#1e293b',
                    color: '#fff',
                    confirmButtonColor: '#ef4444'
                });

                btn.innerHTML = originalBtnContent;
                btn.style.opacity = '1';
                btn.disabled = false;
                console.log("EmailJS Error:", error);
            });
    });
}
