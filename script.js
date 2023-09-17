var carButtons = document.querySelectorAll(".car").length;
console.log(carButtons);

for (var i = 0; i < carButtons; i++) {
    document.querySelectorAll(".car")[i].addEventListener("click", function(){
    var cars = this.innerText;
    buttonAnimation(cars)
    playSound(cars)
    });
}

document.addEventListener("keydown", function(e){
    console.log(e);
    buttonAnimation(e.key)
    playSound(e.key)
});
    // console.log(cars);
    function playSound(key){
        switch (key) {
            case "c":
                let challenger = new Audio("sounds/challenger.mp3");
                challenger.play();
                break;
    
            case "p":
                let p911 = new Audio("sounds/911.mp3");
                p911.play();
                break;
    
            case "m":
                let m5 = new Audio("sounds/m5.mp3");
                m5.play();
                break;
    
            case "g":
                let gtr = new Audio("sounds/gtr.mp3");
                gtr.play();
                break;
    
            case "s":
                let supra = new Audio("sounds/supra.mp3");
                supra.play();
                break;
    
            case "w":
                let walker = new Audio("sounds/paulwalker.mp3");
                walker.play();
                break;
    
            default:
                break;
            }
    }

    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);

        activeButton.classList.add("pressed");

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
    }