function sumOfNumbers(num1: number, num2: number): number {
  return num1 + num2;
  // return "hello";
}
let a = sumOfNumbers(2, "2"); // error
let b = sumOfNumbers(2, 3, 4, 5, 6); // error

const sumOfNumbers2 = (num1: number, num2: number): void => {
  // تابع void تابعی ک چیزی بر نمیگردونه
  let x = num1 + num2;

  //   return num1 + num2;
};

// -----------------------------------

const fruits = ["banana", "apple", "orange"];
// const fruits = [1, 2, 3]; //error

fruits.map((fruits: string): string => {
  console.log(fruits);
  return 1;
});

//--------------------------------------

function getFullname(fname: string, lname: string, userType: string = "panel") {
  let a = "a";
  //  اینجا از تو کانفیگ تایپ اسکریپت میتونیم گزینه ای رو فعال کنیم ک گیر بده اگه استفاده نکردیم از پارامتری
  if (userType === "panel") {
    return fname + lname;
  } else {
    return a;
  }
}
// ------------------------------------------
