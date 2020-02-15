setTimeout(() => {
    console.log("Testing phase.")
}, 7000);

let time = 0
setInterval(() => {
    if (time <=5)
    {console.log("its done again")}

    clearInterval(time)
}, 3000);