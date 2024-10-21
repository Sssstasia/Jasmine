
const buttons = document.querySelectorAll('.size-button');


buttons.forEach(button => {
    button.addEventListener('click', function () {

        buttons.forEach(btn => btn.classList.remove('black'));


        this.classList.add('black');
    });
});

document.getElementById('order-now').addEventListener('click', function () {
    this.classList.add('pressed');
    setTimeout(() => {
        this.classList.remove('pressed');
    }, 1000);  // 1 second = 1000 milliseconds
});
