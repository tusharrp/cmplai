document.addEventListener('DOMContentLoaded', () => {
        // Initialize AOS (Animate on Scroll) library
        AOS.init({
            duration: 1000,
            once: true,
        });

        // Add parallax effect to the hero section
        const heroSection = document.getElementById('features-hero');
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });

        // Add hover effect to feature items
        const featureItems = document.querySelectorAll('.feature-item');
        featureItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.querySelector('.feature-image img').style.transform = 'scale(1.1) translateY(-5px)';
            });
            item.addEventListener('mouseleave', () => {
                item.querySelector('.feature-image img').style.transform = 'scale(1) translateY(0)';
            });
        });

        // Add a smooth scroll effect for navigation links
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 60,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add a scroll-triggered animation for feature items
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        featureItems.forEach(item => {
            observer.observe(item);
        });
    });

// Mobile Navbar Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });

        // Close Navbar on Link Click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('show');
            });
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Lazy Loading Images
    document.querySelectorAll('img').forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
});

