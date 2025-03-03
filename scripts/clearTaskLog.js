document.getElementById('clear-history').addEventListener('click', 
    function(event)
    {
      event.preventDefault();
      removeElementByDivID('task-log');

    })