document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });



    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    });

    // Mobile Navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const bars = document.querySelectorAll('.bar');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        bars.forEach(bar => bar.classList.toggle('active'));
    });

    // Typing Animation
    const roles = ['AI Developer and Researcher', 'ML Developer', 'LLM developer', 'Python Developer'];
    const dynamicText = document.querySelector('.dynamic-text');
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];
        const shouldDelete = isDeleting ? -1 : 1;

        dynamicText.textContent = currentRole.substring(0, charIndex);

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

        charIndex = charIndex + shouldDelete;
        setTimeout(typeEffect, isDeleting ? 50 : 150);
    }

    typeEffect();


    const skillBars = document.querySelectorAll('.skill-progress');

    const showProgress = () => {
        skillBars.forEach(bar => {
            bar.style.transform = 'scaleX(1)';
        });
    };


    const skillsSection = document.querySelector('.skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showProgress();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });



                navMenu.classList.remove('active');
                bars.forEach(bar => bar.classList.remove('active'));
            }
        });
    });



    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();


        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});