// Funktion til main hover effekt
const menuImages = document.querySelectorAll('.menu-image');

menuImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)'; // Skaler billedet
        image.style.boxShadow = '0 0px 0px rgba(0, 0, 0, 0.3)'; // Tilføj skygge
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)'; // Nulstil skaleringen
        image.style.boxShadow = 'none'; // Fjern skygge
    });
});

// Variabel til at holde den samlede pris
let totalPrice = 0;

// Funktion til at håndtere klik på tilføj-knap
const addButtons = document.querySelectorAll('.add-button');
addButtons.forEach(button => {
    // Behold den eksisterende hover-effekt
    button.addEventListener('mouseenter', () => {
        const icon = button.querySelector('.icon');
        const activeIcon = icon.getAttribute('data-active'); // Sti til det aktive ikon
        icon.src = activeIcon; // Skift til aktivt ikon ved hover
    });

    button.addEventListener('mouseleave', () => {
        const icon = button.querySelector('.icon');
        icon.src = 'images/plus-ikon.png'; // Skift tilbage til plus-ikon
    });

    // Ny event listener til at tilføje varen til kurven
    button.addEventListener('click', () => {
        const menuItem = button.closest('.menu-item');
        const menuItemName = menuItem.querySelector('h2').innerText;
        const menuItemPrice = parseFloat(menuItem.querySelector('span').innerText.replace(' DKK', ''));

        // Add item to cart
        cartItems.push({ name: menuItemName, price: menuItemPrice });
        totalPrice += menuItemPrice;

        // Update cart display
        updateCartDisplay();
    });
});

// Funktion til at håndtere filterknap klik
const filterButtons = document.querySelectorAll('.filter-button');
const menuItems = document.querySelectorAll('.menu-item'); // Vælg alle menupunkter

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Fjern aktiv klasse fra alle knapper og nulstil ikoner
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            const icon = btn.querySelector('.filter-icon');
            icon.src = icon.getAttribute('data-icon'); // Nulstil til originalt ikon
        });

        // Tilføj aktiv klasse til den klikkede knap
        button.classList.add('active');

        // Skift ikonet til den aktive version
        const activeIcon = button.querySelector('.filter-icon');
        activeIcon.src = activeIcon.getAttribute('data-active'); // Skift til aktivt ikon

        // Hent filtertypen
        const filterType = button.getAttribute('data-filter');

        // Definer rækkefølgen for snacks, burgere og drikkevarer
        const snackOrder = ['tops.png', 'pomfritter.png', 'sticks.png'];
        const burgerOrder = ['mexican-burger.png', 'cheese-burger.png', 'grande-burger.png'];
        const drinkOrder = ['faxekondi.png', 'pepsi.png', 'pepsimax.png'];

        // Opret en array til de filtrerede elementer
        const filteredItems = [];

        // Loop igennem menupunkter for at filtrere og samle dem
        menuItems.forEach(item => {
            const itemImage = item.querySelector('.menu-image').src.split('/').pop(); // Hent billedfilnavnet

            if (filterType === 'snacks' && snackOrder.includes(itemImage)) {
                filteredItems.push(item); // Tilføj matchende snack-elementer til arrayet
            } else if (filterType === 'burger' && burgerOrder.includes(itemImage)) {
                filteredItems.push(item); // Tilføj matchende burger-elementer til arrayet
            } else if (filterType === 'drinks' && drinkOrder.includes(itemImage)) {
                filteredItems.push(item); // Tilføj matchende drikkevare-elementer til arrayet
            }
        });

        // Ryd menu-sektionen
        const menuSection = document.querySelector('.menu-section');
        menuSection.innerHTML = ''; // Ryd eksisterende elementer

        // Tilføj filtrerede elementer først med animation
        filteredItems.forEach(item => {
            item.classList.remove('hidden'); // Sikr at elementet er synligt
            item.classList.add('show'); // Tilføj klasse for at vise element med animation
            menuSection.appendChild(item); // Flyt elementet til toppen af menu-sektionen
        });

        // Tilføj resterende elementer, som ikke er filtreret
        menuItems.forEach(item => {
            if (!filteredItems.includes(item)) {
                item.classList.remove('hidden'); // Sikr at elementet er synligt
                item.classList.add('show'); // Tilføj klasse for at vise element med animation
                menuSection.appendChild(item); // Tilføj andre elementer
            }
        });

        // Log filtreringshandlingen
        console.log(`Filtrerer efter: ${filterType}`);
    });
});

