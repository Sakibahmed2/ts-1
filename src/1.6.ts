// Function type

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// add(1, true);

const addArrow = (num1: number, num2: number): number => num1 + num2;

const poorUser = {
  name: "sakib",
  balance: 0,
  addBalance(balance: number): string {
    return `My balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 2, 3, 5];

const newArr: number[] = arr.map((elem: number): number => elem * elem);
