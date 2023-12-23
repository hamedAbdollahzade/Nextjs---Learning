//! intersection

// type z = string | number;

type colorFul = {
  // رنگ
  color: string;
};

type circle = {
  // شعاع دایره
  radius: number;
};

type colorFulCircle = circle & colorFul;

// for example :
function draw(circle: colorFulCircle) {
  console.log(`Color Is ${circle.color}`);
  console.log(`Color Is ${circle.radius}`);
}

draw({ color: "red", radius: 25 });
