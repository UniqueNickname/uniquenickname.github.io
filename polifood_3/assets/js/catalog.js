const $cartButtons = document.querySelectorAll(".products__card-buy");

$cartButtons.forEach(($button) => {
    $button.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(window.location.href.split("/").slice(0, -3).join("/"));
        window.location.href =
            window.location.href.split("/").slice(0, -3).join("/") +
            "/cart/index.html";
    });
});
