class Persona {
  constructor(nombre,edad,dni,sexo,peso,altura,anioNacimiento){
      this.nombre=nombre;
      this.edad=edad;
      this.dni=dni;
      this.sexo=sexo;
      this.peso=peso;
      this.altura=altura;
      this.anioNacimiento=anioNacimiento;
  }
  mostrarDetalleGeneracion(generacion, marcoTemporal, historia, rasgo) {
      return `<ul>
      <li> Generación: ${generacion}</li>
      <li> Marco temporal:  ${marcoTemporal} </li>
      <li> Circunstancia histórica:  ${historia}</li>
      <li> Rasgo característico: ${rasgo} </li>
    </ul>
    `;
    }
    mostrarGeneracion() {
      if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
        return this.mostrarDetalleGeneracion(
          "Silent Generation",
          "1930-1948",
          "Conflictos bélicos",
          "Austeridad 😐"
        );
      } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
        return this.mostrarDetalleGeneracion(
          "baby Boom",
          "1949-1968",
          "Paz y explosión demográfica",
          "Ambicion 🤑"
        );
      } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
        return this.mostrarDetalleGeneracion(
          "Generación X",
          "1969 - 1980",
          "Crisis del 73 y transición española",
          "Obsesión por el exito 😎"
        );
      } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
        return this.mostrarDetalleGeneracion(
          "Generación Y (Millenials)",
          "1981 - 1993",
          "Inicio de la digitalización",
          "Frustración 😕"
        );
      } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
        return this.mostrarDetalleGeneracion(
          "Generación Z (Centennials)",
          "1994 - 2010",
          "Expansión masiva de internet",
          "Irreverencia 😋"
        );
      } else if (this.anioNacimiento >= 2011) {
        return this.mostrarDetalleGeneracion(
          "Generación Alfa",
          "2011 - Actualidad",
          "Nativos Digitales al 100%",
          "Son predilectos 😜"
        );
      } else {
        return '<p>No se posee datos para la fecha seleccionada</p>';
      }
    }
    
  esMayorDeEdad(){
      if(this.edad >= 18 ){
          return (`${this.nombre} es mayor de edad.<br>`);
       }
  }
  mostrarDatos(){
      return (`
      <ul>
      <li>Nombre: ${this.nombre}</li>
      <li>Edad: ${this.edad}</li>
      <li>DNI: ${this.dni}</li>
      <li>Genero:  ${(this.sexo ==='H')?'Hombre':'Mujer'}</li>
      <li>Peso: ${this.peso}</li>
      <li>Altura: ${this.altura}</li>
      <li>Año de nacimiento: ${this.anioNacimiento}</li>
      <li>DNI Aleatorio generado: ${this.dni}</li>
      </ul>
      `);
  }
   generaDNI(){
      let numRandom=Math.round(Math.random()*(99999999-10000000)+parseInt(1));
      this.nuevoDni=numRandom;
  }

  get mostrarNombre(){
      return this.nombre;
    }
}


let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");
let dni = document.getElementById("dni");
let genero = document.getElementById("genero");
let peso = document.getElementById("peso");
let altura = document.getElementById("altura");
let anio = document.getElementById("fechaNacimiento");
let formulario = document.getElementById("formGeneraciones");
let alert = document.querySelector("#msjError");
let btnmostrarDatos = document.querySelector("#mostrarDatos");
let btnmostrarGeneracion = document.querySelector("#mostrarGeneracion");


formulario.addEventListener("submit", crearPersona);

function crearPersona(e) {
  e.preventDefault();

    console.log("tengo que crear la persona");
    //hay que ocultar el alert
   
    const nuevaPersona = new Persona(
      nombre.value,
      edad.value,
      dni.value,
      genero.value,
      peso.value,
      altura.value,
      anio.value
    );
    //reseteo los datos del formulario 
    formGeneraciones.reset();
    // mostramos opciones para la persona creada
    let datosExtras = document.querySelector("#datosExtras");
    datosExtras.className = "container bg-light my-4 rounded-3";
    // agregar el nombre de la persona en la seccion de detalle
    datosExtras.children[0].children[0].innerHTML = `<i class="bi bi-person-badge"></i> Persona: ${nuevaPersona.mostrarNombre}`;
    // opciones para agregar un manejador de eventos en un boton
    btnmostrarDatos.addEventListener("click", () =>
      mostrarDatosPersona(nuevaPersona)
    );
    btnmostrarGeneracion.addEventListener("click", () => {
      let panelDatos = document.querySelector("#detalle");
      panelDatos.innerHTML = nuevaPersona.mostrarGeneracion();
    });
  
}



function mostrarDatosPersona(persona) {
  let panelDatos = document.querySelector("#detalle");
  panelDatos.innerHTML = persona.mostrarDatos();
}
