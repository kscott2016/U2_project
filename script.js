const button = document.querySelector('button')
const characterInput = document.querySelector('input')
const imageDiv = document.querySelector('div')

const factDiv = document.getElementsByClassName('new_fact')
let rando = Math.floor(Math.random() * 200);

button.addEventListener('click', async () => {
    console.log(characterInput.value);
    //let breed = breedInput.value
    //let response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
     let response = await axios.get(`https://amiiboapi.com/api/amiibo/`)

    //let response = await axios.get('https://spapi.dev/api/families').then((res) => { axios.get(res.data.data[0].characters[0]).then(res2 => { console.log(res2.data.data.name) }) })
    
    //console.log(response.data)
    let matchQuery = "https://amiiboapi.com/api/amiibo?character="+ characterInput.value

    let matches = await axios.get(matchQuery)
    console.log(matches);

    //let pic = response.data.url
    //let dogPic =  response.data.message
    //let newChar = (response.data[rando]).toString
    //imageDiv.innerHTML = `<img src=${pic} />`
    //factDiv.innerHTML = `${newFact}`
})