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
			<span>${price}</span> Р
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
				<span>${price}</span> Р
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

const chooseBuildingTemplate = () => `
	<div data-type="choose_building" class="choose-building__page">
		<div class="choose-building__block">
			<div class="choose-building__title">Выбор корпуса</div>
			<ul class="choose-building__cards">
				<li class="choose-building__card">
					<a
						href="#"
						data-type="choose_building_card"
						class="choose-building__card-content"
					>
						<div class="choose-building__card-text">
							Главный корпус
						</div>
					</a>
				</li>
				<li class="choose-building__card">
					<a
						href="#"
						data-type="choose_building_card"
						class="choose-building__card-content"
					>
						<div class="choose-building__card-number">1</div>
						<div class="choose-building__card-text">Корпус</div>
					</a>
				</li>
				<li class="choose-building__card">
					<a
						href="#"
						data-type="choose_building_card"
						class="choose-building__card-content"
					>
						<div class="choose-building__card-number">6</div>
						<div class="choose-building__card-text">Корпус</div>
					</a>
				</li>
				<li class="choose-building__card">
					<a
						href="#"
						data-type="choose_building_card"
						class="choose-building__card-content"
					>
						<div class="choose-building__card-number">8</div>
						<div class="choose-building__card-text">Корпус</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
`;

