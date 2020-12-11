const saveBtn = document.querySelector("#btn-save");
const amountInput = document.querySelector("#input-amount");
const nameInput = document.querySelector("#input-name");
const numInput = document.querySelector("#input-number");


saveBtn.addEventListener('click', ()=>{
    var enteredAmount = amountInput.value;
    var name = nameInput.value;
    var number = numInput.value;

    localStorage.setItem("allocated_hours", enteredAmount);
    localStorage.setItem("half_allocated_hours", enteredAmount/2)
    localStorage.setItem("real_name",name);
    localStorage.setItem("phone_num",number);
});