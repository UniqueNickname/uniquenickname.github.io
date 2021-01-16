const $cards = document.querySelectorAll(".cart__card");
const $removeButton = document.querySelector(".header__clear-button");

$removeButton.addEventListener("click", (event) => {
    $cards.forEach(($card) => {
        $card.parentNode.removeChild($card);
    });
});
