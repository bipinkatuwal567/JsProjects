let progress = document.getElementById("playing--btn");
let control = document.getElementById("control");
let song = document.getElementById("song");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}


function playPause(){
    if(control.classList.contains("fa-pause")){
        song.pause();
        control.classList.remove("fa-pause");
        control.classList.add("fa-play");
    }
    else{
        song.play();
        control.classList.remove("fa-play");
        control.classList.add("fa-pause");
    }

    if(song.play){
        setInterval(()=>{
            progress.value = song.currentTime;
        }, 1000)
    }

    progress.onchange = function() {
        song.play();
        song.currentTime = progress.value;
        control.classList.remove("fa-play");
        control.classList.add("fa-pause");
    }
}





