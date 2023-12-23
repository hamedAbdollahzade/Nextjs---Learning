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
var arr1 = [1, "string", false];
arr1 = [1, "string", false, 2];
var arr2 = [1, 2, "hello"];
var arr3 = [2, 3, 4];
var arr4 = [2, 3, "string"];
var images = [
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
var tup1;
tup1 = ["hamed", 75, true];
var member1 = tup1[0];
console.log(member1.substring(2)); // 'ha med' res => med
//! object
var obj = { name: "jac", age: 16, id: 25 };
console.log(obj.age);
obj.age = 28;
console.log(obj.age);
obj = { name: "hamed", age: "20" };
var user = { name: "jack", age: 25, isVerified: false };
user.age = 26;
user.isVerified = true;
var passenger1 = 0 /* FlightClass.ECONOMY */;
var passengerClass = 1 /* FlightClass.BUSINESS */;
//Unknown  // is not assignable
var var1;
var1 = "hamedAbdollahzade";
var1 = 910405206;
var1 = false;
var var2;
var2 = "hamedAbdollahzade";
var2 = 910405206;
var2 = false;
var s1 = var1; // YES
var s2 = var2; // NO
var int1 = var2; //NO
var1.method();
var2.method();
