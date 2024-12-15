
function calcCartPriceAndDelivery() {
    // const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelectorAll('[data-price]');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    let totalPrice = 0;

    cartItems.forEach(function (item) {
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

        totalPrice += currentPrice;

    });

    //Отображаем цену на странице
    totalPriceEl.forEach(function(item) {
        item.innerText = totalPrice;
    })

    if (totalPrice > 0) {
        cartDelivery.classList.remove('none');
    } else {
        deliveryCost.classList.add('none');
  
    }

    if (totalPrice >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = "бесплатно";
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = "250 ₽";
    }

};


