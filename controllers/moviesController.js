var express = require('express');
var app = express();

let moviesController = {
    listar: (req,res)=>{
        res.render ('movies')
    },
    detalle: (req,res)=>{
        res.render('detalle')
    },
    nueva: (req,res)=>{
        res.render('nueva'); 
    },
    recomendadas: (req,res)=>{
        res.render('recomendadas')
    },
    buscar: (req,res)=>{
        res.render('buscar')
    }
}
module.exports = moviesController; 