const tableWrapper = document.querySelector('.table-content'); //Поменял row на другой класс так как 
//при делигировании цеплялись и кнопки с корзины,а у них должна быть другая логика(посмотрите куда добавил данный класс)
const basketCartWrapper = document.querySelector('.cart-wrapper');
const basketPlaceholder = document.querySelector('[data-cart-empty]');
const totalPriceWrapper = document.querySelector('.total-price');
const deliveryCostWrapper = document.querySelector('.delivery-cost');
const deliveryPriceWrapper = document.querySelector('.delivery-price');
const openModalWrapper = document.querySelector('#open_modal');

//Model
const sushiItem = {
    title: String,
    price: Number,
    weight: Number,
    count: Number,
    img: String
};


let sushiList = [{
        title: 'Филадельфия хит ролл',
        count: 6,
        weight: 180,
        price: 300,
        img: 'img/roll/philadelphia.jpg'
    },
    {
        title: 'Калифорния темпура',
        count: 6,
        weight: 205,
        price: 250,
        img: 'img/roll/california-tempura.jpg'
    },
    {
        title: 'Запеченый ролл «Калифорния»',
        count: 6,
        weight: 182,
        price: 230,
        img: 'img/roll/zapech-california.jpg'
    },
    {
        title: 'Филадельфия',
        count: 6,
        weight: 230,
        price: 320,
        img: 'img/roll/philadelphia.jpg'
    }
]

showProductItem()

const basketList = [];
let totalPriceInt = 300;


openModalWrapper.addEventListener('click', () => {
    const newModalCode = `<div class="modal">
     <div class="modal__window">
         <div class="modal__wrap">
             <label for="modalItemTitle">Title</label>
             <input id="modalItemTitle">
             <label for="modalItemPrice">Price</label>
             <input id="modalItemPrice">
             <label for="modalItemWeight">Weight</label>
             <input id="modalItemWeight">
             <label for="modalItemCount">Count</label>
             <input id="modalItemCount">
             <button type="button" id="add_item">Add</button>
         </div>
     </div>
 </div>`;

    document.getElementById('newModal').innerHTML = newModalCode;

    const addItemWrapper = document.querySelector('#add_item');

    addItemWrapper.addEventListener('click', () => {
        const newTitle = document.getElementById('modalItemTitle').value;
        const newPrice = document.getElementById('modalItemPrice').value;
        const newWeight = document.getElementById('modalItemWeight').value;
        const newCount = document.getElementById('modalItemCount').value;


        const newItem = Object.create(sushiItem)
        newItem.title = newTitle;
        newItem.price = newPrice;
        newItem.weight = newWeight;
        newItem.count = newCount;
        newItem.img = 'img/roll/california-tempura.jpg';

        sushiList.push(newItem);
        showProductItem();

        document.getElementById('newModal').innerHTML = "";
    })
})



basketCartWrapper.addEventListener('click', (event) => {
    if (event.target.getAttribute('data-action') == "plus") {
        const title = event.target.closest(".cart-item").querySelector('.cart-item__title').innerText;

        for (let i = 0; i < basketList.length; i++) {
            if (basketList[i].title == title) {
                basketList[i].count++;
            }
        }
    }
    if (event.target.getAttribute('data-action') == "minus") {
        const title = event.target.closest(".cart-item").querySelector('.cart-item__title').innerText;
        for (let i = 0; i < basketList.length; i++) {
            if (basketList[i].title == title) {
                basketList[i].count--;

                if (basketList[i].count == 0) {
                    const index = basketList.indexOf(basketList[i]);
                    if (index > -1) { // only splice array when item is found
                        basketList.splice(index, 1); // 2nd parameter means remove one item only
                    }
                }
            }
        }
    }



    showItemsBasket()
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



function showProductItem() {
    let newSushi = '';
    let index = 0;
    sushiList.forEach((item) => {
        newSushi +=
            `<div class="col-md-6">
        <div class="card mb-4" data-id="${index}">
            <img class="product-img" src="${item.img}" alt="">
            <div class="card-body text-center">
                <h4 class="item-title">${item.title}</h4>
                <p><small data-items-in-box="" class="text-muted">${item.count} шт.</small></p>
                <div class="details-wrapper">
                    <div class="items counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">1</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>
                    <div class="price">
                        <div class="price__weight">${item.weight}г.</div>
                        <div class="price__currency">${item.price} ₽</div>
                    </div>
                </div>
                <button data-cart="" type="button" class="btn btn-block btn-outline-warning">
                + в корзину
            </button>
            </div>
        </div>
    </div>`
        index++
    });

    document.getElementById('sushiList').innerHTML = newSushi;
}


function showItemsBasket() {
    debugger
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
    } else {
        deliveryCostWrapper.classList.add('hide');
        deliveryPriceWrapper.classList.remove('hide');
    }
    totalPriceWrapper.innerHTML = totalPriceInt;

}