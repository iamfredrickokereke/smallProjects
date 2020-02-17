setTimeout(() => {
    console.log("Testing phase.")
}, 7000);

let time = 2
let timer = setInterval(() => {

    time+=2

    if (time <=10)
    {console.log( time + " seconds has passed")}
    else{

    clearInterval(timer) }
}, 3000);

