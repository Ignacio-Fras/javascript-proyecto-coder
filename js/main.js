// Le aplique una constante para determinar el daño minimo y maximo que se hagan en el duelo
const MIN_POWER = 40;
const MAX_POWER = 70;


// Se crea un array de objetos con las caracteristicas de cada pokemon

const pokemones = [
    {
        nombre: "Bulbasaur",
        tipo: "planta",
        ataque: "espesura",
        vida: "200",
        foto: "https://images.wikidexcdn.net/mwuploads/wikidex/e/ec/latest/20170919012759/EP985_Bulbasaur_de_Ash.png width=280px"
    },
    {
        nombre: "Pikachu",
        tipo: "electrico",
        ataque: "impactrueno",
        vida: "200",
        foto: "https://los40es00.epimg.net/los40/imagenes/2018/09/19/videojuegos/1537360830_157726_1537360880_noticia_normal.jpg width= 280px",
    },
    {
        nombre: "charizard",
        tipo: "fuego",
        ataque: "aliento de fuego",
        vida: "200",
        foto: "https://images.wikidexcdn.net/mwuploads/wikidex/2/2c/latest/20220617161927/EP1204_Charizard_de_Alain.png width=280px"
    },
    {
        nombre:"Rattata",
        tipo:"tierra",
        ataque: "latigo",
        vida: "200",
        foto: "http://pm1.narvii.com/6164/97d5e2787009a46ec2384b70a1b860edcbe77eb6_00.jpg width=205px"
    },
];

// Mediante DOM se aplica una especie de indice para ver los pokemons a utilizar y contra quienes enfrentarse (proximamente)
document.querySelector('#pok').innerHTML=`
<h2>Seleccione su pokemon</h2>
<div class='cajaPokemones'>
  <img id="foto" src=${pokemones[0].foto} alt=${pokemones}
  <div class='cajaPokemones'>
  <p>Nombre: ${pokemones[0].nombre}</p>
  <p>Ataque: ${pokemones[0].ataque}</p>
  <p>Tipo: ${pokemones[0].tipo}</p>
  <p>Vida: ${pokemones[0].vida}</p>
  </div>
<div class='cajaPokemones'>
   <img id="foto" src=${pokemones[1].foto} alt=${pokemones}
   <div class='cajaPokemones'>
   <p> Nombre: ${pokemones[1].nombre}</p>
   <p>Ataque: ${pokemones[1].ataque}</p>
   <p>Tipo: ${pokemones[1].tipo}</p>
   <p>Vida: ${pokemones[1].vida}</p>
   </div>
<div class='cajaPokemones'>
   <img id="foto" src=${pokemones[2].foto} alt=${pokemones}
   <div class='cajaPokemones'>
   <p>Nombre: ${pokemones[2].nombre}</p>
   <p>Ataque: ${pokemones[2].ataque}</p>
   <p>Tipo: ${pokemones[2].tipo}</p>
   <p>Vida: ${pokemones[2].vida}</p>
</div>
<div class='cajaPokemones'>
   <img id="foto" src=${pokemones[3].foto} alt=${pokemones}
   <div class='cajaPokemones'>
   <p>Nombre: ${pokemones[3].nombre}</p>
   <p>Ataque: ${pokemones[3].ataque}</p>
   <p>Tipo: ${pokemones[3].tipo}</p>
   <p>Vida: ${pokemones[3].vida}</p>
   </div>
</div>`

// Se aplica una tabla en la consola para identificar a los pokemons
console.table(pokemones)

// Se utiliza el localStorage para determinar los pokemons a luchar
localStorage.setItem("pok1", JSON.stringify({nombre: "Bulbasaur", tipo:"hierba",ataque:"espesura"}))
localStorage.setItem("pok2", JSON.stringify({nombre:"charizard", tipo:"fuego", ataque:"aliento de fuego"}))
let poke1 = localStorage.getItem("pok1")
let poke2 = localStorage.getItem("pok2")
let pokeJson = JSON.parse(poke1) 
let pokeParse = JSON.parse(poke2)
console.log(pokeJson.nombre)
console.log(pokeParse.nombre)

// Defini la vida de cada uno en el inicio de la batalla
console.log("Vida de los pokemons a enfrentarse en duelo")
let vidaCharizard = 200;
let vidaBulbasaur = 200;

console.log(vidaCharizard);
console.log(vidaBulbasaur);

let ronda = 1;
while(vidaCharizard > 0 && vidaBulbasaur > 0){
    console.log("--------------")
    console.log("Comienza la batalla " + ronda);
    document.querySelector('#ronda').innerHTML = `
    <h3>Comienza la batalla</h3>`
    ronda+=1;
    document.write('<div class="row row-cols-12 row-cols-md-4>')

    // se genera un numero aleatorio que equivale al daño que produce cada pokemon en la batalla 
  let ataqueCharizard = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
    ataque("charizard", "bulbasaur");
    console.log(`charizard usa aliento de fuego y le saca a bulbasaur ${ataqueCharizard} puntos de vida`)
  let ataqueBulbasaur = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
    ataque("bulbasaur", "charizard")
    console.log (`Bulbasaur usa espesura y le saca a charizard ${ataqueBulbasaur} puntos de vida`);

// se aplica una function para reciclar codigo y definir que pokemon ataca al otro
    function ataque(pokemon1, pokemon2){
        if (pokemon1===undefined){
            pokemon1 = "Un pokemon"
        }
        if(pokemon2===undefined){
            pokemon2="otro pokemon"
        }
    console.log(pokemon1 + " ataca a " + pokemon2)
}


if (ataqueCharizard === ataqueBulbasaur){
    vidaBulbasaur -= ataqueCharizard
    vidaCharizard -= ataqueBulbasaur
} 
else if(ataqueBulbasaur > ataqueCharizard){
    document.write(`Bulbasaur le saca ${ataqueBulbasaur} puntos de vida a Charizard`);
    document.write('<div class="col"> <div class="card"> <img src="images/ataque bulbasaur.webp"  alt="..."> <div class="card-body"><h2 class="card-title">Bulbasaur le hace mucho daño a Charizard</h2><h3 class="card-text">Cuidado Charizard!</h3></div></div></div>')
    vidaBulbasaur -= ataqueCharizard
}
else{
    (ataqueCharizard > ataqueBulbasaur)
    document.write(`Charizard le saca ${ataqueCharizard} puntos de vida a Bulbasaur`);
    document.write('<div class="col"> <div class="card"> <img src="images/ataque charizard.webp"  alt="..."> <div class="card-body"><h2 class="card-title">Charizard hace mucho daño esta ronda!</h2><h3 class="card-text">Cuidado Bulbasaur!</h3></div></div></div>')
    vidaCharizard -= ataqueBulbasaur


}
}

// Aca se marca lo que sucede si uno de los 2 consigue llegar a 0 o nro negativo

if(vidaBulbasaur > 0){
    console.log("La batalla fue ganada por Bulbasaur")
    document.write('<div class="col"> <div class="card"> <img src="images/derrota charizard.webp"  alt="..."> <div class="card-body"><h2 class="card-title">Perdio Charizard</h5><h3 class="card-text">Felicitaciones!</h3></div></div></div>')
}else{
    console.log("La batalla fue ganada por Charizard")
    document.write('<div class="col"> <div class="card"> <img src="images/derrota bulbasaur.jpg"  alt="..."> <div class="card-body"><h2 class="card-title">Perdió Bulbasaur</h2><h3 class="card-text">Felicitaciones!</h3></div></div></div>')
}
