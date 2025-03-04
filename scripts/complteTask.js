document.getElementById('card-btn-4').addEventListener('click', 
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

document.getElementById('card-btn-5').addEventListener('click', 
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


document.getElementById('card-btn-6').addEventListener('click', 
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

document.getElementById('card-btn-7').addEventListener('click', 
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

document.getElementById('card-btn-8').addEventListener('click', 
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

document.getElementById('card-btn-9').addEventListener('click',
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
          