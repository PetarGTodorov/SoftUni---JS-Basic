function fishTank(input) {
  let a = Number(input[0]);
  let b = Number(input[1]);
  let c = Number(input[2]);
  let percentage = Number(input[3]);
  let aInDc = a / 10;
  let bInDc = b / 10;
  let cInDc = c / 10;
  let realPercentage = percentage / 100;
  let totalTank = aInDc * bInDc * cInDc;
  let litters = totalTank * (1 - realPercentage);
  console.log(litters);
}
fishTank(["85 ", "75 ", "47 ", "17 "]);
