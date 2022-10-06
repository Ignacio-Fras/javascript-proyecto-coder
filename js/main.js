// se inicia la pagina con un formulario interactivo antes de ver el resultado de la batalla
let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let edad = prompt("Ingrese su edad")

let formulario = [nombre, apellido, edad]
console.table(formulario)

// Se aplica un function con una funcion return para que en la consola se muestre un saludo interactivo
function saludo(nombre,apellido){
    return "Hola " + nombre + " " + apellido + " bienvenido a la pagina de luchas aleatorias pokemon!"
}
let saludoConsola = saludo
saludoConsola = saludo(nombre, apellido)
console.log(saludoConsola)

alert("Bienvenido a la pagina de luchas aleatorias pokemon!")


// Le aplique una constante para determinar el daño minimo y maximo que se hagan en el duelo
const MIN_POWER = 40;
const MAX_POWER = 70;

// se identifica una lista de pokemons y se eliminan los que no van a luchar
let pokemones = ["bulbasaur", "pikachu","mewtwo","onyx","charizard"]
let pokeLista = pokemones.map((pok, lista) => lista + " - " + pok)
console.log(pokeLista)
pokemones.splice(1, 3);
console.log(pokemones)

// Mediante objetos se crea una lista en la consola para ver las caracteristicas de cada pokemon

function pokemon(nombre, tipo, ataque, vida){
    this.nombre= nombre;
    this.tipo= tipo;
    this.ataque= ataque;
    this.vida= vida;

}
let pokemon1 = new pokemon("Bulbasaur","Agua","Espesura","200 hp")
console.log(pokemon1);

let pokemon2 = new pokemon("Charizard", "Fuego","Aliento de fuego","200 hp")
console.log(pokemon2);

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
    document.write("Comienza la ronda numero " + ronda)
    ronda+=1;
    document.write('<div class="row row-cols-12 row-cols-md-4>')

    // se genera un numero aleatorio que equivale al daño que produce cada pokemon en la batalla 
  let ataqueCharizard = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
    ataque("charizard", "bulbasaur");
    console.log("charizard usa aliento de fuego y le saca a bulbasaur " + ataqueCharizard + " puntos de vida")
  let ataqueBulbasaur = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
    ataque("bulbasaur", "charizard")
    console.log ("Bulbasaur usa espesura y le saca a charizard " + ataqueBulbasaur + " puntos de vida");

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
    document.write("Bulbasaur le saca " + ataqueBulbasaur + "puntos de vida a Charizard");
    document.write('<div class="col"> <div class="card"> <img src="images/ataque bulbasaur.webp"  alt="..."> <div class="card-body"><h2 class="card-title">Bulbasaur le hace mucho daño a Charizard</h2><h3 class="card-text">Cuidado Charizard!</h3></div></div></div>')
    vidaBulbasaur -= ataqueCharizard
}
else{
    (ataqueCharizard > ataqueBulbasaur)
    document.write("Charizard le saca " + ataqueCharizard + " puntos de vida a Bulbasaur");
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
