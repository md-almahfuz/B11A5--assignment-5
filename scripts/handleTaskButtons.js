


// Handle Task Button Events

const cardButtons = document.getElementsByClassName('card-btn');
  
    for (let i = 0; i < cardButtons.length; i++) 
    {
      cardButtons[i].addEventListener("click", function(event) {
        // 'this' refers to the clicked button element within the event handler.
        alert("Board Updated Successfully");
        this.classList.add('opacity-50');
        this.disabled = true;
        this.blur();
        
        //Lets name the clicked button as clickedButton
        const clickedButton = this;


        //Get the card ID
        const cardId = event.target.id;

        console.log(cardId);

        //get the card number
        const match = cardId.match(/\d+/);


        //Get the card title from card number

        let cardTitle = "card-title-" + match;

        const cardTitleData = document.getElementById(cardTitle).innerText;
        // const cardTitle = getInnerTextbyID(id)
        // alert(cardTitle);
        const currentTime = getCurrentTime();
        compltedTaskActions(cardTitleData, currentTime);
        
      });
    }
