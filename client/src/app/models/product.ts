export class Product {
    _id?: string;
    nombre: string;
    categoria: string;
    ubicacion: string;
    precio: number;
    
    // Type Strict
    constructor(nombre: string, categoria: string, ubicacion: string, precio: number) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precio = precio;
    }
}