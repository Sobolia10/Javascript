window.addEventListener("DOMContentLoaded", () => {
    const menuItems = [{
            id: 1,
            subtitle: "Меню \"Фитнес \"",
            descr: "Меню 'Фитнес'  - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
            src: "img/tabs/vegy.jpg",
            cost: "229",
            alt: "vegy"
        },

        {
            id: 2,
            subtitle: "Меню \"Премиум \"",
            descr: 'Меню "Премиум" - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            src: "img/tabs/elite.jpg",
            cost: "550",
            alt: "elite"
        },

        {
            id: 3,
            subtitle: "Меню \"Постное \"",
            descr: "Наше специальное 'Постное меню' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!",
            src: "img/tabs/post.jpg",
            cost: "430",
            alt: "post"
        },
    ];


    showMenuItems(menuItems);

    function showMenuItems(menuItems) {
        let items = '';

        menuItems.forEach((item) => {
            items += `
            <div class="menu__item">
            <img src="${item.src}" alt="${item.alt}">
            <h3 class="menu__item-subtitle">${item.subtitle}</h3>
            <div class="menu__item-descr">${item.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${item.cost}</span> грн/день</div>
            </div>
        </div>
`;
        });

        const menuWrapper = document.querySelector('#menu');
        menuWrapper.innerHTML = items;
    };
});