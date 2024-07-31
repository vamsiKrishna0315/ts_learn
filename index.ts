function greet(name : string) {
    console.log('Hello ' + name)
}

// greet("Vamsi");

let age: number = 28;
// console.log(age);

let isActive: boolean = true;
// console.log(isActive);

let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<String> = ['Vamsi', 'Karthik', 'Rishitha'];

// console.log(names)

let person: [string, number, boolean] = ['Vamsi', 28, true];
// console.log(person)

import { Status_Codes } from "./enum";

// console.log(Status_Codes.SUCCESS)

// any 

let notSure: any = 4;
// console.log(notSure , "1");
notSure = 'maybe a string instead';
// console.log(notSure, "2");
notSure = false;
// console.log(notSure, "3");

let unknownValue: unknown = 10;
unknownValue = "Hello";

// console.log(unknownValue);

function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
// console.log(throwError("Something went wrong"))

// Tuples
let x: [string, number];
x = ["hello", 10];
// console.log(x[0]);

import { Person } from "./person";

let vamsi: Person = {
    name: "Vamsi",  
    age: 28,
    greet(name: string) {
    console.log('Hello ' + name);
  }
}
// console.log(vamsi)

// types

import { Point } from "./type";
let point: Point = {y:3,x:1}
// console.log(point)

// union types

function justPrint(x: number | string, y: number | string): string {
    const xStr = typeof x === 'number' ? x.toLocaleString() : x;
    const yStr = typeof y === 'number' ? y.toLocaleString() : y;
    return `${xStr} ${yStr}`;
}

console.log(justPrint(12345, 67890)); // Output: "12,345 67,890"
console.log(justPrint("Hello", 67890)); // Output: "Hello 67,890"
console.log(justPrint(12345, "World")); // Output: "12,345 World"
console.log(justPrint("Hello", "World")); // Output: "Hello World"
git remote add origin https://github.com/vamsiKrishna0315/ts_learn.git
git branch -M learn_ts
git push -u origin learn_ts