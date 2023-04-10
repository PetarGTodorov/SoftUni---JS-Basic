function godzillaVsKong(input) {
  let movieBudget = Number(input[0]);
  let statist = Number(input[1]);
  let priceForClothing = Number(input[2]);
  let totalPriceForClothing = priceForClothing * statist;
  let decor = movieBudget * 0.1;
  if (statist > 150) {
    totalPriceForClothing = totalPriceForClothing * 0.9;
    if (movieBudget - decor - totalPriceForClothing >= 0) {
      console.log(`Action!`);
      console.log(`Wingard starts filming with ${(movieBudget -decor -totalPriceForClothing).toFixed(2)} leva left.`
      );
    } else {
      console.log(`Not enough money!`);
      console.log(
        `Wingard needs ${(decor + totalPriceForClothing - movieBudget).toFixed(2)} leva more.`
      );
    }
  } else {
    totalPriceForClothing = totalPriceForClothing;
    if (movieBudget - decor - totalPriceForClothing >= 0) {
      console.log(`Action!`);
      console.log(`Wingard starts filming with ${(movieBudget - decor - totalPriceForClothing).toFixed(2)} leva left.`);
    } else {
      console.log(`Not enough money!`);
      console.log(
        `Wingard needs ${(decor + totalPriceForClothing - movieBudget).toFixed(
          2
        )} leva more.`
      );
    }
  }
}
godzillaVsKong(["20000", "120", "55.5"]);
