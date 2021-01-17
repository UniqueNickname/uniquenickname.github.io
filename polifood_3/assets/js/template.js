const catalogCardTemplate = ({ img, name, size, price, id }) => `
	<a href="../product/index.html" class="products__card" data-id="${id}">
		<div class="products__card-top">
			<img
				src="../../assets/img/${img}"
				class="products__card-img"
			/>
			<div class="products__card-label">${name}</div>
			<div class="products__card-size">${size}</div>
		</div>
		<div class="products__card-bottom">
			<div class="products__card-price">${price} P</div>
			<button class="products__card-buy" data-type="to_cart">
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.0417 11.75C11.2555 11.75 10.625 12.3804 10.625 13.1667C10.625 13.5424 10.7743 13.9027 11.04 14.1684C11.3056 14.4341 11.666 14.5834 12.0417 14.5834C12.4174 14.5834 12.7778 14.4341 13.0434 14.1684C13.3091 13.9027 13.4584 13.5424 13.4584 13.1667C13.4584 12.791 13.3091 12.4306 13.0434 12.165C12.7778 11.8993 12.4174 11.75 12.0417 11.75ZM0.708374 0.416687V1.83335H2.12504L4.67504 7.2096L3.71171 8.94502C3.60546 9.14335 3.54171 9.3771 3.54171 9.62502C3.54171 10.0007 3.69096 10.3611 3.95664 10.6268C4.22232 10.8924 4.58265 11.0417 4.95837 11.0417H13.4584V9.62502H5.25587C5.20891 9.62502 5.16387 9.60636 5.13066 9.57315C5.09745 9.53994 5.07879 9.4949 5.07879 9.44794C5.07879 9.41252 5.08587 9.38419 5.10004 9.36294L5.73754 8.20835H11.0146C11.5459 8.20835 12.0134 7.91085 12.2542 7.47877L14.79 2.89585C14.8396 2.78252 14.875 2.6621 14.875 2.54169C14.875 2.35383 14.8004 2.17366 14.6676 2.04082C14.5347 1.90798 14.3546 1.83335 14.1667 1.83335H3.69046L3.02462 0.416687H0.708374ZM4.95837 11.75C4.17212 11.75 3.54171 12.3804 3.54171 13.1667C3.54171 13.5424 3.69096 13.9027 3.95664 14.1684C4.22232 14.4341 4.58265 14.5834 4.95837 14.5834C5.3341 14.5834 5.69443 14.4341 5.96011 14.1684C6.22579 13.9027 6.37504 13.5424 6.37504 13.1667C6.37504 12.791 6.22579 12.4306 5.96011 12.165C5.69443 11.8993 5.3341 11.75 4.95837 11.75Z"
						fill="white"
					/>
				</svg>
			</button>
		</div>
	</a>
`;

const detailTemplate = ({ img, name, size, price, description, id }) => `
	<img
		src="../../assets/img/${img}"
		class="detail__img"
	/>
	<div class="detail__wrap">
		<div class="detail__info">
			<h1 class="detail__title">${name}</h1>
			<div class="detail__size">${size}</div>
		</div>
		<div class="detail__price">
			<span data-type="counter-sum">${price}</span> Р
		</div>
		<div class="detail__controller">
			<div class="detail__counter">
				<div
					data-type="counter-minus"
					class="detail__counter-button"
				>
					<svg
						width="6"
						height="3"
						viewBox="0 0 6 3"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.320531 0.792H5.67253V2.736H0.320531V0.792Z"
							fill="black"
						/>
					</svg>
				</div>
				<div
					data-type="counter-value"
					class="detail__counter-value"
				>
					1
				</div>
				<div
					data-type="counter-plus"
					class="detail__counter-button"
				>
					<svg
						width="10"
						height="10"
						viewBox="0 0 10 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3.97953 6H0.619531V4.056H3.97953V0.144H5.89953V4.056H9.37953V6H5.89953V9.912H3.97953V6Z"
							fill="black"
						/>
					</svg>
				</div>
			</div>
			<a
				href="../../cart/index.html"
				class="detail__controller-buy"
				data-type="to_cart"
				data-index="${id}"
			>
				В корзину
			</a>
		</div>
		<div class="detail__description">
			<div class="detail__description-label">Описание товара</div>
			<div class="detail__description-content">${description}</div>
		</div>
	</div>
`;

const cartTemplate = ({ img, name, price, counter, id }) => `
	<div class="cart__card" data-type="cart_card" data-id="${id}">
		<a href="../catalog/product/index.html">
			<img
				src="../assets/img/${img}"
				class="cart__card-img"
			/>
		</a>
		<div class="cart__card-info">
			<div class="cart__card-title">${name}</div>
			<div class="cart__card-price">
				<span data-type="counter-sum">${
                    parseFloat(price) * parseFloat(counter)
                }</span> Р
			</div>
			<div class="cart__card-counter">
				<div
					data-type="counter-minus"
					class="cart__card-counter-button"
				>
					<svg
						width="6"
						height="3"
						viewBox="0 0 6 3"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.320531 0.792H5.67253V2.736H0.320531V0.792Z"
							fill="white"
						/>
					</svg>
				</div>
				<div
					data-type="counter-value"
					class="cart__card-counter-value"
				>
					${counter}
				</div>
				<div
					data-type="counter-plus"
					class="cart__card-counter-button"
				>
					<svg
						width="10"
						height="10"
						viewBox="0 0 10 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3.97953 6H0.619531V4.056H3.97953V0.144H5.89953V4.056H9.37953V6H5.89953V9.912H3.97953V6Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
`;

