var express = require('express');
var app = express();
var  {Actor} = require ('../database/models');
const Sequelize = require ('sequelize');
const Op = Sequelize.Op

let moviesController = {

    listar: (req,res)=>{
        Actor.findAll()
            .then(function(actors){
               
         res.render ('actors',{actors:actors})
    })} ,
    detalle: (req,res)=>{
        Actor.findByPk(req.params.id)
            .then(function(actor){
               
         res.render ('actorsDetalle',{actor:actor})
    })},

    recomendadas: (req,res)=>{
        Actor.findAll({
            where:{
                rating: {[Op.gte]:8}
             }})
             .then (function(actorsRecomendadas){
               
                res.render ('actorRecomendadas',{actorsRecomendadas:actorsRecomendadas})
           })},
    formulario: (req,res)=>{
            res.render('crearActors')  
       }
        }

           
        
module.exports = moviesController; 