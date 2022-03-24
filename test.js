// const width = document.querySelector('.card');
// var style = getComputedStyle(width).width;
// var card = document.querySelector('#width').style.scrollPaddingInlineStart = "100px";
// window.setInterval(function () {
//     var card = document.querySelector('#width')
//     var cardStyle = card.style.width = "-200px";
// }, 5000)
// console.log(style)
// const width = document.querySelector('.grid-container');
// width.scrollIntoView()
let span = document.getElementsByTagName('span');
let product = document.getElementsByClassName('card')
let product_page = Math.ceil(product.length / 6);
console.log(product_page)
let l = 0;
let movePer = 16.666667;
let maxMove = 203;
// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
    movePer = 49;
    maxMove = 504;
}

let right_mover = () => {
    l = l + movePer;
    if (product == 1) { l = 0; }
    console.log(l)
    for (const i of product) {
        if (l > maxMove) { l = l - movePer; }
        i.style.left = '-' + l + '%';
        console.log(l)
    }

}
let left_mover = () => {
    l = l - movePer;
    if (l <= 0) { l = 0; }
    for (const i of product) {
        if (product_page > 1) {
            i.style.left = '-' + l + '%';
        }
    }
}
span[1].onclick = () => { right_mover(); }
span[0].onclick = () => { left_mover(); }