//while 1
function read(input){

    let index = 0;
    let str = input[index];

    while(true){
        let str = input[index];
        index++;
            if(str === "Stop"){
                break;
            }    console.log(str);
    }
}
read(['Ivan', "tgdfsf", "fggdgdf", "Stop"]);