document.getElementById('card4-btn').addEventListener('click', 
function(event)
{
  event.preventDefault();

  alert("Board Updated Successfully");
  this.classList.add('opacity-50');
  this.disabled = true;
  this.blur();

  const cardTitle = document.getElementById('card-title-1').innerText;
 // const cardTitle = getInnerTextbyID(id)
 // alert(cardTitle);
 const currentTime = getCurrentTime();
 compltedTaskActions(cardTitle, currentTime);

})

document.getElementById('card5-btn').addEventListener('click', 
  function(event)
  {
    event.preventDefault();
  
    alert("Board Updated Successfully");
    this.classList.add('opacity-50');
    this.disabled = true;
    this.blur();

    const cardTitle = document.getElementById('card-title-2').innerText;
    const currentTime = getCurrentTime();
    compltedTaskActions(cardTitle, currentTime);
  
  })


document.getElementById('card6-btn').addEventListener('click', 
    function(event)
    {
      event.preventDefault();
    
      alert("Board Updated Successfully");
      this.classList.add('opacity-50');
      this.disabled = true;
      this.blur();
      const cardTitle = document.getElementById('card-title-3').innerText;

      const currentTime = getCurrentTime();
      compltedTaskActions(cardTitle, currentTime);
    
    })

document.getElementById('card7-btn').addEventListener('click', 
      function(event)
      {
        event.preventDefault();
      
        alert("Board Updated Successfully");
        this.classList.add('opacity-50');
        this.disabled = true;
        this.blur();

        const cardTitle = document.getElementById('card-title-4').innerText;
        const currentTime = getCurrentTime();
        compltedTaskActions(cardTitle, currentTime);
      
      })

document.getElementById('card8-btn').addEventListener('click', 
        function(event)
        {
          event.preventDefault();
        
          alert("Board Updated Successfully");
          this.classList.add('opacity-50');
          this.disabled = true;
          this.blur();
          const cardTitle = document.getElementById('card-title-5').innerText;
          const currentTime = getCurrentTime();
        compltedTaskActions(cardTitle, currentTime);
        
        })

document.getElementById('card9-btn').addEventListener('click', 
          function(event)
          {
            event.preventDefault();
          
            alert("Board Updated Successfully");
            this.classList.add('opacity-50');
            this.disabled = true;
            this.blur();
            const cardTitle = document.getElementById('card-title-6').innerText;
            const currentTime = getCurrentTime();
            compltedTaskActions(cardTitle, currentTime);
          
          })