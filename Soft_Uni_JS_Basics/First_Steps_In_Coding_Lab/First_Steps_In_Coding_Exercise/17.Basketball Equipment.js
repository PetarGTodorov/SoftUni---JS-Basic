function basketballEquipment(input){

    let priceForOneYear = Number(input[0]) ;
    let shoes = priceForOneYear * 0.6 ;
    let clothes = shoes * 0.8 ;
    let ball = clothes / 4 ;
    let addOn = ball / 5 ;
    let totalSum = priceForOneYear + shoes + clothes + ball + addOn ;
    console.log(totalSum)

}
basketballEquipment(["365 "])