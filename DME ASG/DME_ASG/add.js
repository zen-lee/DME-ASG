const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");

var Total = 0;
var reasonInputs = [];
var amountInputs = [];
var x = -1;


confirmBtn.addEventListener('click', () => {

    var enteredReason = reasonInput.value;
    var enteredAmount = amountInput.value;
    x++;


    if (enteredAmount === '') {
        const alert = document.createElement('ion-alert');
        alert.cssClass = 'my-custom-class';
        alert.header = 'Alert';
        alert.subHeader = 'Error';
        alert.message = 'The amount or reason is not filled in.';
        alert.buttons = ['OK'];

        document.body.appendChild(alert);
        return alert.present();
    } else if (enteredReason === '') {
        const alert = document.createElement('ion-alert');
        alert.cssClass = 'my-custom-class';
        alert.header = 'Alert';
        alert.subHeader = 'Error';
        alert.message = 'The amount or reason is not filled in.';
        alert.buttons = ['OK'];

        document.body.appendChild(alert);
        return alert.present();

    } else {

        reasonInputs.push(enteredReason);
        localStorage.setItem('myArray', JSON.stringify(reasonInputs));

        var array = localStorage.getItem('myArray');

        reasonInputs = JSON.parse(array);
        console.log(reasonInputs)

        amountInputs.push(enteredAmount);
        localStorage.setItem('myArray2', JSON.stringify(amountInputs));

        var array = localStorage.getItem('myArray2');
        var gameName = localStorage.getItem('myArray')

        amountInputs = JSON.parse(array);
        gameInputs = JSON.parse(gameName);

        console.log(amountInputs)
        $("ion-list.list").append("<ion-button id = edit fill = 'empty'> <ion-label> you have spent " + amountInputs[x] + " hours on " + gameInputs[x] + "</ion-label></ion-button>");

        

    }





    Total += Number(enteredAmount);
    $('div.total-bar').text(Total);

    var hours = localStorage.getItem("allocated_hours");
    if (Total >= hours) {
        document.getElementById("bar-color").style.backgroundColor = "red";
        presentAlert();
    }

    var hoursHalf = localStorage.getItem("half_allocated_hours");
    if (Total >= hoursHalf && Total < hours) {
        document.getElementById("bar-color").style.backgroundColor = "orange";
        presentAlert2();
    }



});

function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Alert';
    alert.subHeader = 'Warning';
    alert.message = 'You have surpassed the amount of allocated hours for today';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
}

function presentAlert2() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Alert';
    alert.subHeader = 'Warning';
    alert.message = 'You are halfway to the amount of allocated hours for today';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
}

function onstart() {

    var Arr1 = localStorage.getItem("myArray")
    var Arr2 = localStorage.getItem("myArray2")

    gameArr = JSON.parse(Arr1);
    timeArr = JSON.parse(Arr2);

    if ($("ion-list.list") == "" || localStorage.getItem("myArray") == "" || localStorage.getItem("myArray2") == "") {
        console.log("nothing to add")
    }
    else {
        var i;
        for (i = 0; i < gameArr.length; i++) {
            $("ion-list.list").append("<ion-button id = edit fill = 'empty'> <ion-label> you have spent " + timeArr[i] + " hours on " + gameArr[i] + "</ion-label></ion-button>");
        }
        console.log(amountInputs)

        const editBtn = document.querySelector("#edit");
        editBtn.addEventListener('click', () => {
            window.location.href = "editlist.html";
        })
        
    }

}








