// Initialisation de GSAP
gsap.registerPlugin(ScrollTrigger, TextPlugin);

document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    let currentLanguage = 'fr';
    let soundEnabled = true;

    // Animation initiale du header
    gsap.from(header, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Animation de la section héro
    gsap.from('.hero-section .container > *', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Animation des liens de navigation
    gsap.from('.nav-links a', {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // Animation des cartes au scroll
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            duration: 1,
            delay: i * 0.2,
            ease: 'power3.out'
        });
    });

    // Animation des statistiques
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        let value = stat.innerHTML;
        let endValue = parseInt(value);
        
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            textContent: 0,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            onUpdate: function() {
                stat.innerHTML = Math.floor(this.targets()[0].textContent) + (value.includes('+') ? '+' : '');
            }
        });
    });

    // Animation des icônes
    gsap.utils.toArray('.feature-icon').forEach(icon => {
        gsap.from(icon, {
            scrollTrigger: {
                trigger: icon,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            scale: 0,
            rotation: 360,
            duration: 1,
            ease: 'back.out(1.7)'
        });
    });

    // Animation des images
    gsap.utils.toArray('.image-container').forEach(image => {
        gsap.from(image, {
            scrollTrigger: {
                trigger: image,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Animation du texte
    gsap.utils.toArray('.text-container').forEach(text => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Animations au survol
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Animation du scroll fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 70
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });

    // Animation du mode sombre
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    darkModeToggle?.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        gsap.to('body', {
            backgroundColor: document.body.classList.contains('dark-mode') ? '#121212' : '#ffffff',
            color: document.body.classList.contains('dark-mode') ? '#ffffff' : '#333333',
            duration: 0.3
        });
    });

    // Animation du retour en haut
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                gsap.to(backToTop, {
                    opacity: 1,
                    duration: 0.3,
                    display: 'flex'
                });
            } else {
                gsap.to(backToTop, {
                    opacity: 0,
                    duration: 0.3,
                    display: 'none'
                });
            }
        });

        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            gsap.to(window, {
                duration: 1,
                scrollTo: 0,
                ease: 'power2.inOut'
            });
        });
    }

    // Animation du header au scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animation de la flèche de défilement
    gsap.to('.scroll-down', {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'power1.inOut'
    });

    // Initialisation des animations de texte
    const animateText = () => {
        gsap.utils.toArray('.animate-text').forEach(text => {
            gsap.from(text, {
                scrollTrigger: {
                    trigger: text,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        });
    };

    animateText();
});
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    // Fonction pour fermer le menu
    function closeMenu() {
        navLinks.classList.remove('active');
        mobileMenuButton.classList.remove('active');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
    }

    // Fonction pour ouvrir le menu
    function openMenu() {
        navLinks.classList.add('active');
        mobileMenuButton.classList.add('active');
        mobileMenuButton.setAttribute('aria-expanded', 'true');
    }

    // Toggle menu
    if (mobileMenuButton && navLinks) {
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        
        mobileMenuButton.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        // Fermer le menu lors du clic sur un lien
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Fermer le menu lors du défilement
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll && navLinks.classList.contains('active')) {
                closeMenu();
            }
            lastScroll = currentScroll;
        });

        // Fermer le menu lors du redimensionnement de la fenêtre
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
                closeMenu();
            }
        });

        // Fermer le menu lors du clic en dehors
        document.addEventListener('click', (e) => {
            if (!mobileMenuButton.contains(e.target) && 
                !navLinks.contains(e.target) && 
                navLinks.classList.contains('active')) {
                closeMenu();
            }
        });
    }
});