const toolbarTemplate = (pathToRoot, active) => `
	<div class="toolbar" data-type="toolbar">
		<a
			href="#"
			class="toolbar__button${active === 1 ? " toolbar__button_active" : ""}"
			data-type="show_choose_building"
		>
			<div class="toolbar__button-icon">
				<svg
					width="29"
					height="26"
					viewBox="0 0 29 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M27.6538 12.7949L15.9562 1.48048L15.1721 0.721692C14.9934 0.549944 14.7518 0.453552 14.5 0.453552C14.2482 0.453552 14.0066 0.549944 13.8279 0.721692L1.34621 12.7949C1.16315 12.9714 1.01848 13.1816 0.920726 13.413C0.822975 13.6445 0.77413 13.8926 0.777073 14.1426C0.789182 15.1738 1.67619 15.9971 2.74182 15.9971H4.02844V25.5391H24.9716V15.9971H26.2855C26.8031 15.9971 27.2905 15.8008 27.6569 15.4463C27.8372 15.2723 27.9801 15.0654 28.0773 14.8376C28.1745 14.6098 28.224 14.3656 28.223 14.1192C28.223 13.6211 28.0201 13.1494 27.6538 12.7949ZM16.1953 23.4297H12.8047V17.4531H16.1953V23.4297ZM22.7919 13.8877V23.4297H18.1328V16.75C18.1328 16.1026 17.5909 15.5781 16.9219 15.5781H12.0781C11.4091 15.5781 10.8672 16.1026 10.8672 16.75V23.4297H6.20813V13.8877H3.30188L14.503 3.05665L15.2024 3.73341L25.7012 13.8877H22.7919Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div class="toolbar__button-text">Корпус</div>
		</a>
		<a
			href="${pathToRoot}catalog/index.html"
			class="toolbar__button${active === 2 ? " toolbar__button_active" : ""}"
		>
			<div class="toolbar__button-icon">
				<svg
					width="27"
					height="30"
					viewBox="0 0 27 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M22.3815 26.25H20.5172V26.8066C20.5172 27.8418 20.2308 28.667 19.6579 29.2822C19.085 29.8975 18.3908 30.1172 17.5752 29.9414L2.95223 27.041C2.13661 26.8848 1.44236 26.3867 0.86948 25.5469C0.296603 24.707 0.0101643 23.7695 0.0101643 22.7344V3.75C0.0101643 2.71484 0.374281 1.83105 1.10252 1.09863C1.83075 0.366211 2.70948 0 3.73872 0H22.3815C23.4107 0 24.2895 0.366211 25.0177 1.09863C25.746 1.83105 26.1101 2.71484 26.1101 3.75V22.5C26.1101 23.5352 25.746 24.4189 25.0177 25.1514C24.2895 25.8838 23.4107 26.25 22.3815 26.25ZM3.73872 12.2168C3.73872 13.1152 4.03002 13.9355 4.6126 14.6777C4.69028 14.7949 4.89904 14.9805 5.23888 15.2344C5.57873 15.4883 5.87973 15.7568 6.14189 16.04C6.40406 16.3232 6.53514 16.6016 6.53514 16.875V20.625C6.53514 20.918 6.841 21.1865 7.45271 21.4307C8.06443 21.6748 9.00143 21.9531 10.2637 22.2656C11.0211 22.4609 11.6765 22.5342 12.2299 22.4854C12.7834 22.4365 13.2155 22.3242 13.5262 22.1484C13.8369 21.9727 13.9923 21.7773 13.9923 21.5625V17.8125C13.9923 17.5391 14.1233 17.2803 14.3855 17.0361C14.6477 16.792 14.9584 16.5723 15.3176 16.377C15.6769 16.1816 15.8857 16.0547 15.9439 15.9961C16.041 15.918 16.1818 15.8301 16.3663 15.7324C16.5508 15.6348 16.6673 15.5322 16.7159 15.4248C16.7644 15.3174 16.7887 15.127 16.7887 14.8535C16.7887 13.9746 16.5071 13.1641 15.9439 12.4219C15.3808 11.6797 14.7108 11.2305 13.934 11.0742C13.4485 10.9766 12.9921 11.0254 12.5649 11.2207C11.9823 10.2246 11.2104 9.62891 10.2491 9.43359C9.28786 9.23828 8.52565 9.52148 7.96248 10.2832C7.51583 9.93164 7.05947 9.70703 6.5934 9.60938C5.7972 9.45312 5.12237 9.62891 4.56891 10.1367C4.01545 10.6445 3.73872 11.3379 3.73872 12.2168ZM24.2458 5.09766C24.2458 4.19922 23.9302 3.4375 23.2991 2.8125C22.6679 2.1875 21.9154 1.875 21.0416 1.875H7.49641L17.5752 3.86719C18.3908 4.04297 19.085 4.55078 19.6579 5.39062C20.2308 6.23047 20.5172 7.1582 20.5172 8.17383V24.375H21.0416C21.9154 24.375 22.6679 24.0576 23.2991 23.4229C23.9302 22.7881 24.2458 22.0312 24.2458 21.1523V5.09766Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div class="toolbar__button-text">Каталог</div>
		</a>
		<a
			href="${pathToRoot}cart/index.html"
			class="toolbar__button${active === 3 ? " toolbar__button_active" : ""}"
		>
			<div class="toolbar__button-icon">
				<svg
					width="26"
					height="26"
					viewBox="0 0 26 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.25 20.5C18.8625 20.5 17.75 21.6125 17.75 23C17.75 23.663 18.0134 24.2989 18.4822 24.7678C18.9511 25.2366 19.587 25.5 20.25 25.5C20.913 25.5 21.5489 25.2366 22.0178 24.7678C22.4866 24.2989 22.75 23.663 22.75 23C22.75 22.337 22.4866 21.7011 22.0178 21.2322C21.5489 20.7634 20.913 20.5 20.25 20.5ZM0.25 0.5V3H2.75L7.25 12.4875L5.55 15.55C5.3625 15.9 5.25 16.3125 5.25 16.75C5.25 17.413 5.51339 18.0489 5.98223 18.5178C6.45107 18.9866 7.08696 19.25 7.75 19.25H22.75V16.75H8.275C8.19212 16.75 8.11263 16.7171 8.05403 16.6585C7.99542 16.5999 7.9625 16.5204 7.9625 16.4375C7.9625 16.375 7.975 16.325 8 16.2875L9.125 14.25H18.4375C19.375 14.25 20.2 13.725 20.625 12.9625L25.1 4.875C25.1875 4.675 25.25 4.4625 25.25 4.25C25.25 3.91848 25.1183 3.60054 24.8839 3.36612C24.6495 3.1317 24.3315 3 24 3H5.5125L4.3375 0.5H0.25ZM7.75 20.5C6.3625 20.5 5.25 21.6125 5.25 23C5.25 23.663 5.51339 24.2989 5.98223 24.7678C6.45107 25.2366 7.08696 25.5 7.75 25.5C8.41304 25.5 9.04893 25.2366 9.51777 24.7678C9.98661 24.2989 10.25 23.663 10.25 23C10.25 22.337 9.98661 21.7011 9.51777 21.2322C9.04893 20.7634 8.41304 20.5 7.75 20.5Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div class="toolbar__button-text">Корзина</div>
		</a>
		<a
			href="${pathToRoot}profile/index.html"
			class="toolbar__button${active === 4 ? " toolbar__button_active" : ""}"
		>
			<div class="toolbar__button-icon">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M2.625 23.25C2.625 23.25 0.75 23.25 0.75 21.375C0.75 19.5 2.625 13.875 12 13.875C21.375 13.875 23.25 19.5 23.25 21.375C23.25 23.25 21.375 23.25 21.375 23.25H2.625ZM12 12C13.4918 12 14.9226 11.4074 15.9775 10.3525C17.0324 9.29758 17.625 7.86684 17.625 6.375C17.625 4.88316 17.0324 3.45242 15.9775 2.39752C14.9226 1.34263 13.4918 0.75 12 0.75C10.5082 0.75 9.07742 1.34263 8.02252 2.39752C6.96763 3.45242 6.375 4.88316 6.375 6.375C6.375 7.86684 6.96763 9.29758 8.02252 10.3525C9.07742 11.4074 10.5082 12 12 12Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div class="toolbar__button-text">Профиль</div>
		</a>
	</div>
`;

const switchBuildingBlock = ($block) => {
    const showBlock = localStorage.getItem("building");
    const style = showBlock === "false" ? "none" : "block";
    $block.style.display = style;
    localStorage.setItem("building", style === "block" ? "true" : "false");
};

const setChooseBuilding = () => {
    const root = document.body;
    root.insertAdjacentHTML("afterbegin", chooseBuildingTemplate());
    const $block = document.querySelector('[data-type="choose_building"]');
    switchBuildingBlock($block);
    $block.addEventListener("click", (event) => {
        const $button = event.target.closest(
            '[data-type="choose_building_card"]'
        );
        localStorage.setItem("building", "false");
        if ($button) switchBuildingBlock($block);
    });
};

const setToolbar = (pathToRoot, active) => {
    const root = document.body;
    root.insertAdjacentHTML("afterbegin", toolbarTemplate(pathToRoot, active));
    const $block = document.querySelector('[data-type="choose_building"]');
    root.querySelector('[data-type="show_choose_building"]').addEventListener(
        "click",
        () => {
            localStorage.setItem("building", "true");
            switchBuildingBlock($block);
        }
    );
};

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