// Funktion til at opdatere pizza-toppings og pris baseret på checkbox-valg
function updatePizza() {
    const pepperoniCheckbox = document.getElementById('pepperoniCheckbox');
    const jalapenosCheckbox = document.getElementById('jalapenosCheckbox');
    const peberfrugtCheckbox = document.getElementById('peberfrugtCheckbox');

    const pepperoni = document.getElementById('pepperoni');
    const jalapenos = document.getElementById('jalapenos');
    const peberfrugt = document.getElementById('peberfrugt');

    // Definer specifikke positioner for hver pizza-topping i midten af pizzaen
    const positions = {
        pepperoni: { left: '25%', top: '20%' },
        jalapenos: { left: '25%', top: '20%' },
        peberfrugt: { left: '25%', top: '20%' }
    };

    // Initialiser pris
    let price = 65; // Grundpris

    // Vis eller skjul toppings baseret på checkbox-tilstand
    if (pepperoniCheckbox.checked) {
        pepperoni.style.display = 'block';
        pepperoni.style.left = positions.pepperoni.left;
        pepperoni.style.top = positions.pepperoni.top;
        price += 5; // Forøg prisen for hver topping
    } else {
        pepperoni.style.display = 'none';
    }

    if (jalapenosCheckbox.checked) {
        jalapenos.style.display = 'block';
        jalapenos.style.left = positions.jalapenos.left;
        jalapenos.style.top = positions.jalapenos.top;
        price += 5; // Forøg prisen for hver topping
    } else {
        jalapenos.style.display = 'none';
    }

    if (peberfrugtCheckbox.checked) {
        peberfrugt.style.display = 'block';
        peberfrugt.style.left = positions.peberfrugt.left;
        peberfrugt.style.top = positions.peberfrugt.top;
        price += 5; // Forøg prisen for hver topping
    } else {
        peberfrugt.style.display = 'none';
    }

    // Opdater prisdisplayet
    const priceDisplay = document.getElementById('pizzaPrice');
    priceDisplay.innerText = price;

    // Tilføj animationsklasse
    priceDisplay.classList.add('price-change');

    // Fjern animationsklassen efter animationens varighed
    setTimeout(() => {
        priceDisplay.classList.remove('price-change');
    }, 300); // Match denne varighed med CSS-transitionens varighed
}

// Tilføj event listeners til checkboxes
document.getElementById('pepperoniCheckbox').addEventListener('change', updatePizza);
document.getElementById('jalapenosCheckbox').addEventListener('change', updatePizza);
document.getElementById('peberfrugtCheckbox').addEventListener('change', updatePizza);

// Funktion til at opdatere synligheden af toppings baseret på checkboxes
function updateToppings() {
    const pepperoniCheckbox = document.getElementById('pepperoniCheckbox');
    const jalapenosCheckbox = document.getElementById('jalapenosCheckbox');
    const peberfrugtCheckbox = document.getElementById('peberfrugtCheckbox');

    const pepperoni = document.getElementById('pepperoni');
    const jalapenos = document.getElementById('jalapenos');
    const peberfrugt = document.getElementById('peberfrugt');

    // Vis eller skjul toppings baseret på checkbox
    pepperoni.style.display = pepperoniCheckbox.checked ? 'block' : 'none';
    jalapenos.style.display = jalapenosCheckbox.checked ? 'block' : 'none';
    peberfrugt.style.display = peberfrugtCheckbox.checked ? 'block' : 'none';
}

// Tilføj eventlisteners til checkboxes
document.getElementById('pepperoniCheckbox').addEventListener('change', updateToppings);
document.getElementById('jalapenosCheckbox').addEventListener('change', updateToppings);
document.getElementById('peberfrugtCheckbox').addEventListener('change', updateToppings);

// Function to show/hide the contents of the cart
const cartIcon = document.getElementById('cart-icon');
const cartItems = document.getElementById('cart-items');

cartIcon.addEventListener('click', () => {
    cartItems.classList.toggle('show'); // Toggle 'show' class to open/close the cart
});

document.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll('.add-button');
    const cartList = document.getElementById('cart-list');
    const totalPriceDisplay = document.getElementById('total-price');
    const cartIcon = document.getElementById('cart-icon');
    const cartContent = document.querySelector('.cart-content'); // Vælg kurvindholdet
    let cartItems = []; // Array til at holde kurv varer
    let totalPrice = 0; // Variabel til at holde den samlede pris

    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            const menuItem = button.closest('.menu-item');
            const menuItemName = menuItem.querySelector('h2').innerText;
            const menuItemPrice = parseFloat(menuItem.querySelector('span').innerText.replace(' DKK', ''));

            // Tilføj vare til kurven
            cartItems.push({ name: menuItemName, price: menuItemPrice });
            totalPrice += menuItemPrice;

            // Opdater kurv visning
            updateCartDisplay();
        });
    });

    function updateCartDisplay() {
        // Ryd den nuværende kurv liste
        cartList.innerHTML = '';

        // Tilføj hver vare til kurv listen
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerText = `${item.name} - ${item.price} DKK`;
            cartList.appendChild(listItem);
        });

        // Opdater total pris visning
        totalPriceDisplay.innerText = `Total: ${totalPrice} DKK`;
    }

    // Vis/skjul kurvindhold når kurv-ikonet klikkes
    cartIcon.addEventListener('click', () => {
        // Tjek om kurv-indholdet er skjult eller vist
        if (cartContent.style.display === 'none' || cartContent.style.display === '') {
            cartContent.style.display = 'block'; // Vis indholdet
        } else {
            cartContent.style.display = 'none'; // Skjul indholdet
        }
    });
});



