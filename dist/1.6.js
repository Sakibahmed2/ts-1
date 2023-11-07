"use strict";
// Function type
function add(num1, num2) {
    return num1 + num2;
}
// add(1, true);
const addArrow = (num1, num2) => num1 + num2;
const poorUser = {
    name: "sakib",
    balance: 0,
    addBalance(balance) {
        return `My balance is ${this.balance + balance}`;
    },
};
const arr = [1, 2, 3, 5];
const newArr = arr.map((elem) => elem * elem);
