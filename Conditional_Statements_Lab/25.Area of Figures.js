function areaOfFigures(input) {
  let figureName = input[0];
  if (figureName === "square") {
    let a = Number(input[1]);
    let squareArea = a * a;
    console.log(squareArea.toFixed(3));
  } else if (figureName === "rectangle") {
    let b = Number(input[1]);
    let c = Number(input[2]);
    let rectangleArea = b * c;
    console.log(rectangleArea.toFixed(3));
  } else if (figureName === "circle") {
    let radius = Number(input[1]);
    let circleArea = radius * radius * Math.PI;
    console.log(circleArea.toFixed(3));
  } else {
    let d = Number(input[1]);
    let hd = Number(input[2]);
    let triangleArea = (d * hd) / 2;
    console.log(triangleArea.toFixed(3));
  }
}
