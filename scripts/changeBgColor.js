

//Define Array of colors
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#800080', '#ffa500']; 
let colorIndex = 0;

document.getElementById('theme-btn').addEventListener('click', 
function(event)
{
    //alert("Theme Changed Successfully");
    //event.preventDefault();
     // lets Change background color
    document.body.style.backgroundColor = colors[colorIndex];

    colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
    
})
