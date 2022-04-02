//while exer 4
function steps(input){
    let index = 0;
    let target = 10000;
    let command = input[index];
    index++;

    let stepsTotal = 0;
    while(command !== "Going home"){
        let steps = Number(command);
        stepsTotal += steps;

        if(stepsTotal >= target){
            let diff = Math.abs(stepsTotal - target);
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
            break;
        }
        command = input[index];
        index++;
    } if(command === "Going home"){
        let steps = Number(input[index]);
        index++;
        stepsTotal += steps;

        let diff = Math.abs(stepsTotal - target);
        if(stepsTotal >= target){
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
        } else{
            console.log(`${diff} more steps to reach goal.`);
        }
    }
}