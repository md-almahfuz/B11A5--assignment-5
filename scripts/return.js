
// This script is used to return to the main page when the return button is clicked

document.getElementById("return-btn").addEventListener("click", function(event)
{
    
    event.preventDefault();
    window.location.href="./index.html";

})