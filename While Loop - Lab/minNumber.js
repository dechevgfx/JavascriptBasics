//while 7
function minNum(input) {
    let command = input[0];
    let index = 1;
    let minN = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop"){
        let num = Number(command);

        if (num < minN){
            minN = num;
        }
        command = input[index];
        index++;
    }
    console.log(minN);
}
minNum(['100',
    '99',
    '80',
    '70',
    'Stop']);