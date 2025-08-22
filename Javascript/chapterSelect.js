document.addEventListener("DOMContentLoaded", () => {
    let soul_Menu = document.getElementById("soul");
    let soul_Position = 0;
    let chapter1_Text = document.getElementById("chapter1");
    let chapter2_Text = document.getElementById("chapter2");
    let chapter3_Text = document.getElementById("chapter3");
    let chapter4_Text = document.getElementById("chapter4");
    let chapter5_Text = document.getElementById("chapter5");
    let chapter6_Text = document.getElementById("chapter6");
    let chapter7_Text = document.getElementById("chapter7");
    let goBack_Text = document.getElementById("goBack");
    chapter1_Text.style.color = "#FFFF00";
    document.addEventListener("keydown", function(soul) {
        switch (soul.key) {
            case "ArrowDown":
                soul_Position += 1;
                break;
            case "ArrowUp":
                soul_Position -= 1;
                break;
        }
        if (soul_Position < 0) {
            soul_Position = 0;
        }
        if (soul_Position > 7) {
            soul_Position = 7;
        }
        switch (soul_Position) {
            case 0:
                soul_Menu.style.top = "25.5vh";
                soul_Menu.style.right = "53.5vw";
                chapter1_Text.style.color = "#FFFF00";
                chapter2_Text.style.color = "#FFFFFF";
                chapter3_Text.style.color = "#FFFFFF";
                chapter4_Text.style.color = "#FFFFFF";
                chapter5_Text.style.color = "#777777";
                chapter6_Text.style.color = "#777777";
                chapter7_Text.style.color = "#777777";
                goBack_Text.style.color = "#FFFF00";
                break;
            case 1:
                soul_Menu.style.top = "31.5vh";
                soul_Menu.style.right = "53.5vw";
                chapter1_Text.style.color = "#FFFFFF";
                chapter2_Text.style.color = "#FFFF00";
                chapter3_Text.style.color = "#FFFFFF";
                chapter4_Text.style.color = "#FFFFFF";
                chapter5_Text.style.color = "#777777";
                chapter6_Text.style.color = "#777777";
                chapter7_Text.style.color = "#777777";
                goBack_Text.style.color = "#FFFF00";
                break;
            case 2:
                soul_Menu.style.top = "38vh";
                soul_Menu.style.right = "53.5vw";
                chapter1_Text.style.color = "#FFFFFF";
                chapter2_Text.style.color = "#FFFFFF";
                chapter3_Text.style.color = "#FFFF00";
                chapter4_Text.style.color = "#FFFFFF";
                chapter5_Text.style.color = "#777777";
                chapter6_Text.style.color = "#777777";
                chapter7_Text.style.color = "#777777";
                goBack_Text.style.color = "#FFFF00";
                break;
            case 3:
                soul_Menu.style.top = "44vh";
                soul_Menu.style.right = "53.5vw";
                chapter1_Text.style.color = "#FFFFFF";
                chapter2_Text.style.color = "#FFFFFF";
                chapter3_Text.style.color = "#FFFFFF";
                chapter4_Text.style.color = "#FFFF00";
                chapter5_Text.style.color = "#777777";
                chapter6_Text.style.color = "#777777";
                chapter7_Text.style.color = "#777777";
                goBack_Text.style.color = "#FFFF00";
                break;
            case 4:
                soul_Menu.style.top = "50vh";
                soul_Menu.style.right = "53.5vw";
                chapter1_Text.style.color = "#FFFFFF";
                chapter2_Text.style.color = "#FFFFFF";
                chapter3_Text.style.color = "#FFFFFF";
                chapter4_Text.style.color = "#FFFFFF";
                chapter5_Text.style.color = "#777777";
                chapter6_Text.style.color = "#777777";
                chapter7_Text.style.color = "#777777";
                goBack_Text.style.color = "#FFFF00";
                break;
            case 5:
                soul_Menu.style.top = "56.5vh";
                soul_Menu.style.right = "53.5vw";
                chapter1_Text.style.color = "#FFFFFF";
                chapter2_Text.style.color = "#FFFFFF";
                chapter3_Text.style.color = "#FFFFFF";
                chapter4_Text.style.color = "#FFFFFF";
                chapter5_Text.style.color = "#777777";
                chapter6_Text.style.color = "#777777";
                chapter7_Text.style.color = "#777777";
                goBack_Text.style.color = "#FFFF00";
                break;
            case 6:
                soul_Menu.style.top = "62.5vh";
                soul_Menu.style.right = "53.5vw";
                chapter1_Text.style.color = "#FFFFFF";
                chapter2_Text.style.color = "#FFFFFF";
                chapter3_Text.style.color = "#FFFFFF";
                chapter4_Text.style.color = "#FFFFFF";
                chapter5_Text.style.color = "#777777";
                chapter6_Text.style.color = "#777777";
                chapter7_Text.style.color = "#777777";
                goBack_Text.style.color = "#FFFF00";
                break;
            case 7:
                soul_Menu.style.top = "74vh";
                soul_Menu.style.right = "52.7vw";
                chapter1_Text.style.color = "#FFFFFF";
                chapter2_Text.style.color = "#FFFFFF";
                chapter3_Text.style.color = "#FFFFFF";
                chapter4_Text.style.color = "#FFFFFF";
                chapter5_Text.style.color = "#777777";
                chapter6_Text.style.color = "#777777";
                chapter7_Text.style.color = "#777777";
                goBack_Text.style.color = "#FF0F0F";
                break;
        }
        if (soul.key === "Enter" && soul_Position === 0) {
            window.location.assign("../Pages/Chapters/chapter1.html");
        }
        else if (soul.key ==="Enter" && soul_Position === 1) {
            window.location.assign("../Pages/Chapters/chapter2.html");
        }
        else if (soul.key === "Enter" && soul_Position === 2) {
            window.location.assign("../Pages/Chapters/chapter3.html");
        }
        else if (soul.key === "Enter" && soul_Position === 3) {
            window.location.assign("../Pages/Chapters/chapter4.html");
        }
        else if (soul.key === "Enter" && soul_Position === 4) {
            window.location.assign("../Pages/Chapters/chapter5.html");
        }
        else if (soul.key === "Enter" && soul_Position === 5) {
            window.location.assign("../Pages/Chapters/chapter6.html");
        }
        else if (soul.key === "Enter" && soul_Position === 6) {
            window.location.assign("../Pages/Chapters/chapter7.html");
        }
        else if (soul.key === "Enter" && soul_Position === 7) {
            window.location.assign("../index.html");
        }
    });
});
