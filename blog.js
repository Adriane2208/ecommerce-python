document.addEventListener("DOMContentLoaded", function() {
    const articles = [
        { titre: "Les tendances mode 2025", image: "y.jpg", description: "Découvrez les nouvelles tendances mode qui vont dominer cette année.", url: "article1.html" },
        { titre: "Comment bien choisir son sac ?", image: "x.jpg", description: "Guide complet pour choisir un sac adapté à votre style et vos besoins.", url: "article2.html" },
        { titre: "Les matériaux écologiques en e-commerce", image: "z.jpg", description: "Focus sur les matières éco-responsables et leur impact positif sur l’environnement.", url: "article3.html" }
    ];

    const container = document.getElementById("blog-container");

    articles.forEach(article => {
        const div = document.createElement("div");
        div.classList.add("col-md-4", "d-flex");
        div.innerHTML = `
            <div class="card shadow-sm w-100">
                <img src="${article.image}" class="card-img-top" alt="${article.titre}">
                <div class="card-body text-center">
                    <h5 class="card-title">${article.titre}</h5>
                    <p class="card-text">${article.description}</p>
                    <a href="${article.url}" class="btn btn-dark">📖 Lire l'article</a>
                </div>
            </div>
        `;
        container.appendChild(div);
    });
});
