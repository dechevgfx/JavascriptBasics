//tennis rank
function tennis(input){
    let index = 0;
    let countTournaments = Number(input[index]);
    index++;
    let startingPoints = Number(input[index]);
    index++;

    let tempPoints = 0;
     let countW = 0;
    for(let i = 0; i < countTournaments; i++){
        let res = input[index];
        index++;

        switch(res){
            case"W": tempPoints += 2000;
            countW ++;
            break;
            case "F": tempPoints += 1200; 
            break;
            case "SF": tempPoints += 720; 
            break;
        }
    }
    let finalPoints = startingPoints + tempPoints;
    let avgPoints = tempPoints / countTournaments;
    let winning = countW / countTournaments * 100;

    console.log(`Final points: ${Math.floor(finalPoints)}`);
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    console.log(`${winning.toFixed(2)}%`);

}
tennis(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
