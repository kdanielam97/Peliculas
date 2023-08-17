import { Genero } from "./genero";

export class Pelicula {
    private nombre: string;
    private director: string;
    private generos: Genero[] = [];
    private duracion: number;
    private anio: number;
    private calificacion: number;

    constructor(
        nombre: string,
        director: string,
        generos: Genero[],
        duracion: number,
        anio: number,
        calificacion: number
    ) {
        this.nombre = nombre;
        this.director = director;
        this.generos = generos;
        this.duracion = duracion;
        this.anio = anio;
        this.calificacion = calificacion;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setDirector(director: string): void {
        this.director = director;
    }

    public setGenero(generos: Genero[]): void {
        this.generos = generos;
    }

    public setDuracion(duracion: number): void {
        this.duracion = duracion;
    }

    public setAnio(anio: number): void {
        this.anio = anio;
    }

    public setCalificacion(calificacion: number): void {
        this.calificacion = calificacion;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getDirector(): string {
        return this.director;
    }

    public getGenero(): Genero[] {
        return this.generos;
    }

    public getDuracion(): number {
        return this.duracion;
    }

    public getAnio(): number {
        return this.anio;
    }

    public getCalificacion(): number {
        return this.calificacion;
    }

    public contargeneros(): number {
        return this.generos.length;
    }

    public imprimir(): void {
        console.log("Nombre:", this.nombre);
        console.log("Director:", this.director);
        console.log(
            "Géneros:",
            this.generos.map((genero) => genero.getNombre()).join(", ")
        );
        console.log("Duración:", this.duracion, " Minutos");
        console.log("Año:", this.anio);
        console.log("Calificación:", this.calificacion, " puntos");
    }

    public esPeliculaEpica(): boolean {
        return this.duracion >= 180;
    }

    public calcularValoración(): string {
        if (this.calificacion >= 0 && this.calificacion < 2) {
            return "Muy mala";
        } else if (this.calificacion >= 2 && this.calificacion < 5) {
            return "Mala";
        } else if (this.calificacion >= 5 && this.calificacion < 7) {
            return "Regular";
        } else if (this.calificacion >= 7 && this.calificacion < 8) {
            return "Buena";
        } else if (this.calificacion >= 8 && this.calificacion <= 10) {
            return "Muy buena";
        } else {
            return "Calificacion no es valida";
        }
    }

    public esSimilar(pelicula: string): boolean {
        return this.nombre === pelicula;
    }

    public alquilarPelicula(): void {
        console.log(`Película ${this.nombre} alquilada con éxito.`);
    }

    public estaDisponible(): boolean {
        return true;
    }
}