//oscar
function oscar(input){

    let index = 0;
    let nameAct = input[index];
    index++;
    let points = Number(input[index]);
    index++
    let juryCount = Number(input[index]);
    index++
    let nominee = false;

    for(let i = 0; i < juryCount; i++){
        let name = input[index];
        index++
        let tempPoint = Number(input[index]);
        index++

        points += name.length * tempPoint / 2;
        if(points > 1250){
            console.log(`Congratulations, ${nameAct} got a nominee for leading role with ${points.toFixed(1)}!`);
            nominee = true;
            break;
        }
        }
        let neededPoints = 1250.5 - points;
        if(!nominee){
            console.log(`Sorry, ${nameAct} you need ${neededPoints.toFixed(1)} more!`)
    }

}