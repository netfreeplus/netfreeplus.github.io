document.addEventListener('DOMContentLoaded', function () {
    const buyBtns = document.querySelectorAll('.buy-btn');

    buyBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const productDetails = this.parentElement;
            const product = productDetails.parentElement;
            product.classList.toggle('show-details');
        });
    });
});
