function sumOfNumbers(num1, num2) {
    return num1 + num2;
    // return "hello";
}
var a = sumOfNumbers(2, "2"); // error
var b = sumOfNumbers(2, 3, 4, 5, 6); // error
var sumOfNumbers2 = function (num1, num2) {
    // تابع void تابعی ک چیزی بر نمیگردونه
    var x = num1 + num2;
    //   return num1 + num2;
};
// -----------------------------------
var fruits = ["banana", "apple", "orange"];
// const fruits = [1, 2, 3]; //error
fruits.map(function (fruits) {
    console.log(fruits);
    return 1;
});
//--------------------------------------
function getFullname(fname, lname, userType) {
    if (userType === void 0) { userType = "panel"; }
    var a = "a";
    //  اینجا از تو کانفیگ تایپ اسکریپت میتونیم گزینه ای رو فعال کنیم ک گیر بده اگه استفاده نکردیم از پارامتری
    if (userType === "panel") {
        return fname + lname;
    }
    else {
        return a;
    }
}
// ------------------------------------------
