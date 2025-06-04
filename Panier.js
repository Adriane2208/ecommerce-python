document.addEventListener("DOMContentLoaded", function() {
    // Produits à afficher dynamiquement
    const produits = [
        { nom: "Sac girly bleu", prix: 15000, image: "a.jpg", url: "produit_a.html" },
        { nom: "Matein noir", prix: 45000, image: "b.jpg", url: "produit_b.html" },
        { nom: "Karissa rose", prix: 42500, image: "c2.jpg", url: "produit_c.html" }
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

    // Gestion du panier
    let cartItems = JSON.parse(localStorage.getItem("panier")) || [];
    const cartContainer = document.getElementById("cart-items");
    const subtotalElement = document.getElementById("subtotal");
    const totalElement = document.getElementById("total");

    function afficherPanier() {
        cartContainer.innerHTML = "";
        let totalAmt = 0;
        
        cartItems.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("card", "p-3", "mb-3");
            itemElement.innerHTML = `
                <h5>${item.name}</h5>
                <p>Quantité : ${item.quantity}</p>
                <p>Prix : ${item.price * item.quantity} Cfa</p>
                <button class="btn btn-danger btn-sm mt-2 remove-item" data-index="${index}">❌ Retirer</button>
            `;
            cartContainer.appendChild(itemElement);
            totalAmt += item.price * item.quantity;
        });

        subtotalElement.innerText = totalAmt + " Cfa";
        totalElement.innerText = totalAmt + " Cfa";
    }

    function retirerDuPanier(index) {
        cartItems.splice(index, 1);
        localStorage.setItem("panier", JSON.stringify(cartItems));
        afficherPanier();
    }

    function ajouterAuPanier(nom, prix) {
        let produitExistant = cartItems.find(item => item.name === nom);
        if (produitExistant) {
            produitExistant.quantity++;
        } else {
            cartItems.push({ name: nom, price: prix, quantity: 1 });
        }
        localStorage.setItem("panier", JSON.stringify(cartItems));
        afficherPanier();
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            let nom = button.getAttribute("data-name");
            let prix = parseInt(button.getAttribute("data-price"));
            ajouterAuPanier(nom, prix);
        });
    });

    document.addEventListener("click", function(event) {
        if (event.target.classList.contains("remove-item")) {
            let index = event.target.getAttribute("data-index");
            retirerDuPanier(index);
        }
    });

    document.getElementById("payment-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Paiement de " + totalElement.innerText + " réussi !");
    });

    afficherPanier();
});
