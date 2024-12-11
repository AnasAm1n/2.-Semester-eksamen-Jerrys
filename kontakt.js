// Hent formular og feedback-elementet
const form = document.getElementById('sendForm');
const feedback = document.getElementById('feedback');

// Tilføj event listener for 'submit'-eventet
form.addEventListener('submit', function(event) {
    // Forhindrer standard formularindsendelse
    event.preventDefault();

    // Tilføj feedback-beskeden
    feedback.textContent = "Tak for din besked💌! Vi har sendt den videre til vores bedste kok 👨‍🍳- nej, vent, til kontoret😉. Vi vender snart tilbage!🍕🍹I mellemtiden kan du tjekke vores nyeste menu på hjemmesiden!🍔🍟";
    feedback.style.color = "#322D27"; // Tilpas farven
    feedback.style.fontFamily = "Roboto Mono, monospace";
    feedback.style.fontSize = "24px";
    feedback.style.marginTop = "20px";
    feedback.style.marginLeft = "100px";
    feedback.style.marginRight = "100px";


    // Opret CTA-knap
    const ctaButton = document.createElement('button');
    ctaButton.textContent = "Se vores menu";
    ctaButton.style.marginTop = "10px";
    ctaButton.style.padding = "10px 20px";
    ctaButton.style.backgroundColor = "#322D27";
    ctaButton.style.color = "#FFF";
    ctaButton.style.border = "none";
    ctaButton.style.borderRadius = "13px";
    ctaButton.style.cursor = "pointer";
    ctaButton.style.fontFamily = "Roboto Mono, monospace";

    // Tilføj hover-effekt via JavaScript
    ctaButton.addEventListener('mouseover', function() {
        ctaButton.style.backgroundColor = "#5A4F46";
        ctaButton.style.color = "#FFF";
    });

    ctaButton.addEventListener('mouseout', function() {
        ctaButton.style.backgroundColor = "#322D27";
        ctaButton.style.color = "#FFF";
        ctaButton.style.border = "none";
    });


    // Tilføj knappen til feedback-elementet
    feedback.appendChild(ctaButton);

    // Tilføj event handler til knappen
    ctaButton.addEventListener('click', function() {
        window.location.href = "menukort.html"; // Skift URL til den rigtige menu-side
    });

    // Ryd formularfelter (valgfrit)
    form.reset();
});