const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function() {
    const reviews = [
        {
            name: 'Thomas N.',
            text: 'Skiller sig ud med let og frisk smag. Lækre grillretter og pizzaer.',
            stars: 4
        },
        {
            name: 'Maria A.',
            text: 'Fantastisk atmosfære og endnu bedre mad! Deres grillretter er helt i særklasse, og servicen er altid i top.',
            stars: 5
        },
        {
            name: 'Lene B.',
            text: 'Den bedste pizza i Aarhus! Sprød bund og friske råvarer. Man kan virkelig smage kvaliteten.',
            stars: 5
        },
        {
            name: 'Anders P.',
            text: 'Hyggelig familierestaurant med god stemning. Børnemenuen var et hit hos ungerne, og vi voksne nød de lækre burgere.',
            stars: 4
        },
        {
            name: 'Sophie K.',
            text: 'Perfekt sted til en date night! Romantisk atmosfære og virkelig god mad. Deres mad er fantastisk.',
            stars: 5
        }
    ];

    const nameElement = document.querySelector('.review-name');
    const textElement = document.querySelector('.review-text');
    const starsContainer = document.querySelector('.stars');
    let currentIndex = 0;

    function updateStars(count) {
        starsContainer.innerHTML = '';
        for(let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            star.textContent = '★';
            if(i >= count) star.className = 'empty';
            starsContainer.appendChild(star);
        }
    }

    function fadeTransition() {
        // Fade out
        nameElement.style.opacity = '0';
        textElement.style.opacity = '0';
        starsContainer.style.opacity = '0';
        
        setTimeout(() => {
            // Update content
            currentIndex = (currentIndex + 1) % reviews.length;
            const review = reviews[currentIndex];
            
            nameElement.textContent = review.name;
            textElement.textContent = review.text;
            updateStars(review.stars);
            
            // Fade in
            nameElement.style.opacity = '1';
            textElement.style.opacity = '1';
            starsContainer.style.opacity = '1';
        }, 500); // Wait for fade out to complete
    }

    // Initial stars setup
    updateStars(reviews[0].stars);

    // Change review every 5 seconds
    setInterval(fadeTransition, 5000);
});
