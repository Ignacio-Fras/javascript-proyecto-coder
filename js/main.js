// se inicia la pagina con un formulario interactivo antes de ver el resultado de la batalla
let nombre = prompt("Ingrese su nombre");
console.log(nombre);
let apellido = prompt("Ingrese su apellido");
console.log(apellido)
let edad = prompt("Ingrese su edad");
console.log(edad)

alert("Bienvenido a la pagina de luchas aleatorias pokemon!")


// Le aplique una constante para determinar el daño minimo y maximo que se hagan en el duelo
const MIN_POWER = 40;
const MAX_POWER = 70;

// Defini la vida de cada uno en el inicio de la batalla
let vidaCharizard = 200;
let vidaBulbasaur = 200;

console.log(vidaCharizard);
console.log(vidaBulbasaur);

let ronda = 1;
while(vidaCharizard > 0 && vidaBulbasaur > 0){
    console.log("Ronda numero " + ronda);
    document.write("Comienza la batalla, ronda numero " + ronda)
    ronda+=1;
    document.write('<div class="row row-cols-12 row-cols-md-4">')
let ataqueCharizard = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
    console.log("Ataca charizard...")
   console.log ("Charizard usa Giro de fuego y le saca a bulbasaur " + ataqueCharizard + " puntos de vida");
    ataqueBulbasaur = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER);
   console.log("Ataca Bulbasaur...")
   console.log ("Bulbasaur usa espesura y le saca a charizard " + ataqueBulbasaur + " puntos de vida");

if (ataqueCharizard === ataqueBulbasaur){
    vidaBulbasaur -= ataqueCharizard
    vidaCharizard -= ataqueBulbasaur
} 
else if(ataqueBulbasaur > ataqueCharizard){
    document.write("Bulbasaur le saca " + ataqueBulbasaur + " puntos de vida a Charizard");
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
    document.write('<div class="col"> <div class="card"> <img src="images/derrota charizard.webp"  alt="..."> <div class="card-body"><h2 class="card-title">Ganó Bulbasaur</h5><h3 class="card-text">Felicitaciones!</h3></div></div></div>')
}else{
    console.log("La batalla fue ganada por Charizard")
    document.write('<div class="col"> <div class="card"> <img src="images/derrota bulbasaur.jpg"  alt="..."> <div class="card-body"><h2 class="card-title">Ganó Charizard!</h2><h3 class="card-text">Felicitaciones!</h3></div></div></div>')
}
