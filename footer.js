document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll(".footer a");
    icons.forEach(icon => {
        icon.addEventListener("mouseover", function() {
            this.style.color = "white";
        });
        icon.addEventListener("mouseout", function() {
            this.style.color = "#949494";
        });
    });
});
