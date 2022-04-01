function sumOfNums(input){
    let num = input[0];
    let sum = 0;
    let numL = num.length;

    for (let i = 0; i < numL; i++){
        sum += Number(num[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumOfNums(["123456777"])