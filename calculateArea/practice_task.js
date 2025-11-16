let item_1;
let item_2;
let item_3;

function calculateTotal() {
    item_1 = parseFloat(document.getElementById("item-1").value);
    item_2 = parseFloat(document.getElementById("item-2").value);
    item_3 = parseFloat(document.getElementById("item-3").value);
    prices = [item_1, item_2, item_3]
    result = prices.reduce((partialSum, a) => partialSum + a, 0);

    document.getElementById("result").innerText = `The total amount is :$ ${result} `
}