"use strict";
// CONTROLLER
const Product = require("../models/Product");

exports.postProduct = async (req, res) => {
    // console.log('postProduct');
    // console.log('Data 1:', req.body);
    // console.log('Data 2:', req['body']);
    try {
        let data = [];
        let product = new Product(req.body);
        await product.save();
        if (product) data.push(product);
        // res.status(200).send({'data': data, 'code': 'OK', 'message': 'Datos insertados con exito.'});
        // res.status(200).json({'data': product, 'code': 'OK', 'message': 'Datos insertados con exito.'});
        res.status(200).json({'data': data, 'code': 'OK', 'message': 'Datos insertados con exito.'});
    } catch (error) {
        console.log('Error:', error);
        // res.status(500).send({'code': 'FAIL_CONTENT', 'message': 'Error al intentar insertar datos'});
        res.status(500).json({'code': 'FAIL_CONTENT', 'message': 'Error al intentar insertar datos'});
    }
};

// GET PRODUCTS
exports.getProducts = async (req, res) => {
    try {
        let products = await Product.find();
        res.status(200).json({'data': products, 'code': 'OK', 'message': 'Datos obtenidos con exito.'});
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({'code': 'FAIL_CONTENT', 'message': 'Error al intentar obtener datos'});
    }
};


// GET ONE PRODUCT
exports.getOneProduct = async (req, res) => {
    try {
        const id = req.params.id;
        let product = await Product.findById(id);
        if (product) {
            let data = [];
            data.push(product);
            res.status(200).json({'data': data, 'code': 'OK', 'message': 'Datos obtenidos con exito.'});
        } else {
            res.status(404).json({'code': 'FAIL_CONTENT', 'message': 'Datos no existen.'});
        }
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({'code': 'FAIL_CONTENT', 'message': 'Error al intentar actualizar datos'});
    }
};


// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
    try {
        // Destructuring
        const { nombre, categoria, ubicacion, precio } = req.body;
        const id = req.params.id;
        let product = await Product.findById(id);
        if (product) {
            let data = [];
            product.nombre = nombre;
            product.categoria = categoria;
            product.ubicacion = ubicacion;
            product.precio = precio;
            product = await Product.findOneAndUpdate({ _id: id}, product, { new: true });
            if (product) data.push(product);
            res.status(200).json({'data': data, 'code': 'OK', 'message': 'Datos actualizados con exito.'});
        } else {
            res.status(404).json({'code': 'FAIL_CONTENT', 'message': 'Datos no existen.'});
        }
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({'code': 'FAIL_CONTENT', 'message': 'Error al intentar actualizar datos'});
    }
};


// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        let product = await Product.findById(id);
        if (product) {
            product = await Product.findOneAndRemove({ _id: id});
            res.status(200).json({'code': 'OK', 'message': 'Datos eliminados con exito.'});
        } else {
            res.status(404).json({'code': 'FAIL_CONTENT', 'message': 'Datos no existen.'});
        }
    } catch (error) {
        console.log('Error:', error);
        res.status(500).json({'code': 'FAIL_CONTENT', 'message': 'Error al intentar actualizar datos'});
    }
};