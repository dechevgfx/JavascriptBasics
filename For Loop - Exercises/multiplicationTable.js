function multiplicationNums(input){
    let n = Number(input[0]);
    
    for(i = 1; i <= 10; i++){
        let res = i * n;
        console.log(`${i} * ${n} = ${res}`);
    }
}
multiplicationNums(["1"])