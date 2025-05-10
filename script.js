// Booking Modal Animation
const bookingModal = document.querySelector('.booking-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal-content');
const bookNowBtn = document.querySelector('.book-now-btn');
const modalClose = document.querySelector('.modal-close');

// Open Modal
bookNowBtn.addEventListener('click', () => {
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    gsap.to(modalOverlay, {
        duration: 0.3,
        opacity: 1,
        ease: 'power2.out'
    });
    
    gsap.to(modalContent, {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        ease: 'back.out(1.7)'
    });
});

// Close Modal
function closeModal() {
    gsap.to(modalContent, {
        duration: 0.3,
        opacity: 0,
        scale: 0.7,
        ease: 'power2.in'
    });
    
    gsap.to(modalOverlay, {
        duration: 0.3,
        opacity: 0,
        ease: 'power2.in',
        onComplete: () => {
            bookingModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal.classList.contains('active')) {
        closeModal();
    }
});

// 1. Hero Section Animation
gsap.from('.hero-section h1', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.hero-section p', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: 'power3.out'
});

gsap.from('.hero-image', {
    duration: 1,
    x: 100,
    opacity: 0,
    delay: 0.5,
    ease: 'power3.out'
});

// 2. CTA Button Hover Animation
// const ctaButton = document.querySelector('.cta-button');
// ctaButton.addEventListener('mouseenter', () => {
//     gsap.to(ctaButton, {
//         duration: 0.3,
//         scale: 1.1,
//         ease: 'power2.out'
//     });
// });

ctaButton.addEventListener('mouseleave', () => {
    gsap.to(ctaButton, {
        duration: 0.3,
        scale: 1,
        ease: 'power2.out'
    });
});

// 3. Service Cards Animation
gsap.utils.toArray('.service-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        delay: i * 0.2,
        ease: 'power3.out'
    });
});

// 4. Service Icons Animation
gsap.utils.toArray('.service-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            duration: 0.5,
            rotation: 360,
            scale: 1.2,
            ease: 'power2.out'
        });
    });

    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
            duration: 0.5,
            rotation: 0,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

// 5. About Section Animation
gsap.from('.about-image', {
    scrollTrigger: {
        trigger: '.about-image',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: 'power3.out'
});

// 6. Learn More Button Animation
const learnMoreBtn = document.querySelector('.learn-more-btn');
learnMoreBtn.addEventListener('mouseenter', () => {
    gsap.to(learnMoreBtn, {
        duration: 0.3,
        backgroundColor: '#0056b3',
        color: 'white',
        ease: 'power2.out'
    });
});

learnMoreBtn.addEventListener('mouseleave', () => {
    gsap.to(learnMoreBtn, {
        duration: 0.3,
        backgroundColor: 'transparent',
        color: '#007bff',
        ease: 'power2.out'
    });
});

// 7. Booking Form Animation
gsap.from('.booking-form', {
    scrollTrigger: {
        trigger: '.booking-form',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

// 8. Booking Form Input Animation
document.querySelectorAll('.booking-form .form-control, .booking-form .form-select').forEach((input, index) => {
    input.addEventListener('focus', () => {
        gsap.to(input, {
            duration: 0.3,
            scale: 1.02,
            ease: 'power2.out'
        });
    });

    input.addEventListener('blur', () => {
        gsap.to(input, {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

// 9. Book Button Animation
const bookBtn = document.querySelector('.book-btn');
bookBtn.addEventListener('mouseenter', () => {
    gsap.to(bookBtn, {
        duration: 0.3,
        scale: 1.05,
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
        ease: 'power2.out'
    });
});

bookBtn.addEventListener('mouseleave', () => {
    gsap.to(bookBtn, {
        duration: 0.3,
        scale: 1,
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        ease: 'power2.out'
    });
});

// 10. Contact Form Animation
gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

// Form Input Focus Animation
document.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('focus', () => {
        gsap.to(input, {
            duration: 0.3,
            scale: 1.02,
            ease: 'power2.out'
        });
    });

    input.addEventListener('blur', () => {
        gsap.to(input, {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
}); 