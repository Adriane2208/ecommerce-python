document.addEventListener("DOMContentLoaded", function() {
    const cartItems = [
        { name: "Produit A", price: 20, quantity: 2 },
        { name: "Produit B", price: 15, quantity: 1 }
    ];

    let totalAmt = 0;
    const cartContainer = document.getElementById("cart-items");

    cartItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("card", "mb-3", "p-3");
        itemElement.innerHTML = `<h5>${item.name}</h5>
                                 <p>Quantité : ${item.quantity}</p>
                                 <p>Prix : ${item.price} €</p>`;
        cartContainer.appendChild(itemElement);
        totalAmt += item.price * item.quantity;
    });

    document.getElementById("total-amt").innerText = totalAmt + " €";

    document.getElementById("payment-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Paiement de " + totalAmt + " € réussi !");
    });
});
