//trecking mania
function treck(input){
    index = 0;
    let countGroups = Number(input[index]);
    index++;
    
    let musala = 0;
    let montblanc = 0;
    let kilimajaro = 0;
    let k2 = 0;
    let everest = 0;
    let total = 0;


    for(let i = 0; i < countGroups; i++){
        let people = Number(input[index]);
        index++;
        total += people;

        if(people <= 5){
            musala += people;
        
        } else if(people >= 6 && people <= 12){
            montblanc += people;

        } else if(people >= 13 && people <= 25){
            kilimajaro += people;
        
        } else if(people >= 26 && people <= 40){
            k2 += people;

        } else {
            everest += people;
        }
    }
            let musalaPr = musala / total * 100;
            let montblancPr = montblanc / total * 100;
            let kilimajaroPr = kilimajaro / total * 100;
            let k2Pr = k2 / total * 100;
            let everestPr = everest / total * 100;

            console.log(musalaPr.toFixed(2) + "%");
            console.log(montblancPr.toFixed(2) + "%");
            console.log(kilimajaroPr.toFixed(2) + "%");
            console.log(k2Pr.toFixed(2) + "%");
            console.log(everestPr.toFixed(2) + "%");

}
treck(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);
