const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
var Total = 0;



confirmBtn.addEventListener('click', ()=>{

    var enteredReason = reasonInput.value;
    var enteredAmount = amountInput.value;
    if(enteredAmount === ''){
        const alert = document.createElement('ion-alert');
        alert.cssClass = 'my-custom-class';
        alert.header = 'Alert';
        alert.subHeader = 'Error';
        alert.message = 'The amount or reason is not filled in.';
        alert.buttons = ['OK'];
      
        document.body.appendChild(alert);
        return alert.present();
    }else if (enteredReason === ''){
        const alert = document.createElement('ion-alert');
        alert.cssClass = 'my-custom-class';
        alert.header = 'Alert';
        alert.subHeader = 'Error';
        alert.message = 'The amount or reason is not filled in.';
        alert.buttons = ['OK'];
      
        document.body.appendChild(alert);
        return alert.present();
        
    }else{
        
        localStorage.setItem("List-item-1", enteredAmount);
        $("ion-list.list").append("<ion-item> <ion-label> you have spent "+ enteredAmount + " hours on " +enteredReason+ "</ion-label></ion-item>");
        
        
    }

    
    Total += Number(enteredAmount);    
    $('div.total-bar').text(Total);

    var hours = localStorage.getItem("allocated_hours");
    if(Total >= hours){
        document.getElementById("bar-color").style.backgroundColor = "red";
        presentAlert();
    }

    var hoursHalf = localStorage.getItem("half_allocated_hours");
    if(Total >= hoursHalf && Total < hours){
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






