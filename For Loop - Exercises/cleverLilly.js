function lili(input){

    let age = Number(input[0]);
    let washMachine = Number(input[1]);
    let priceOfToy = Number(input[2]);

    let toyCount = 0;
    let currentMoney = 10;
    let income = 0;

    for(let i = 1; i <= age; i++){
        if(i % 2 === 0){
            income += currentMoney;
            currentMoney += 10;
            income -= 1;

        }else{
            toyCount++;
        }
    }
let totalMoney = toyCount * priceOfToy + income;
let diff = Math.abs(washMachine - totalMoney);

if(totalMoney >= washMachine){
    console.log(`Yes! ${diff.toFixed(2)}`);
}else{
    console.log(`No! ${diff.toFixed(2)}`);
}
}
    lili(['10', '170.00', '6']);

