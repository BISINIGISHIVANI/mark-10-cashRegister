var billAmount=document.querySelector("#bill-amount");
var cashGiven=document.querySelector("#cash-given");
var buttonIntial=document.querySelector("#btn-primary");
var message=document.querySelector("#error-message");
var noOfNotes=document.querySelectorAll(".no-of-notes")

var availableNotes=[2000,500,100,20,10,5,1];
buttonIntial.addEventListener("click",function validateBillandCashAmout(){
    hideMessage();
    if (billAmount.value>0){
        if(cashGiven.value>=billAmount.value){
          const amountToBeReturned=cashGiven.value-billAmount.value;
          calculateChange(amountToBeReturned); 
        }else{
            showMessage("Do you wanna wash plates? ");
        }
    }else{
        showMessage("In valid Bill amount");
    }
})
function calculateChange(amountToBeReturned){
for (let i=0;i<availableNotes.length;i++){
    const numberOfNotes=Math.trunc(amountToBeReturned/availableNotes[i]);
    amountToBeReturned=amountToBeReturned%availableNotes[i];
    noOfNotes[i].innerText=numberOfNotes;
}
}

function hideMessage(){
    message.style.display="none";
}
function showMessage(msg){
    message.style.display="block";
    message.innerText=msg;
}
