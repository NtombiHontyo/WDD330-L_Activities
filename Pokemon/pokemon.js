const url = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
    //Check to see if response was successful
    if (response.ok) {
        const data = await response.json();
        doStuff(data)
        renderOptions(data)
    }
}

function doStuff(data) {
    results = data;
    console.log("first: ", results)
}
function renderOptions(data) {
    results = data;
    const array = results.results
    const htmlElement = array.map(pokemon => optionTemplate(pokemon))
    document.querySelector("#pokemonCharacters").innerHTML = htmlElement.join("");
}

function optionTemplate(pokemon) {
    return ` <option value="${pokemon.name}">${pokemon.name}</option>`
}

getPokemon(url);
console.log("second: ", results)




