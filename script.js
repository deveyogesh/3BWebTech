function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

(function() {
    emailjs.init("SLPmf9hvW35np6Ur-");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const btn = document.getElementById('submit-btn');
    const originalBtnContent = btn.innerHTML;
    
    // Button loading state 
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    emailjs.sendForm('service_asie8ze', 'template_14aztuc', this)
        .then(function() {
            // Success SweetAlert
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
            document.getElementById('contact-form').reset();
            
        }, function(error) {
            // Error SweetAlert
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
        });
});

const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuIcon.querySelector('i');
    
    if (navLinks.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.querySelector('i').classList.replace('fa-times', 'fa-bars');
    });
});