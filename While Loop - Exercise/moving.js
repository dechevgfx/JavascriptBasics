//while exer 7
function moving(input){
    let w = Number(input[0]);
    let l = Number(input[1]);
    let h = Number(input[2]);

    let size = w * l * h;
    let index = 3;
    let command = input[index];

    while (command !== "Done") {
        let boxes = Number(command);
        size -= boxes

        if (size < 0) {
            console.log(`No more free space! You need ${Math.abs(size)} Cubic meters more.`)
            break;
        }
        index++;
        command = input[index];

    }
    if (size >= 0) {
        console.log(`${Math.abs(size)} Cubic meters left.`);
    }

}