// Gestionnaire de transition entre les pages
class PageTransition {
    constructor() {
        this.initializeTransition();
        this.initializeListeners();
    }

    initializeTransition() {
        // Configuration de GSAP
        gsap.config({
            nullTargetWarn: false
        });

        // Timeline pour l'animation d'entrée
        this.enterTimeline = gsap.timeline({
            paused: true,
            defaults: {
                duration: 0.8,
                ease: "power4.inOut"
            }
        });

        this.enterTimeline
            .fromTo('.page-transition', {
                yPercent: 100,
                skewY: 2
            }, {
                yPercent: 0,
                skewY: 0
            })
            .fromTo('.content-container', {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, "-=0.2");

        // Timeline pour l'animation de sortie
        this.leaveTimeline = gsap.timeline({
            paused: true,
            defaults: {
                duration: 0.8,
                ease: "power4.inOut"
            }
        });

        this.leaveTimeline
            .to('.content-container', {
                opacity: 0,
                y: -20,
                duration: 0.6
            })
            .to('.page-transition', {
                yPercent: -100,
                skewY: -2
            }, "-=0.4");
    }

    initializeListeners() {
        // Gérer les clics sur les liens
        document.querySelectorAll('a').forEach(link => {
            if (link.href && link.href.startsWith(window.location.origin)) {
                link.addEventListener('click', (e) => this.handleLinkClick(e));
            }
        });

        // Animation d'entrée au chargement de la page
        window.addEventListener('load', () => {
            document.body.classList.add('content-visible');
            this.enterTimeline.play();
        });
    }

    handleLinkClick(e) {
        const link = e.currentTarget;
        if (link.href === window.location.href) return;

        e.preventDefault();
        document.body.classList.add('page-transitioning');

        // Jouer l'animation de sortie
        this.leaveTimeline.play().then(() => {
            window.location.href = link.href;
        });
    }
}

// Initialiser la transition
document.addEventListener('DOMContentLoaded', () => {
    new PageTransition();
});