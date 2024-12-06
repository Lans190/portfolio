document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.fontWeight = 'bold';
            link.style.textDecoration = 'underline';
        }
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const colors = ["#FF7F50", "#6A5ACD", "#32CD32", "#FF4500", "#20B2AA"];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length; // Boucle à travers les couleurs
    }, 3000); // Change de couleur toutes les 3 secondes
});



// Exécute après le chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    // Génération de particules avec un effet fluide
    createParticles();

    // Applique une transition douce lors de la navigation
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const href = link.getAttribute("href");
            // Ajoute une animation de disparition avant de changer de page
            document.querySelector("main").style.animation = "fadeOut 0.5s ease-out";
            setTimeout(() => {
                window.location.href = href; // Change de page après l'animation
            }, 500);
        });
    });
});

// Fonction pour créer un effet de particules
function createParticles() {
    const particleCount = 100; // Nombre de particules
    const particlesContainer = document.createElement("div");
    particlesContainer.id = "particles";
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particlesContainer.appendChild(particle);

        // Position et animation aléatoires
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 5 + 3}s`; // 3-8 secondes
        particle.style.animationDelay = `${Math.random() * 2}s`; // Jusqu'à 2 secondes de retard
    }
}
