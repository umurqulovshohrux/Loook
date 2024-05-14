let users = window.localStorage.getItem('users') 
let foods = window.localStorage.getItem('foods') 
let orders = window.localStorage.getItem('orders') 



 users = JSON.parse(users) || [
    {userId: 1, userName: "Shohruh", contact: "+998940552101"},
    {userId: 2, userName: "Saman", contact: "+998958890615"},
    {userId: 3, userName: "Xasan", contact: "+998998050613"},
    {userId: 4, userName: "Murod", contact: "+998990673606"},
];

 foods = JSON.parse(foods) || [
    {foodId: 1, foodName: "burger cheese", foodImg: "./img/burger_cheese.jpeg"},
    {foodId: 2, foodName: "chicken togora", foodImg:"./img/chicken_togora.jpeg"},
    {foodId: 3, foodName: "chicken wings", foodImg:"./img/chicken_wings.jpeg"},
    {foodId: 4, foodName: "cola", foodImg:"./img/cola.jpeg"},
    {foodId: 5, foodName: "combo", foodImg:"./img/combo.jpeg"},
    {foodId: 6, foodName: "fanta", foodImg:"./img/fanta.jpeg"},
    {foodId: 7, foodName: "spinner", foodImg:"./img/spinner.jpeg"},
];

 orders =JSON.parse(orders) || [
    {userId: 1, foodId: 2, count: 2},
    {userId: 2, foodId: 4, count: 3},
    {userId: 4, foodId: 6, count: 1},
    {userId: 3, foodId: 7, count: 4},
]