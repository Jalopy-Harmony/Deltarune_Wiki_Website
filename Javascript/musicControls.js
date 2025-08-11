import {music} from "./variables.js";
window.document.addEventListener("DOMContentLoaded", () => {
    music.muted = sessionStorage.getItem("Music State");
});
function toggleMusic() {
music.muted = !music.muted;
switch (music.muted) {
    case false:
        sessionStorage.setItem("Music State", "false");
        break;
    case true:
        sessionStorage.setItem("Music State", "true");
        break;
    }
}

//window.musicToggle = toggleMusic();