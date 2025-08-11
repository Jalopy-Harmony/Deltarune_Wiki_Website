document.addEventListener("DOMContentLoaded", () => {
    let soul_Menu = document.getElementById("soul");
    let soul_Position = 1;
    document.addEventListener("keydown", function (soul) {
        switch (soul.key) {
            case "ArrowLeft":
                soul_Position -= 1;
                break;
            case "ArrowRight":
                soul_Position += 1;
        }
        if (soul_Position < 0) {
            soul_Position = 0;
        }
        if (soul_Position > 2) {
            soul_Position = 2;
        }
        switch (soul_Position) {
            case 0:
                soul_Menu.style.top = "6.5vh";
                soul_Menu.style.left = "25.5vw";
                break;
            case 1:
                soul_Menu.style.top = "0vh";
                soul_Menu.style.left = "45vw";
                break;
            case 2:
                soul_Menu.style.top = "6.5vh";
                soul_Menu.style.left = "64vw";
                break;
        }
        if (soul.key === "Enter" && soul_Position === 0) {
            window.location.assign("../../Pages/Enemies/Chapter 1/rudinn.html");
        }
        if (soul.key === "Enter" && soul_Position === 1) {
            window.location.assign("../../Pages/chapterSelect.html");
        }
        if (soul.key === "Enter" && soul_Position === 2) {
            window.location.assign("../../Pages/Enemies/Chapter 1/lancer.html");
        }
    });
});