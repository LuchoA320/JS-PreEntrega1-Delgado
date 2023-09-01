function bienvenida() {
    
const nombreUsuario = prompt("¿Como te llamas?");
alert("¡Bienvenido al mundo Pokemon " + nombreUsuario + "!");
const menuJuego = prompt("¿Que deseas hacer? \n. Jugar. \n. Instrucciones de Juego.")
switch (menuJuego) {
    case "Jugar":
        break;
    case "Instrucciones":
        alert("Para subir de nivel tu Pokemon deberas entrenarlo, lo cual te costara energia que recuperaras alimentandolo. El nivel de tu Pokemon sera equivalente al daño que realizaras en tu contrincante.");
        break;
}
}

bienvenida()






class Pokemon{
    constructor(nombre, nivel, energia){
        this.nombre = nombre;
        this.nivel = nivel;
        this.energia = energia;
    }


    // 1. Que suba de nivel del pokemon
    // 2. Que me reste (1) de energia
    // 3. Que no pueda entrenar si la energia del pokemon es igual o menor a 1
    entrenar(){
        if (this.energia <= 1) {
            alert("No podes entrenar a " + this.nombre + " porque su energia es demasiado baja.");
        } else {
            this.nivel++;
            this.energia--;
            alert(this.nombre + " ha subido a nivel " + this.nivel);
            alert("La energia de " + this.nombre + " es " + this.energia + ".");
        }

    }
    // 1. Sube (1) de energia
    // 2. Limitar la energia a 10
    alimentar(){
        if (this.energia < 10) {
            this.energia ++;
            alert("La energia de " + this.nombre + " ha subido a " + this.energia);
        } else {
            alert("La energia de " + this.nombre + " esta al maximo.");
        }
    }

    // 1. Que le reste energia al pokemon enemigo
    // 2. Que reste cantidad de energia segun el nivel del pokemon que ataca
    atacar(objetivo){
        objetivo.restarEnergia(this.nivel);
    }

    // 1. Que reste energia al pockemon segun la cantidad
    // 2. Que si la energia es menor que 1, muestre un mensaje de que el pokemon esta incapacitado
    restarEnergia (cantidad){
        if (this.energia > 1){
            this.energia = this.energia - cantidad;
            alert ("Has utilizado placaje, la energia de " + this.nombre + " ha bajado a " + this.energia);
        } else {
            alert(this.nombre + " esta incapacitado :(");
        }
    }
}

const charmander = new Pokemon("Charmander", 1, 10);
const treecko = new Pokemon("Treecko", 1, 10)

