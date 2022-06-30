const poke_container = document.getElementById
('poke_container');
const pokemon_number = 150;

var dex = [{
    "id" : "1",
    "name" : "bulbasaur",
    "type" : "grass", 
    "sprite"   : "images/Spr_5b_001.png",
    "tid" : "2013-05-05 23:35",
    "fromWho": "hello1@email.se"
},
{
    "id" : "2", 
    "name" : "venasaur",
    "type" : "grass",
    "sprite"   : "images/Spr_5b_002.png",
    "tid" : "2013-05-05 23:45",
    "fromWho": "hello2@email.se"
}];


const fetchPokemon = async () => {
    for(let i = 0; i <= dex.length; i++){
        var pokemon = dex[i];
        createCard(pokemon);
        console.log(pokemon);
    }


}







const createCard = (pokemon) =>{
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const {id, name, type, sprite } = pokemon;

    const pokeInnerHTML = `
    <div class = "img-container">
        <img src="${sprite}" alt = "${name}" >
        
    </div>
    <div class = "info">
        <span class = "number">${id}</span>
        <h3 class = "name"> ${name} </h3>
        <small class = "type"> Type: <span> ${type} </span></small>
    </div>
    `;
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
    

}

fetchPokemon();

