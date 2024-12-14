
window.addEventListener("click", function (event) {

    //Объявляем переменную для счетчика
    let counter;

    // console.log(event.target); //находим элемент по которому кликнули
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

        //Находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');
        // Находим сам счетчик
        counter = counterWrapper.querySelector('[data-counter]');
    }

    // Проверяем является ли элемент по которому был совершен клик кнопкой плюс
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    if (event.target.dataset.action === 'minus') {

        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
        //Проверка на товар который находится внутри корзины 
        else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            //Удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            toggleCartStatus();

            calcCartPriceAndDelivery();
        }
    }
    //Проверяем был ли клик на плюс или минус внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery()
    }
})

