document.addEventListener("DOMContentLoaded", function() {
    const cartItems = [
        { name: "Produit A", price: 2000, quantity: 2 },
        { name: "Produit B", price: 1500, quantity: 1 },
        { name: "Produit C", price: 2500, quantity: 3 }
    ];

    let totalAmt = 0;
    const cartContainer = document.getElementById("cart-items");
    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");

    if (cartContainer && subtotalElement && totalElement) {
        cartItems.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("card", "p-3", "mb-3");
            itemElement.innerHTML = `<h5>${item.name}</h5>
                                     <p>Quantité : ${item.quantity}</p>
                                     <p>Prix : ${item.price} Cfa</p>
                                     <button class="btn btn-danger btn-sm mt-2 remove-item">❌ Retirer</button>`;
            cartContainer.appendChild(itemElement);
            totalAmt += item.price * item.quantity;
        });

        subtotalElement.innerText = totalAmt + " Cfa";
        totalElement.innerText = totalAmt + " Cfa";
    }

    // Fonction pour retirer un produit
    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("remove-item")) {
            event.target.parentElement.remove(); // Supprime l'élément du DOM
        }
    });
});