const orderTemplate = (number) => `
	<div class="profile__info">Ваш заказ<span class="profile__info-number">№ ${number}</span> готовится</div>
`;

const cartPayButtonTemplate = (price) => `
	<a href="../profile/index.html" data-type="make_order" class="cart__place-an-order">
		<div class="cart__place-an-order-text">
			Оформить заказ
		</div>
		<div class="cart__place-an-order-price">
			<span data-type="cart-sum">${price}</span> Р
		</div>
	</a>
`;

const changeCounterValue = (operator, $value, root, isCart) => {
    const value = +$value.textContent.trim();
    const $sum = root.querySelector('[data-type="counter-sum"]');
    const $cartSum = document.querySelector('[data-type="cart-sum"]');
    const initSum = $sum ? parseFloat($sum.textContent.trim()) / value : 0;

    const newValue =
        operator === "-"
            ? value > 1
                ? value - 1
                : value
            : value < 10
            ? value + 1
            : value;
    $value.innerHTML = newValue;
    if ($sum) $sum.innerHTML = newValue * initSum;
    if ($cartSum && isCart) {
        const cardId = root.dataset.id;
        const data = getCartData().find((c) => c.id === cardId);
        updateCart(data, $value);
        $cartSum.innerHTML = getSumPrice();
    }
};

const initCounter = (root, isCart = false) => {
    const $minus = root.querySelector('[data-type="counter-minus"]');
    const $value = root.querySelector('[data-type="counter-value"]');
    const $plus = root.querySelector('[data-type="counter-plus"]');

    $minus.addEventListener("click", () => {
        changeCounterValue("-", $value, root, isCart);
    });
    $plus.addEventListener("click", () => {
        changeCounterValue("+", $value, root, isCart);
    });

    return $value;
};

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

const getCartData = () =>
    localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [];

const getOrdersData = () =>
    localStorage.getItem("orders")
        ? JSON.parse(localStorage.getItem("orders"))
        : [];

const getSumPrice = () =>
    getCartData()
        .map((p) => parseFloat(p.price) * parseFloat(p.counter))
        .reduce((acc, cur) => (acc += cur));

const clearCart = () => {
    document.querySelector(".cart").innerHTML = "";
    localStorage.setItem("cart", JSON.stringify([]));
};

const setCart = () => {
    const root = document.querySelector(".cart");
    const cartData = getCartData();
    const template = cartData.map((p) => cartTemplate(p)).join("");

    root.innerHTML = cartData.length
        ? template + cartPayButtonTemplate(getSumPrice())
        : template;

    const $makeOrderButton = document.querySelector('[data-type="make_order"]');
    if ($makeOrderButton) {
        $makeOrderButton.addEventListener("click", (event) => {
            event.preventDefault();
            const ordersData = getOrdersData();
            ordersData.push(getRandomInt(17, 1000));
            localStorage.setItem("orders", JSON.stringify(ordersData));
            clearCart();
        });
    }
    document.querySelectorAll('[data-type="cart_card"]').forEach(($card) => {
        const $counterValue = initCounter($card, true);
    });

    const $removeButton = document.querySelector(".header__clear-button");
    $removeButton.addEventListener("click", (event) => clearCart());
};

const setProfile = () => {
    const root = document.querySelector(".profile");
    getOrdersData().forEach((number) => {
        root.insertAdjacentHTML("afterbegin", orderTemplate(number));
    });
};

const updateCart = (data, $counterValue) => {
    const cartData = getCartData();
    let sameProductIndex = null;
    const sameProduct = cartData.find((p, index) => {
        sameProductIndex = index;
        return p.id === data.id;
    });

    data.counter = $counterValue ? $counterValue.textContent.trim() : 1;

    sameProduct ? (cartData[sameProductIndex] = data) : cartData.push(data);
    localStorage.setItem("cart", JSON.stringify(cartData));
};

const setDetail = () => {
    const currentProduct = localStorage.getItem("currentProduct");
    const data = currentProduct
        ? JSON.parse(currentProduct)
        : products.default[0];
    const root = document.querySelector(".detail");
    root.innerHTML = detailTemplate(data);

    const $counterValue = initCounter(document);

    const $cartButton = document.querySelector('[data-type="to_cart"]');
    $cartButton.addEventListener("click", (event) => {
        updateCart(data, $counterValue);
    });
};

const cetCatalogCards = (category) => {
    const root = document.querySelector(".products");
    root.innerHTML = products[category]
        .map((product) => catalogCardTemplate(product))
        .join("");

    root.addEventListener("click", (event) => {
        const $card = event.target.closest(".products__card");
        const cardId = $card.dataset.id;
        const data = products[category].find((p) => p.id === cardId);
        localStorage.setItem("currentProduct", JSON.stringify(data));
    });

    const $cartButtons = root.querySelectorAll('[data-type="to_cart"]');

    $cartButtons.forEach(($button) => {
        $button.addEventListener("click", (event) => {
            event.preventDefault();
            const $card = event.target.closest(".products__card");
            const cardId = $card.dataset.id;
            const data = products[category].find((p) => p.id === cardId);
            updateCart(data);
            window.location.href =
                window.location.href.split("/").slice(0, -3).join("/") +
                "/cart/index.html";
        });
    });
};
