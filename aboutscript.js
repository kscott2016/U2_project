
let factChoices = document.querySelector('li')

factChoices.addEventListener('click', async () => {
    console.log("CLICKED")

    //if correct
    if(factChoices.classList.contains('correct')){

       
        factChoices.innerHTML="CORRECT"
        factChoices.classList.add('correct-fact')
    }  

    //not correct
    else{

        factChoices.innerHTML="INCORRECT"
        factChoices.classList.add('wrong-fact')

    }

})




