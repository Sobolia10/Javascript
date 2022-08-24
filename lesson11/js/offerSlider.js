window.addEventListener("DOMContentLoaded", () => {
    const offerCounterWrapper = document.querySelector(".offer__slider-counter");
    const totalCounter = document.querySelector("#total");
    const currentCounterSlide = document.querySelector("#current");
    const sliderItems = [{
            id: 1,
            src: "img/slider/pepper.jpg",
            alt: "pepper"
        },

        {
            id: 2,
            src: "img/slider/food-12.jpg",
            alt: "food"
        },

        {
            id: 3,
            src: "img/slider/olive-oil.jpg",
            alt: "oil"
        },

        {
            id: 4,
            src: "img/slider/paprika.jpg",
            alt: "paprika"
        }
    ];

    const offerSliderWrapper = document.querySelector('.offer__slider-wrapper');
    showSlider(sliderItems);

    function showSlider(sliderItemsArr) {
        let offerItems = "";
        sliderItemsArr.forEach(item => {
            offerItems += `
                    <div data-id="${item.id}" class="offer__slide">
                    <img src="${item.src}" alt="${item.alt}">
                </div>
            `;
        })

        offerSliderWrapper.innerHTML = offerItems;
    };

    // const array = [];
    // totalCounter.innerHTML = "0"
    // array.length;

    offerCounterWrapper.addEventListener('click', (event) => {
        if (event.target.closest(".offer__slider-prev")) {
            if (+currentCounterSlide.innerText > 1) {
                let newValue = +currentCounterSlide.innerText - 1;
                currentCounterSlide.innerText = "0" + newValue;
                showCurrentSlide(newValue);
            }
        }

        if (event.target.closest(".offer__slider-next")) {
            if (+currentCounterSlide.innerText != sliderItems.length) {
                let newValue = +currentCounterSlide.innerText + 1;
                currentCounterSlide.innerText = "0" + newValue;
                showCurrentSlide(newValue);
            }
        }
    });
    showCurrentSlide(1);

    function showCurrentSlide(queueNum) {
        let currentSlideData = sliderItems[queueNum - 1]
        const offerSlideElems = document.querySelectorAll(".offer__slide");
        offerSlideElems.forEach(item => {
            if (item.getAttribute("data-id") == currentSlideData.id) {
                item.classList.add("show");
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
                item.classList.remove("show");
            }
        });
    };

});