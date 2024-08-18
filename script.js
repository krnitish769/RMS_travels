let menuButton = document.querySelector("#menuButton");
let menu = document.querySelector("#menu");

//Normal Functions
function changeButtonClass(){
    menuButton.classList.remove()
}

// Event Functions
let menuButtonClick = () => {
    if(menuButton.classList.contains("menuButton")){
        menuButton.classList.toggle("menuButtonOnClick");
        menu.classList.toggle("menuOnClick");
    }else{
        menuButton.classList.toggle("menuButton");
        menu.classList.toggle("menu");
    }
}

// Event Listeners
menuButton.addEventListener("onclick", menuButtonClick);