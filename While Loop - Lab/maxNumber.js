function maxNum(input) {
    let command = input[0];
    let index = 1;
    let maxN = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop"){
        let num = Number(command);

        if (num > maxN){
            maxN = num;
        }
        command = input[index];
        index++;
    }
    console.log(maxN);
}
maxNum(['100',
    '99',
    '80',
    '70',
    'Stop']);