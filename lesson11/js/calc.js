window.addEventListener("DOMContentLoaded", () => {
    const genderElement = document.querySelector('.calculating__choose');
    const heightElement = document.querySelector('#height')
    const weightElement = document.querySelector('#weight')
    const ageElement = document.querySelector('#age')
    const activityTypeElement = document.querySelector('.calculating__choose_big');


    let fizData = {
        genderType: String = 'Женщина',
        height: Number = 0,
        weight: Number = 0,
        age: Number = 0,
        activityType: String = 'small'
    }

    genderElement.addEventListener('click', (event) => {
        if (event.target.closest('.calculating__choose-item')) {
            let btnArray = genderElement.children;

            for (let i = 0; i < btnArray.length; i++) {
                btnArray[i].className = 'calculating__choose-item';
            }

            event.target.className = ('calculating__choose-item calculating__choose-item_active')
        }

        fizData.genderType = event.target.innerText;
        totalCalc();
    });


    heightElement.addEventListener('change', (event) => {
        fizData.height = parseFloat(event.target.value);
        totalCalc();
    })

    weightElement.addEventListener('change', (event) => {
        fizData.weight = parseFloat(event.target.value);
        totalCalc();
    })

    ageElement.addEventListener('change', (event) => {
        fizData.age = parseFloat(event.target.value);
        totalCalc();
    })


    activityTypeElement.addEventListener('click', (event) => {
        if (event.target.closest('.calculating__choose-item')) {
            let btnArray = activityTypeElement.children;

            for (let i = 0; i < btnArray.length; i++) {
                btnArray[i].className = 'calculating__choose-item';
            }

            event.target.className = ('calculating__choose-item calculating__choose-item_active')
        }

        fizData.activityType = event.target.id;
        totalCalc();
    });


    function totalCalc() {

        if (fizData.height > 0 && fizData.weight > 0 && fizData.age > 0) {

            let totalElement = document.querySelector('.calculating__result');

            let result = 0;
            let genderMultiply = fizData.genderType === 'Женщина' ? 4.676 : 6.775;
            let genderVar = fizData.genderType === 'Женщина' ? 4.676 : 6.775;
            let activityMultiply = 0;

            switch (fizData.activityType) {
                case 'low':
                    activityMultiply = 0.5;
                    break;
                case 'small':
                    activityMultiply = 0.7;
                    break;
                case 'medium':
                    activityMultiply = 1;
                    break;
                case 'high':
                    activityMultiply = 1.5;
                    break;
                default:
                    activityMultiply = 0;
                    break;
            }
            result = Math.round(genderVar + 1.85 * fizData.height + 9.563 * fizData.weight - fizData.age * genderMultiply * activityMultiply, 0);

            totalElement.innerHTML = '<span>' + result + '</span> ккал';
        }

    }
});