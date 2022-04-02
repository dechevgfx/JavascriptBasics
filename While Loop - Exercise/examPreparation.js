//while exer 2
function examPrep(input){
    let index = 0;
    let countNegativeGrade = Number(input[index]);
    index++;

    let problemName = input[index];
    index++;
    let problemGrade = Number(input[index]);

    let average = 0;
    let problemsCount = 0;
    let lastProb = problemName;
    let sumGrade = 0;
    let badGradeCounter = 0;

    while(problemName !== "Enough"){
        
        sumGrade += problemGrade

        if(problemGrade <= 4){
            badGradeCounter++;
        }
        if(badGradeCounter >= countNegativeGrade){
            console.log(`You need a break, ${badGradeCounter} poor grades.`);
            break;
        }
        problemsCount++;

        lastProb = problemName;
        index++
        problemName = input[index];
        index++;
        problemGrade = Number(input[index]);
    }
    if(problemName === "Enough"){
        average = sumGrade / problemsCount;
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount}`);
        console.log(`Last problem: ${lastProb}`);
    }
    
}
examPrep(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
