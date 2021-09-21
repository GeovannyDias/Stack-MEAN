export class Product {
    _id?: string;
    nombre: string;
    categoria: string;
    ubicacion: string;
    precio: number;

    code?: string;
    message?: string;
    data?: Product[] | Product | any;
    created_at?: number;
    updated_at?: number;

    // Type Strict
    constructor(nombre: string, categoria: string, ubicacion: string, precio: number) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precio = precio;
    }
}