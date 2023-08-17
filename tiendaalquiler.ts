import { Pelicula } from "./pelicula";

export class TiendaAlquiler {
    private listaPeliculas: Pelicula[] = [];

    public agregarPelicula(pelicula: Pelicula): void {
        this.listaPeliculas.push(pelicula);
    }

    public alquilarPelicula(nombrePelicula: string): void {
        const peliculaBuscada = this.listaPeliculas.find(
            (pelicula) => pelicula.getNombre() === nombrePelicula
        );

        if (peliculaBuscada) {
            peliculaBuscada.alquilarPelicula();
        } else {
            console.log(`Película ${nombrePelicula} no está disponible.`);
        }
    }

    public carteleraDePeliculasDisponibles(): void {
        console.log("Cartelera de películas disponibles:");
        this.listaPeliculas.forEach((pelicula) => {
            if (pelicula.estaDisponible()) {
                console.log(`- ${pelicula.getNombre()}`);
            }
        });
    }
}