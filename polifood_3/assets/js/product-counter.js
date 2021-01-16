const $minus = document.querySelector('[data-type="counter-minus"]');
const $plus = document.querySelector('[data-type="counter-plus"]');
const $value = document.querySelector('[data-type="counter-value"]');

$minus.addEventListener("click", (event) => {
    const value = +$value.textContent.trim();
    if (value > 1) $value.innerHTML = value - 1;
});
$plus.addEventListener("click", (event) => {
    const value = +$value.textContent.trim();
    if (value < 10) $value.innerHTML = value + 1;
});
