function getInputValuebyID(id)
{

    const value = document.getElementById(id).value;
    return parseInt(value);

    //return document.getElementById(id).value;
}

function setInputValuebyIDandValue(id, newValue)
{

    document.getElementById(id).value = newValue;

    
}


function getInnerTextbyID(id) 
{
    const value = document.getElementById(id).innerText;
    return parseFloat(value);
}

function setInnerTextbyIDandValue(id, value)
{
    document.getElementById(id).innerText = value;
}

function addParagraphToDiv(id, text)
{
    const divElement = document.getElementById(id);
    const p = document.createElement('p');
    p.innerText = text;
    document.getElementById(id).appendChild(p);
}

function removeElementByDivID(id)
{
    const element = document.getElementById(id);
    element.remove();
    if (element) {
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
      } else 
      {
        alert("Log Element not found");
      }
}

//Update activity log with task completion time
function compltedTaskActions(taskName, time)
{
    let amount = getInnerTextbyID('total-tasks');
    amount = amount - 1;
         
    setInnerTextbyIDandValue('total-tasks', amount);
        
         
         
    let score = getInputValuebyID('total-score');
    console.log(score); 
    score = score + 1;
    setInputValuebyIDandValue('total-score', score);
        
    logMessage = "You have completed task: " + " " + taskName + " at " + time;
    addParagraphToDiv('task-log', logMessage);
    if(amount === 0)
    {
        alert("All Board Tasks Completed");
    }       
        
}


function changeTheme(id)
{
  const button = document.getElementById('colorButton');
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#800080', '#ffa500']; // Array of colors
  let colorIndex = 0;
}