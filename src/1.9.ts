{
  //

  type Student = {
    name: string;
    age: number;
    contactNo?: string;
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "sakib",
    age: 19,
    contactNo: "12234",
    gender: "male",
    address: "syl",
  };

  const student2: Student = {
    name: "Jhon",
    age: 49,
    gender: "male",
    address: "new york",
  };

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;

  //
}
