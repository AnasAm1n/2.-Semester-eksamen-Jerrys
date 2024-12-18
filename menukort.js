// Funktion til main hover effekt
const menuImages = document.querySelectorAll('.menu-image');

menuImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)'; // Skaler billedet
        image.style.boxShadow = '0 0px 0px rgba(0, 0, 0, 0.3)'; // Tilføj skygge
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)'; // Reset scale
        image.style.boxShadow = 'none'; // Fjern skygge
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

    // Function to handle add button click and show error message
    button.addEventListener('click', () => {
        // Get the error message container
        const errorMessage = document.getElementById('error-message');
        
        // Show the error message
        errorMessage.style.display = 'block';

        // Optionally, hide it after a few seconds (if you want to auto-hide the error message after a delay)
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000); // Error message disappears after 3 seconds
    });
});

// Function to handle filter button clicks
const filterButtons = document.querySelectorAll('.filter-button');
const menuItems = document.querySelectorAll('.menu-item'); // Select all menu items

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

        // Define the order for snacks, burgers, and drinks
        const snackOrder = ['tops.png', 'pomfritter.png', 'sticks.png'];
        const burgerOrder = ['mexican-burger.png', 'cheese-burger.png', 'grande-burger.png'];
        const drinkOrder = ['faxekondi.png', 'pepsi.png', 'pepsimax.png'];

        // Create an array to hold the filtered items
        const filteredItems = [];

        // Loop through menu items to filter and collect them
        menuItems.forEach(item => {
            const itemImage = item.querySelector('.menu-image').src.split('/').pop(); // Get the image filename

            if (filterType === 'snacks' && snackOrder.includes(itemImage)) {
                filteredItems.push(item); // Add matching snack items to the array
            } else if (filterType === 'burger' && burgerOrder.includes(itemImage)) {
                filteredItems.push(item); // Add matching burger items to the array
            } else if (filterType === 'drinks' && drinkOrder.includes(itemImage)) {
                filteredItems.push(item); // Add matching drink items to the array
            }
        });

        // Clear the menu section
        const menuSection = document.querySelector('.menu-section');
        menuSection.innerHTML = ''; // Clear existing items

        // Append filtered items first with animation
        filteredItems.forEach(item => {
            item.classList.remove('hidden'); // Ensure the item is visible
            item.classList.add('show'); // Add class to show item with animation
            menuSection.appendChild(item); // Move item to the top of the menu section
        });

        // Append remaining items that are not filtered
        menuItems.forEach(item => {
            if (!filteredItems.includes(item)) {
                item.classList.remove('hidden'); // Ensure the item is visible
                item.classList.add('show'); // Add class to show item with animation
                menuSection.appendChild(item); // Append other items
            }
        });

        // Log the filtering action
        console.log(`Filtering by: ${filterType}`);
    });
});

// Function to update pizza toppings and price based on checkbox selection
function updatePizza() {
    const pepperoniCheckbox = document.getElementById('pepperoniCheckbox');
    const jalapenosCheckbox = document.getElementById('jalapenosCheckbox');
    const peberfrugtCheckbox = document.getElementById('peberfrugtCheckbox');

    const pepperoni = document.getElementById('pepperoni');
    const jalapenos = document.getElementById('jalapenos');
    const peberfrugt = document.getElementById('peberfrugt');

    // Define specific positions for each topping in the center of the pizza
    const positions = {
        pepperoni: { left: '25%', top: '20%' },
        jalapenos: { left: '25%', top: '20%' },
        peberfrugt: { left: '25%', top: '20%' }
    };

    // Initialize price
    let price = 65; // Base price

    // Show or hide toppings based on checkbox state
    if (pepperoniCheckbox.checked) {
        pepperoni.style.display = 'block';
        pepperoni.style.left = positions.pepperoni.left;
        pepperoni.style.top = positions.pepperoni.top;
        price += 5; // Increase price for each topping
    } else {
        pepperoni.style.display = 'none';
    }

    if (jalapenosCheckbox.checked) {
        jalapenos.style.display = 'block';
        jalapenos.style.left = positions.jalapenos.left;
        jalapenos.style.top = positions.jalapenos.top;
        price += 5; // Increase price for each topping
    } else {
        jalapenos.style.display = 'none';
    }

    if (peberfrugtCheckbox.checked) {
        peberfrugt.style.display = 'block';
        peberfrugt.style.left = positions.peberfrugt.left;
        peberfrugt.style.top = positions.peberfrugt.top;
        price += 5; // Increase price for each topping
    } else {
        peberfrugt.style.display = 'none';
    }

    // Update the price display
    const priceDisplay = document.getElementById('pizzaPrice');
    priceDisplay.innerText = price;

    // Add animation class
    priceDisplay.classList.add('price-change');

    // Remove animation class after animation duration
    setTimeout(() => {
        priceDisplay.classList.remove('price-change');
    }, 300); // Match this duration with the CSS transition duration
}

// Add event listeners to checkboxes
document.getElementById('pepperoniCheckbox').addEventListener('change', updatePizza);
document.getElementById('jalapenosCheckbox').addEventListener('change', updatePizza);
document.getElementById('peberfrugtCheckbox').addEventListener('change', updatePizza);

// Function to update the visibility of toppings based on checkbox state
function updateToppings() {
    const pepperoniCheckbox = document.getElementById('pepperoniCheckbox');
    const jalapenosCheckbox = document.getElementById('jalapenosCheckbox');
    const peberfrugtCheckbox = document.getElementById('peberfrugtCheckbox');

    const pepperoni = document.getElementById('pepperoni');
    const jalapenos = document.getElementById('jalapenos');
    const peberfrugt = document.getElementById('peberfrugt');

    // Show or hide toppings based on checkbox state
    pepperoni.style.display = pepperoniCheckbox.checked ? 'block' : 'none';
    jalapenos.style.display = jalapenosCheckbox.checked ? 'block' : 'none';
    peberfrugt.style.display = peberfrugtCheckbox.checked ? 'block' : 'none';
}

// Add event listeners to checkboxes
document.getElementById('pepperoniCheckbox').addEventListener('change', updateToppings);
document.getElementById('jalapenosCheckbox').addEventListener('change', updateToppings);
document.getElementById('peberfrugtCheckbox').addEventListener('change', updateToppings);
