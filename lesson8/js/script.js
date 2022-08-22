const tableWrapper = document.querySelector('.table-content'); //Поменял row на другой класс так как 
//при делигировании цеплялись и кнопки с корзины,а у них должна быть другая логика(посмотрите куда добавил данный класс)
const basketCartWrapper = document.querySelector('.cart-wrapper');
const basketPlaceholder = document.querySelector('[data-cart-empty]');
const totalPriceWrapper = document.querySelector('.total-price');
const deliveryCostWrapper = document.querySelector('.delivery-cost');
const deliveryPriceWrapper = document.querySelector('.delivery-price');


const basketList = [];
let totalPriceInt = 300;

basketCartWrapper.addEventListener('click', (event) => {
    if (event.target.getAttribute('data-action') == "plus") {
        const counterWrapper = event.target.closest('.counter-wrapper');
        const counter = counterWrapper.querySelector('[data-counter]');
        counter.innerText = +counter.innerText + 1;
    }
    if (event.target.getAttribute('data-action') == "minus") {
        const counterWrapper = event.target.closest('.counter-wrapper');
        const counter = counterWrapper.querySelector('[data-counter]');
        if (counter.innerText > 1) {
            counter.innerText = +counter.innerText - 1;
        }
    }
})

tableWrapper.addEventListener('click', (event) => {
    if (event.target.getAttribute('data-action') == "plus") {
        const counterWrapper = event.target.closest('.counter-wrapper');
        const counter = counterWrapper.querySelector('[data-counter]');
        counter.innerText = +counter.innerText + 1;
        return;
    }

    if (event.target.getAttribute('data-action') == "minus") {
        const counterWrapper = event.target.closest('.counter-wrapper');
        const counter = counterWrapper.querySelector('[data-counter]');
        if (counter.innerText > 1) {
            counter.innerText = +counter.innerText - 1;
        }
        return;
    }

    if (event.target.classList.contains("btn-block")) {
        const cartWrapper = event.target.closest(".card");
        const newOrder = {
            title: cartWrapper.querySelector('.item-title').innerText,
            weight: cartWrapper.querySelector('.price__weight').innerText,
            muted: cartWrapper.querySelector('.text-muted').innerText,
            count: cartWrapper.querySelector('.items__current').innerText,
            price: cartWrapper.querySelector('.price__currency').innerText,
            img: cartWrapper.querySelector('.product-img').src
        };
        const itemExistArr = basketList.filter(item => {
            if (item.title == newOrder.title) {
                return true;
            }
        });
        if (itemExistArr.length) {
            for (let i = 0; i < basketList.length; i++) {
                if (basketList[i].title == itemExistArr[0].title) {
                    basketList[i].count = +newOrder.count + +basketList[i].count; //тут поменял немного логику,так как
                    break; //складывал не те числа))
                }
            }
        } else {
            basketList.push(newOrder);
        }

        cartWrapper.querySelector('.items__current').innerText = 1;
        showItemsBasket();
    }
});


function showItemsBasket() {
    if (basketList.length == 0) {
        basketPlaceholder.classList.add('show');
        basketPlaceholder.classList.remove('hide');
    } else {
        basketPlaceholder.classList.remove('show');
        basketPlaceholder.classList.add('hide');
    }
    let basketItems = '';

    totalPriceInt = 300

    basketList.forEach((item) => {
        totalPriceInt = totalPriceInt + (parseInt(item.price) * parseInt(item.count));
        basketItems += `
        <div class="cart-item" data-id="2">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${item.img}" alt="">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${item.title}</div>
                    <div class="cart-item__weight">${item.muted} / ${item.weight}</div>
                    <!-- cart-item__details -->
                    <div class="cart-item__details">
                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${item.count}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>
                        <div class="price">
                            <div class="price__currency">${item.price}</div>
                        </div>
                    </div>
                    <!-- // cart-item__details -->
                </div>
            </div>
        </div>`;
    });
    basketCartWrapper.innerHTML = basketItems;

    if (totalPriceInt >= 900) {
        deliveryCostWrapper.classList.remove('hide');
        deliveryPriceWrapper.classList.add('hide');
        totalPriceInt = totalPriceInt - 300;
    }
    totalPriceWrapper.innerHTML = totalPriceInt;
}

//Задания //Сделайте как можно больше задач,делайте сначала те задачи в которых больше уверены(самые простые задачи это 1 и 3.Задача 2 
//очень похожа на текущую реализацию делигирования за несколькими исключениями)
/*
    1.У вас есть стоимость одного сетта сушь,в поле "ИТОГО" надо выводить сумму конечного заказа
    (при добавлении и удалении элементов пересчитывтаь сумму)
    2.Добавить для корзины делигирования и количество сушей можно уменьшать 
    до нуля,то есть если в корзине был один сет и при на минус он должен полностью удаляться
    3.После нажатия на кнопку "в корзину" сбрасывать счётчик данного товара обратно до единицы()
    4.У вас есть блоки с классами delivery-price и free .Блок free показывать только в топ случае,если сумма заказа 
    больше или равна 600р,если нет, то в итоговую сумму записывать сумму заказа + доставка 300р, 
    то есть если мы закажем на сумму 550,то итоговая сумма должна быть 850р,а если больше 600 р то 
    доставка бесплатная и соответственно в зависимости от заказа показывать блок delivery-price или free.
*/