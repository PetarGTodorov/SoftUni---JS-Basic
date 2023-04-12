function smallShop(input) {
  let product = input[0];
  let city = input[1];
  let numbers = Number(input[2]);

  switch (city) {
    case "Sofia":
      switch (product) {
        case "coffee":
          console.log(numbers * 0.5);
          break;
        case "water":
          console.log(numbers * 0.8);
          break;
        case "beer":
          console.log(numbers * 1.2);
          break;
        case "sweets":
          console.log(numbers * 1.45);
          break;
        case "peanuts":
          console.log(numbers * 1.6);
          break;
      }
      break;
    case "Plovdiv":
      switch (product) {
        case "coffee":
          console.log(numbers * 0.4);
          break;
        case "water":
          console.log(numbers * 0.7);
          break;
        case "beer":
          console.log(numbers * 1.15);
          break;
        case "sweets":
          console.log(numbers * 1.3);
          break;
        case "peanuts":
          console.log(numbers * 1.5);
          break;
      }
      break;
    case "Varna":
      switch (product) {
        case "coffee":
          console.log(numbers * 0.45);
          break;
        case "water":
          console.log(numbers * 0.7);
          break;
        case "beer":
          console.log(numbers * 1.1);
          break;
        case "sweets":
          console.log(numbers * 1.35);
          break;
        case "peanuts":
          console.log(numbers * 1.55);
          break;
      }
      break;
  }
}
