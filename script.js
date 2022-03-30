const button = document.querySelector('button')
const characterInput = document.querySelector('input')
const imageDiv = document.querySelector('div')

let rando = Math.floor(Math.random() * 200);

button.addEventListener('click', async () => {
    console.log(characterInput.value);
    //let breed = breedInput.value
    //let response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
     let response = await axios.get(`https://amiiboapi.com/api/amiibo/`)

    //let response = await axios.get('https://spapi.dev/api/families').then((res) => { axios.get(res.data.data[0].characters[0]).then(res2 => { console.log(res2.data.data.name) }) })
    
    //console.log(response.data)
    let matchQueryName = "https://amiiboapi.com/api/amiibo?character="+ characterInput.value

    let matches = await axios.get(matchQueryName)
    console.log(matches);

   // if (matches.data.amiibo.length === 1 ){
        //if there's just one amiibo for the selected character, do this
        let charName = matches.data.amiibo[0].character;
        let refImg = matches.data.amiibo[0].image;
        let gameSeries = matches.data.amiibo[0].gameSeries;
        let amiiboSeries = matches.data.amiibo[0].amiiboSeries;
        
        
        let amiiboType = matches.data.amiibo[0].type;

        //set html elements
        document.querySelector('h2').innerHTML = charName;
        document.getElementById("character-image").src = `${refImg}`
        
        document.querySelector(".amiibo-series").innerHTML= `<span class="descriptor">Amiibo Series:</span> ${amiiboSeries}`;
        document.querySelector(".game-series").innerHTML= `<span class="descriptor">Game Series:</span> ${gameSeries}`;
        document.querySelector(".amiibo-type").innerHTML= `<span class="descriptor">Amiibo Type:</span> ${amiiboType}`;

        
   // }

   switch (`${gameSeries}`){

    case 'Pokemon':
        document.getElementById("series-logo").src = 'img/logos/Pokemon_logo.png'
        break;

    case 'Super Mario':
        document.getElementById("series-logo").src = 'img/logos/Super_Mario_logo.svg'
        break;

    case 'Mario Sports Superstars':
        document.getElementById("series-logo").src = 'img/logos/MarioSportsSuperstars_logo.png'
        break;

    case 'Metroid':
        document.getElementById("series-logo").src = 'img/logos/Metroid_logo.png'
        break;

    case 'Animal Crossing':
        document.getElementById("series-logo").src = 'img/logos/Animal-Crossing-Logo.png'
        break;

  case 'The Legend of Zelda':
        document.getElementById("series-logo").src = 'img/logos/Zelda_Logo.png'
        break;

  case 'Kirby':
        document.getElementById("series-logo").src = 'img/logos/Kirby-Logo.png'
        break;

    default:
        document.getElementById("series-logo").src = 'img/logos/nintendobg.png'

}
})