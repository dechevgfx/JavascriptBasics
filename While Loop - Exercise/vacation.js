//while exer 3
function vacation(input) {
    let index = 0;
    let needM = input[index];
    index++;

    let money = Number(input[index]);
    index++;

    let totalDay = 0;
    let totalSpendDay = 0;
    let sum = 0;
    while (input[index] !== undefined) {
        let command = input[index]
        switch (command) {
            case "spend":
                index++;
                sum -= Number(input[index]);
                totalSpendDay++;
                break;
            case "save":
                index++;
                sum += Number(input[index]);
                break;
        }
        totalDay++;
        index++
    }
    if (totalSpendDay >= 5) {
        console.log(`You can't save the money.`);
        console.log(`${totalDay}`);
    } else {
        console.log(`You saved the money for ${totalDay} days.`)
    }
}

vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"]);

    2000
    1000
    spend
    1200
    save
    2000