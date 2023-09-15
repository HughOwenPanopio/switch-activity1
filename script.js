var carButtons = document.querySelectorAll("button").length;
console.log(carButtons);

for (var i = 0; i < carButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){

    var cars = this.innerText;
    console.log(cars);
    switch (cars) {
        case "challenger":
            let challenger = new Audio("sounds/challenger.mp3");
            challenger.play();
            break;

        case "p911":
            let p911 = new Audio("sounds/911.mp3");
            p911.play();
            break;

        case "m5":
            let m5 = new Audio("sounds/m5.mp3");
            m5.play();
            break;

        case "gtr":
            let gtr = new Audio("sounds/gtr.mp3");
            gtr.play();
            break;

        case "supra":
            let supra = new Audio("sounds/supra.mp3");
            supra.play();
            break;

        case "paul":
            let paul = new Audio("sounds/paulwalker.mp3");
            paul.play();
            break;

        default:
            break;
        }
    });
}