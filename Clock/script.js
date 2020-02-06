setInterval(function(){
    
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    let period = "PM";

    if (hours >= 12 ){
        period = "PM"
    }
    if(hours > 12){
        hours = hours - 12;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        seconds = "0" + seconds;
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + ":" + period;

    // console.log(time)
    var talk = document.querySelector('.time');
    //   console.log(talk)
    talk.innerText = time.getDate();

     // console.log(time)

}, 5000);