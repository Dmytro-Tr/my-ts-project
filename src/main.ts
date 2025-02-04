// import "./style.css";

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(add(1, 2));

// function foo(num: number, str: string, bool: true, empty: null) {
//   // Some logic
// }
// function fooo(num = 10, str = "Some string", bool = true, empty = null) {
//   // Some logic
// }
// let user: { name: string; age: number } = {
//   age: 30,
// };
// let userNameLikeNumber: { name: string; age: number } = {
//   name: 10,
//   age: 30,
// };
// export {};

// interface User {
//   name: string;
//   age: number;
// }
// let user: User = {
//   name: "Tom",
//   age: 30,
// };
// let userJack: User = {
//   name: "Jack",
//   age: 25,
// };
// export {};

// let mixed: (number | string)[] = [1, "two"];
// console.log(mixed);

// let userss: {
//   name: string;
//   age: number;
// }[] = [
//   { name: "Tom", age: 30 },
//   { name: "Jack", age: 25 },
//   { name: "Alice", age: 32 },
// ];
// console.log(userss);

// type User = {
//   name: string;
//   age: number;
// };

// let users: User[] = [
//   { name: "Tom", age: 30 },
//   { name: "Jack", age: 25 },
//   { name: "Alice", age: 32 },
// ];
// console.log(users);

// let arrAny: any[];

// arrAny = [123, "TEXT", { name: "Tom" }, [1, 2, 3]];

// export {};
// console.log(arrAny);

// let notSure: any = 4;
// notSure = "maybe a string instead";
// notSure = false;
// notSure = {};

// let num: number;

// num = notSure;
// export {};
// console.log(num);

// function fetchUserData(id: string, callback: (data: any) => void): void {
//   // Тут може бути якийсь запит, але ми його заповнимо самі
//   const responseData = { name: "Tom" };

//   callback(responseData);
// }

// // Використання функції:
// fetchUserData("123", (data) => {
//   console.log(data.name); // TypeScript не викличе помилку, навіть якщо поле name не існує
// });

// export {};

// let notSure: unknown = 4;
// notSure = "maybe a string instead";
// notSure = false;

// let num: number;

// num = notSure;

// export {};
// console.log(num);

// function fetchUserData() {
//   return "Tom";
// }

// let userData: unknown = fetchUserData(); // fetchUserData повертає невідомі дані
// if (typeof userData === "string") {
//   console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
// }

// let date: [number, number, number];
// date = [7, 11, 2023]; // OK
// console.log(date);

// let fixed: [string, number];
// fixed = ["Text", 10];
// fixed.push("Add this text");
// console.log(fixed);

// let tuple: [string, ...number[]];
// tuple = ["hello", 42, 100, 200]; // OK
// console.log(tuple);

// enum Role {
//   ADMIN,
//   USER,
// }

// const person = {
//   role: Role.ADMIN,
// };

// if (person.role === Role.ADMIN) {
//   console.log("Role: ", Role.ADMIN);
// }

// enum Role {
//   ADMIN,
//   USER,
// }

// console.log(Role.ADMIN); // 0
// console.log(Role[Role.ADMIN]); // "ADMIN"

// enum UserStatus {
//   Active = "ACTIVE",
//   Inactive = "INACTIVE",
//   Banned = "BANNED",
// }
// let status: UserStatus = UserStatus.Active;
// console.log(status);

const enum HttpCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
}

const status = HttpCodes.OK;
console.log(status);
