
/*let factChoices = document.querySelector('li')

factChoices.addEventListener('click', async () => {
    console.log("CLICKED")

    //if correct
    if(factChoices.classList.contains('correct')){

        factChoices.innerHTML="CORRECT"
        factChoices.classList.add('correct-fact')
    }  

    else{

        factChoices.innerHTML="INCORRECT"
        factChoices.classList.add('wrong-fact')

    }
})*/

document.querySelectorAll('li').forEach(item =>{
    item.addEventListener('click',async () => {

        //if correct
if(item.classList.contains('correct')){

    item.innerHTML="CORRECT"
    item.classList.add('correct-fact')
}  

else{

    item.innerHTML="INCORRECT"
    item.classList.add('wrong-fact')

}
    })
})







