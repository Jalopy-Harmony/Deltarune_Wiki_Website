document.addEventListener("DOMContentLoaded", () => {
    let soul_Menu = document.getElementById("soul");
    let soul_Position = 0;
    let goBack_Text = document.getElementById("goBack");
    goBack_Text.style.color = "#FF0F0F";
    document.addEventListener("keydown", function(soul) {
        switch (soul.key) {
            case "ArrowDown":
                soul_Position += 1;
                break;
            case "ArrowUp":
                soul_Position -= 1;
        }
        if (soul_Position < 0) {
            soul_Position = 0;
        }
        if (soul_Position > 2) {
            soul_Position = 2;
        }
        switch (soul_Position) {
            case 0:
                soul_Menu.style.top = "0vh";
                soul_Menu.style.left = "45vw";
                goBack_Text.style.color = "#FF0F0F";
                break;
            case 1:
                soul_Menu.style.top = "67vh";
                soul_Menu.style.left = "18vw";
                goBack_Text.style.color = "#FFFF00";
                break;
            case 2:
                soul_Menu.style.top = "90vh";
                soul_Menu.style.left = "18vw";
                goBack_Text.style.color = "#FFFF00";
                break;
        }
        if (soul.key === "Enter" && soul_Position === 0) {
            window.location.assign("../../titleScreen.html");
        }
        if (soul.key === "Enter" && soul_Position === 1) {
            window.location.assign("https://undertale.com/");
        }
        if (soul.key === "Enter" && soul_Position === 2) {
            window.location.assign("https://deltarune.com/");
        }
    });
});