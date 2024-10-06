document.addEventListener("DOMContentLoaded", function(){
    const divResult=document.getElementById("data");
    const storedValue=localStorage.getItem("userInput");

    divResult.textContent=storedValue;
});