window.addEventListener("DOMContentLoaded", () => {
    const items = [{
            id: 1,
            bookmarktitle: "Фитнес",
            desc: "Меню 'Фитнес'  - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
            src: "img/tabs/vegy.jpg"
        },

        {
            id: 2,
            bookmarktitle: "Премиум",
            desc: 'Меню "Премиум" - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            src: "img/tabs/elite.jpg"
        },

        {
            id: 3,
            bookmarktitle: "Постное",
            desc: "Наше специальное 'Постное меню' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!",
            src: "img/tabs/post.jpg"
        },

        {
            id: 4,
            bookmarktitle: "Сбалансированное",
            desc: "Меню 'Сбалансированное' - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.",
            src: "img/tabs/vegy.jpg"
        },
    ];

    const tabContentWrapper = document.querySelector('.tabcontainer');
    showSliders(items);

    function showSliders(itemsArr) {
        let menuItems = '';

        itemsArr.forEach((item) => {
            menuItems += `
                    <div data-id="${item.id}" class="tabcontent">
                        <img src="${item.src}" alt="">
                        <div class="tabcontent__descr">${item.desc}</div>
                    </div>
                            `;
        });

        const tabHeaderWrapper = document.createElement("div");
        tabHeaderWrapper.classList.add("tabheader");
        const tabHeaderTitle = document.createElement("h3");
        tabHeaderTitle.innerText = "Выберите стиль питания";
        const tabHeaderItems = document.createElement("div");
        tabHeaderItems.classList.add("tabheader__items");

        tabHeaderWrapper.append(tabHeaderTitle);
        tabHeaderWrapper.append(tabHeaderItems);

        let tabItems = "";
        itemsArr.forEach(item => {
            tabItems += `<div data-id="${item.id}" class='tabheader__item'>${item.bookmarktitle}</div>`;
        });

        tabHeaderWrapper.querySelector(".tabheader__items").innerHTML = tabItems;
        tabContentWrapper.innerHTML = menuItems;
        tabContentWrapper.append(tabHeaderWrapper);
    };

    currentSlider(1);
    const menuWrapper = document.querySelector('.tabheader__items');
    menuWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains("tabheader__item")) {
            currentSlider(event.target.getAttribute("data-id"));
        }
    });

    function currentSlider(id) {
        console.log(id);
        const sliders = document.querySelectorAll(".tabcontent");
        const menuItems = document.querySelectorAll(".tabheader__item");
        sliders.forEach(item => {
            if (item.getAttribute("data-id") == id) {
                console.log(item);
                console.log(item.getAttribute("data-id"));
                item.classList.add("show");
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
                item.classList.remove("show");
            }
        });
        menuItems.forEach(item => {
            if (item.getAttribute("data-id") == id) {
                item.classList.add("tabheader__item_active");
            } else {
                item.classList.remove("tabheader__item_active");
            }
        });
    }

});