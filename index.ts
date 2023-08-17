import { Genero } from "./genero";
import { Pelicula } from "./pelicula";
import { TiendaAlquiler } from "./tiendaalquiler";

// Crear géneros
const accion = new Genero(1, "Acción");
const cienciaFiccion = new Genero(2, "Ciencia Ficción");
const aventura = new Genero(3, "Aventura");
const terror = new Genero(4, "Terror");
const animada = new Genero(5, "Animada");
const drama = new Genero(6, "Drama");
const comedia = new Genero(7, "Comedia");
const suspenso = new Genero(8, "Suspenso");

// Crear películas
const pelicula1 = new Pelicula("Avatar", "James Cameron", [aventura, cienciaFiccion], 162, 2009, 9);
const pelicula2 = new Pelicula("Terminator 2", "James Cameron", [accion, cienciaFiccion], 137, 1991, 8);
const pelicula3 = new Pelicula("Toy Story", "John Lasseter", [animada, aventura, comedia], 81, 1995, 9);
const pelicula4 = new Pelicula("El Conjuro", "James Wan", [terror, suspenso], 112, 2013, 7);
const pelicula5 = new Pelicula("Interestelar", "Christopher Nolan", [cienciaFiccion, drama], 169, 2014, 9);
const pelicula6 = new Pelicula("Deadpool", "Tim Miller", [accion, comedia], 108, 2016, 8);
const pelicula7 = new Pelicula("El Rey León", "Roger Allers", [animada, aventura, drama], 88, 1994, 10);
const pelicula8 = new Pelicula("El Silencio de los Inocentes", "Jonathan Demme", [drama, suspenso], 118, 1991, 9);

// imprimir datos peliculas 
console.log("Información de las películas:");
console.log("---------------------------------");
pelicula1.imprimir();
console.log("---------------------------------");
pelicula2.imprimir();
console.log("---------------------------------");
pelicula3.imprimir();
console.log("---------------------------------");
pelicula4.imprimir();
console.log("---------------------------------");
console.log("---------------------------------");
pelicula5.imprimir();
console.log("---------------------------------");
pelicula6.imprimir();
console.log("---------------------------------");
pelicula7.imprimir();
console.log("---------------------------------");
pelicula8.imprimir();
console.log("---------------------------------");

// Verificar si una película es épica
console.log(`¿${pelicula1.getNombre()} es épica? ${pelicula1.esPeliculaEpica()}`);
console.log(`¿${pelicula2.getNombre()} es épica? ${pelicula2.esPeliculaEpica()}`);
console.log(`¿${pelicula3.getNombre()} es épica? ${pelicula3.esPeliculaEpica()}`);
console.log(`¿${pelicula4.getNombre()} es épica? ${pelicula4.esPeliculaEpica()}`);

// Verificar si dos películas son similares
console.log(`¿${pelicula1.getNombre()} es similar a ${pelicula2.getNombre()}? ${pelicula1.esSimilar(pelicula2.getNombre())}`);
console.log(`¿${pelicula2.getNombre()} es similar a ${pelicula3.getNombre()}? ${pelicula2.esSimilar(pelicula3.getNombre())}`);

// Calcular valoración de películas
console.log(`Valoración de ${pelicula1.getNombre()}: ${pelicula1.calcularValoración()}`);
console.log(`Valoración de ${pelicula2.getNombre()}: ${pelicula2.calcularValoración()}`);
console.log(`Valoración de ${pelicula3.getNombre()}: ${pelicula3.calcularValoración()}`);
console.log(`Valoración de ${pelicula4.getNombre()}: ${pelicula4.calcularValoración()}`);

// Crear tienda de alquiler
const tiendaAlquiler = new TiendaAlquiler();

// Agregar películas a la tienda
tiendaAlquiler.agregarPelicula(pelicula1);
tiendaAlquiler.agregarPelicula(pelicula2);
tiendaAlquiler.agregarPelicula(pelicula3);
tiendaAlquiler.agregarPelicula(pelicula4);
tiendaAlquiler.agregarPelicula(pelicula5);
tiendaAlquiler.agregarPelicula(pelicula6);
tiendaAlquiler.agregarPelicula(pelicula7);
tiendaAlquiler.agregarPelicula(pelicula8);

// Alquilar películas
tiendaAlquiler.alquilarPelicula("Avatar");
tiendaAlquiler.alquilarPelicula("El Silencio de los Inocentes");

// Mostrar cartelera de películas disponibles
tiendaAlquiler.carteleraDePeliculasDisponibles();