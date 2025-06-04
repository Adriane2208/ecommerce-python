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
document.addEventListener("DOMContentLoaded", function() {
    const produits = [
        { nom: "Sac girly bleu", prix: 15000, image: "a.jpg", url: "produit_a.html" },
        { nom: "Matein noir", prix: 45000, image: "b.jpg", url: "produit_b.html" },
        { nom: "Karissa rose", prix: 42500, image: "c2.jpg", url: "produit_c.html" }
        // Ajouter produits
    ];

    const container = document.getElementById("produits-container");

    produits.forEach(produit => {
        const div = document.createElement("div");
        div.classList.add("col-md-4");
        div.innerHTML = `
            <div class="product-box p-3 border rounded shadow">
                <img src="${produit.image}" class="img-fluid" alt="${produit.nom}">
                <h4>${produit.nom}</h4>
                <p class="text-muted">Prix : ${produit.prix} Cfa</p>
                <a href="${produit.url}" class="btn btn-outline-dark mt-2">🔍 Voir détails</a>
                <button class="btn btn-dark mt-3 add-to-cart" data-name="${produit.nom}" data-price="${produit.prix}">🛒 Ajouter au panier</button>
            </div>
        `;
        container.appendChild(div);
    });
});
