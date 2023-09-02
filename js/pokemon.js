/* ======= Glosario =======
  PP: Puntos de Poder
  PS: Puntos de Salud
  */


// Prompt para pedir el nombre al usuario.
const nombreUsuario = prompt("¡Hola! ¿Como te llamas?");
alert("¡Bienvenido al mundo Pokemon " + nombreUsuario + "!");

function menuPokemon() {
  let menuJuego;
// Prompt del menu con 3 opciones.
  while (
    menuJuego != "Jugar" &&
    menuJuego != "Instrucciones" &&
    menuJuego != "Sorpresa"
  ) {
    menuJuego = prompt(
      "¿Que deseas hacer? \n. Jugar. \n. Instrucciones. \n. Sorpresa."
    );
    switch (menuJuego) {
      case "Jugar":
        break;
      case "Instrucciones":
        alert(
          "Con la accion Atacar reduciras la salud (PS) de tu contrincante, pero le costara Puntos de Poder (PP) a tu Pokemon. El daño que causaras en tu oponente sera equivalente al nivel de tu Pokemon. \n Con la accion Entrenar, tu Pokemon subira de nivel a cambio de un Punto de Poder. Esto aumentara su Salud Maxima, asi como su capacidad de inflingir daño. No podras entrenar a tu Pokemon si se encuentra debilitado o su energia es demasiado baja.\n  La Baya Zanama aumentara los Puntos de Poder de tu Pokemon, y la Baya Aranja aumentara su salud."
        );
        break;
      case "Sorpresa":
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        break;
      default:
        alert("Por favor, ingrese un comando valido.");
    }
  }
}

menuPokemon();

// 1. Parametros para la creacion de Nuevo Pokemon
class Pokemon {
  constructor(nombre, nivel, puntosPoder, salud, saludMaxima) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.puntosPoder = puntosPoder;
    this.salud = salud;
    this.saludMaxima = saludMaxima;
  }

  // 1. Que suba el nivel del pokemon.
  // 2. Que me aumente la capacidad de PS Maxima
  // 3. Que le reste (2) PP.
  // 4. Que no pueda entrenar si los PP del pokemon son igual o menor a 1.
  entrenar() {
    if (this.puntosPoder <= 1 || this.salud <= 1) {
      alert(
        "No puedes entrenar a " +
          this.nombre +
          " porque sus puntos de poder son demasiado bajos o se encuentra debilitado. :("
      );
    } else {
      this.nivel++;
      this.saludMaxima = this.saludMaxima + 2;
      this.puntosPoder = this.puntosPoder - 2;
      alert("¡" + this.nombre + " ha subido a nivel " + this.nivel + "!");
      alert(
        "¡La salud maxima de " +
          this.nombre +
          " ha aumentado a " +
          this.saludMaxima +
          "!"
      );
      alert("Los puntos de poder de " + this.nombre + " han bajado a " + this.puntosPoder + ".");
    }
  }
  // 1. Sube (1) de PP.
  // 2. Limitar los PP maximos a 10.
  alimentar() {
    if (this.puntosPoder < 10) {
      this.puntosPoder++;
      alert(
        "Los puntos de poder " + this.nombre + " han subido a " + this.puntosPoder + "."
      );
    } else {
      alert("¡Los puntos de poder " + this.nombre + " estan al maximo!");
    }
  }

  // 1. Que le reste PS al pokemon enemigo.
  // 2. Que reste cantidad de PS segun el nivel del pokemon que ataca.
  // 3. Que me reste 2 PP por ataque.
  atacar(objetivo) {
    if (this.puntosPoder <= 1 || this.salud <= 1) {
      alert (this.nombre + " no puede atacar porque sus puntos de poder son demasiado bajos o se encuentra debilitado.")
    } else {
      objetivo.restarSalud(this.nivel);
      this.puntosPoder = this.puntosPoder - 2;
      alert(
        "Los puntos de poder de " + this.nombre + " han bajado a " + this.puntosPoder + "."
      );
    }
  }

  // 1. Que reste PS al pokemon segun la cantidad.
  // 2. Que si los PS son menores que 1, muestre un mensaje de que el pokemon esta debilitado.
  restarSalud(cantidad) {
    if (this.salud > 1) {
      this.salud = this.salud - cantidad;
      alert(
        "Has utilizado placaje, la salud de " +
          this.nombre +
          " ha bajado a " +
          this.salud +
          "."
      );
    } else {
      alert("¡" + this.nombre + " se ha debilitado!");
    }
  }

  // 1. Que me sume 2 PS.
  // 2. Que si los PS alcanzaron el nivel maximo, muestre un mensaje de salud maxima.
  sumarSalud() {
    if (this.salud < this.saludMaxima) {
      this.salud = this.salud + 2
      alert("La salud de " + this.nombre + " ha subido a " + this.salud);
    } else {
      alert("¡La salud de " + this.nombre + " esta al maximo!");
    }
    console.log(this.nombre + ": " + this.salud);
  }

  // ===== Boton Desabilitado, solo para desarrollo =====
  // 1. Que reste la cantidad de salud siempre y cuando la vida sea mayor que 0.
  // 2. Tope de 0.
  dañar(cantidad) {
    if (this.salud > 0) {
      this.salud = this.salud - cantidad;
    }

    if (this.salud < 0) {
      this.salud = 0;
    }
    console.log(this.nombre + ": " + this.salud);
  }
}

// 1. Crear Pokemon nuevo utilizando sintaxis:
// Const nombre = new Pokemon("Nombre", Nivel, PP, PS, PS Maximos.);

const torchic = new Pokemon("Torchic", 1, 10, 10, 10);
const treecko = new Pokemon("Treecko", 1, 10, 10, 10);
