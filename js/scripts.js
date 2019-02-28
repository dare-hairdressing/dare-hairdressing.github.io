/* Gets current year for footer ----*/
let date = new Date()
let year = date.getFullYear()
document.getElementById('date').innerHTML = (year);
/*---------------------------------*/

let screenWidth = window.innerWidth;
let clicks = 0;

function decide(x) {
    if (clicks === 0) {
        document.getElementById("nav").style.visibility = "visible";
        document.getElementById("nav").style.opacity = "1";
        document.getElementById("nav").style.zIndex = "5";
        document.getElementById("bar1").style.border = "none";
        document.getElementById("bar3").style.border = "none";
        x.classList.toggle("change");
        clicks = 1;
    }

    else if (clicks === 1) {
        document.getElementById("nav").style.visibility = "hidden";
        document.getElementById("nav").style.opacity = "0";
        document.getElementById("nav").style.zIndex = "1";
        document.getElementById("bar1").style.border = "1px solid black";
        document.getElementById("bar3").style.border = "1px solid black";
        x.classList.toggle("change");
        clicks = 0;
    }
}

function video_sound() {
    let v = document.getElementById("home_video");
    let i  = document.getElementById("video_icon");

    if(v.muted) {
        v.muted = false;
        i.src = "../img/icons/sound.png";
    } else if (!v.muted) {
        v.muted = true;
        i.src = "../img/icons/mute.png";
    }
}

function video_play_pause() {
    let v = document.getElementById("home_video");
    if(!v.paused && !v.ended) {
        v.pause();
    } else {
        v.play();
    }
}