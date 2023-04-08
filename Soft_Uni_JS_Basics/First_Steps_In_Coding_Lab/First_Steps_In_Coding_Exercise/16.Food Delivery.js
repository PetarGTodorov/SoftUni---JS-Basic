function foodDelivery(input){

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegiMenu = Number(input[2]);
    const delivery = 2.5 ;
    let totalMenuPrice = (chickenMenu * 10.35 + fishMenu * 12.4 + vegiMenu * 8.15) ;
    let desertPrice = 0.2 * totalMenuPrice ;
    let totalPrice = delivery + totalMenuPrice + desertPrice ;
    console.log(totalPrice);

}
foodDelivery(["2 ",
"4 ",
"3 "]
)