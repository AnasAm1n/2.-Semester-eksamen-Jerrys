// Function to handle image hover effect
const menuImages = document.querySelectorAll('.menu-image');

menuImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)'; // Scale up the image
        image.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)'; // Add shadow
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)'; // Reset scale
        image.style.boxShadow = 'none'; // Remove shadow
    });
});

// Function to handle plus icon hover effect
const addButtons = document.querySelectorAll('.add-button');

addButtons.forEach(button => {
    const icon = button.querySelector('.icon');
    const activeIcon = icon.getAttribute('data-active'); // Path to the active icon

    button.addEventListener('mouseenter', () => {
        icon.src = activeIcon; // Change to active icon on hover
    });

    button.addEventListener('mouseleave', () => {
        icon.src = 'images/plus-ikon.png'; // Change back to plus icon
    });
});

// Function to handle filter button clicks
const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and reset icons
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            const icon = btn.querySelector('.filter-icon');
            icon.src = icon.getAttribute('data-icon'); // Reset to original icon
        });

        // Add active class to the clicked button
        button.classList.add('active');

        // Change the icon to the active version
        const activeIcon = button.querySelector('.filter-icon');
        activeIcon.src = activeIcon.getAttribute('data-active'); // Change to active icon

        // Get the filter type
        const filterType = button.getAttribute('data-filter');

        // Implement filtering logic here
        console.log(`Filtering by: ${filterType}`);
    });
});

// Function to handle other functionalities (if any)
// Add your existing code here
