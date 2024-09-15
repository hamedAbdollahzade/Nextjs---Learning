function outerFunction() {
  // زمانی ک میخوایم متغییری از بیرون نشه تغییرش داد و محدود بشه به فانکش مربوطه
  // میایم این شکلی داخل یک فانکشن دیگه رپش میکنیم و دیگه نمیشه از بیرون تغییرش بدیم
  let outerVariable = "Hello from outer";

  return function innerFunction() {
    console.log(outerVariable);
  };
}

let myFunction = outerFunction();

myFunction(); // "Hello from outer"
