setTimeout(() => {
    console.log("Testing phase.")
}, 7000);

let time = 0
setInterval(() => {

    time+=2

    if (time <=5)
    {console.log( time + "seconds has passed")}
    else{

    clearInterval() }
}, 3000);

