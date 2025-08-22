import {music} from "./variables.js";
//import music from "./musicControls.js";
/*"window" makes the specified variable, function, code/programming, etcetera, accessible in
a global scale. This is require to have everything interact properly, especially modules, since
they communicate with each other but not with the entire HTML page / website.*/
window.document.addEventListener("DOMContentLoaded", () => {
    let soul_Menu = document.getElementById("soul");
    //console.log(soul_Menu);
    let soul_Position = 1;
    let information = document.getElementById("informationText");
    let battle_Guide = document.getElementById("battleGuideText");
    let music_Text = document.getElementById("musicToggle");
    //let music = document.getElementById("song");
    music_Text.style.color = "#FF0F0F";
    music.muted = sessionStorage.getItem("Music State");
    document.addEventListener("keydown", function(soul) {
        /*if (soul.key === "ArrowDown") {
            soul_Position = soul_Position + 1;
        }
        if (soul.key === "ArrowUp") {
            soul_Position = soul_Position - 1;
        }*/
        switch (soul.key) {
            case "ArrowDown":
                soul_Position += 1;
                break;
            case "ArrowUp":
                soul_Position -= 1;
                break;
        }
        /*if (soul_Position === 0) {
            soul_Menu.style.cssText = "fixed; top: 40vh; right: 55vw;";
        }
        if (soul_Position === 1) {
            soul_Menu.style.cssText = "fixed; top: 43vh; right: 57vw;";
        }
        if (soul_Position === 2) {
            soul_Menu.style.cssText = "fixed; top: 50vh; right: 57vw;";
        }*/
       if (soul_Position < 0) {
        soul_Position = 0;
       }
       if (soul_Position > 2) {
        soul_Position = 2;
       }
        switch (soul_Position) {
            case 0:
                soul_Menu.style.top = "31vh";
                soul_Menu.style.right = "54vw";
                information.style.color = "#FFFFFF";
                battle_Guide.style.color = "#FFFFFF";
                break;
            case 1:
                soul_Menu.style.top = "43vh";
                soul_Menu.style.right = "57vw";
                information.style.color = "#FFFF00";
                battle_Guide.style.color = "#FFFFFF";
                break;
            case 2:
                soul_Menu.style.top = "70.55vh";
                soul_Menu.style.right = "57vw";
                information.style.color = "#FFFFFF";
                battle_Guide.style.color = "#FFFF00";
                break;
        }
        if (soul.key === "Enter" && soul_Position === 0) {
            music.muted = !music.muted;
        }
        else if (soul.key === "Enter" && soul_Position === 1) {
            window.location.assign("Deltarune_Wiki_Website/Pages/Information/information.html");
        }
        else if (soul.key === "Enter" && soul_Position === 2) {
            window.location.assign("Deltarune_Wiki_Website/Pages/chapterSelect.html");
        }
        if (music.muted) {
            music_Text.style.color = "#FF0F0F";
        }
        else if (!music.muted) {
            music_Text.style.color = "#0FFF0F";
        }
    });

});

