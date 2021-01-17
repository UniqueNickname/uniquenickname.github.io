setTimeout(() => {
    const $minus = document.querySelector('[data-type="counter-minus"]');
    const $plus = document.querySelector('[data-type="counter-plus"]');
    const $value = document.querySelector('[data-type="counter-value"]');
    const $sum = document.querySelector('[data-type="counter-sum"]');
    const initSum = $sum
        ? parseFloat($sum.textContent.trim().slice(0, -1).trim())
        : 0;

    const changeCounterValue = (operator) => {
        const value = +$value.textContent.trim();
        const newValue =
            operator === "-"
                ? value > 1
                    ? value - 1
                    : value
                : value < 10
                ? value + 1
                : value;
        $value.innerHTML = newValue;
        if ($sum) $sum.innerHTML = newValue * initSum + " Р";
    };

    $minus.addEventListener("click", () => {
        changeCounterValue("-");
    });
    $plus.addEventListener("click", () => {
        changeCounterValue("+");
    });
}, 1000);
