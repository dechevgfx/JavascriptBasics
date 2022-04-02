//while 8
function graduation(input) {
    let index = 0;
    let name = input[index];
    index++

    let i = 1;

    let counterBadGrades = 0;
    let sumGrade = 0;

    let isExcluded = false;
    while (i <= 12) {
        let tempGrade = Number(input[index]);
        index++;

        if (tempGrade < 4) {
            counterBadGrades++;
            if (counterBadGrades >= 2) {
                isExcluded = true;
                console.log(`${name} has been excluded at ${i} grade`)
                break;
            }
            continue;
        }
        sumGrade += tempGrade;
        i++;

    }
    if (!isExcluded) {
        let averageGrade = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}