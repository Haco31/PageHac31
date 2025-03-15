document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".navbar-nav a, nav a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "#00ffff";
            this.style.transform = "scale(1.2)";
            this.style.transition = "0.3s";
        });

        link.addEventListener("mouseout", function () {
            this.style.color = "",
            this.style.transform = "scale(1)";
        });
    });
});

function filtrarArticulos() {
    let input = document.getElementById("buscador").value.toLowerCase();
    let lista = document.getElementById("lista-articulos");
    let items = lista.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        let texto = items[i].textContent.toLowerCase();
        if (texto.includes(input)) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}
