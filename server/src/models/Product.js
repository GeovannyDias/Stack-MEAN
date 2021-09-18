// MODEL
const mongoose = require('mongoose');

"use strict";
const ProductSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    ubicacion: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now() // La fecha se inserta automáticamente no se envia por parámetro
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
});

// module.exports = mongoose.model('Collection_DB', ProductSchema);
module.exports = mongoose.model('products', ProductSchema);


