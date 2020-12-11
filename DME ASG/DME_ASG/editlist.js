const deleteBtn = document.querySelector("#btn-del");
const saveBtn = document.querySelector("#btn-save");
const gameInput = document.querySelector(".gaming");
const timeInput = document.querySelector(".hours");

var enteredGame = [];
var timeHour = [];

 saveBtn.addEventListener('click', ()=>{
    var enteredGames = gameInput.value;
    var timeHours = timeInput.value;

    enteredGame.push(enteredGames);
    localStorage.setItem('myArray', JSON.stringify(enteredGame));

    timeHour.push(timeHours);
    localStorage.setItem('myArray2', JSON.stringify(timeHour));
    

});

function remove() {
    localStorage.removeItem("myArray");
    localStorage.removeItem("myArray2");
}

function load() {
    var game = localStorage.getItem("myArray");
    var time = localStorage.getItem("myArray2");
    game2 = JSON.parse(game);
    time2 = JSON.parse(time);
    $('ion-input.gaming').attr('placeholder',game2);
    $('ion-input.hours').attr('placeholder',time2);
    console.log(game);
    console.log(time);
    
}