//? [Number,string,boolean,null,undefind,object,array]
//? [any,unknown,enum,tuple,never]
// let a;
// let b = 10;
// let c = "hello";
// let d: string;
// let f: boolean;
// let g: string = "bye";
// ---------------------------------------

//! NaN (error in typeScript)
// console.log(4 - "hello");

//! Infinity (not error in typeScript)
// console.log(2 / 0);
// console.log(-2 / 0);

//! Any
// let n1: any;
// n1 = "hello";
// n1 = 25;
// n1 = false;
// let a1;  ==> (type is any )

//! Arrays
let arr1 = [1, "string", false];
arr1 = [1, "string", false, 2];
let arr2: number[] = [1, 2, "hello"];
let arr3: Array<number> = [2, 3, 4];
let arr4: Array<any> = [2, 3, "string"];
let images: number[][] = [
  [255, 255, 255],
  [250, 14, 15],
];
arr1.push("string");
arr1.push(85);
arr1.push(false);
arr2.push("string");
console.log(arr1[1]);
console.log(arr1);

//! tuples  // not array ! is tuple
let tup1: [string, number, boolean];
tup1 = ["hamed", 75, true];
let member1 = tup1[0];
console.log(member1.substring(2)); // 'ha med' res => med

//! object
let obj = { name: "jac", age: 16, id: 25 };
console.log(obj.age);
obj.age = 28;
console.log(obj.age);
obj = { name: "hamed", age: "20" };

let user: {
  name: string;
  age: number;
  isVerified: boolean;
} = { name: "jack", age: 25, isVerified: false };
user.age = 26;
user.isVerified = true;

//!  Enum
// const economy = 0;
// const business = 1;
// const first = 2;

const enum FlightClass {
  ECONOMY,
  BUSINESS,
  FIRST,
}

const passenger1 = FlightClass.ECONOMY;

let passengerClass: FlightClass = FlightClass.BUSINESS;

//Unknown  // is not assignable

let var1: any;
var1 = "hamedAbdollahzade";
var1 = 910405206;
var1 = false;

let var2: unknown;
var2 = "hamedAbdollahzade";
var2 = 910405206;
var2 = false;

let s1: string = var1; // YES
let s2: string = var2; // NO
let int1: number = var2; //NO

var1.method();
var2.method();
