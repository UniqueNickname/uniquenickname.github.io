const $removeButton = document.querySelector(".header__clear-button");

$removeButton.addEventListener("click", (event) => {
    document.querySelector(".cart").innerHTML = "";
    localStorage.setItem("cart", JSON.stringify([]));
});
