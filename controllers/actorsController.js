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
       },
    crear: (req,res)=>{
        Actor.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            rating:req.body.rating,
            favorite_movie_id:req.body.favorite_movie_id
        })
        res.redirect('/actors');
        
    },
    verEditar: (req,res)=>{
        Actor.findByPk(req.params.id)
        .then(function(actor){
            res.render('editarActors',{actor:actor})
        })},

    editar: (req,res)=>{
        Actor.update({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            rating:req.body.rating,
            favorite_movie_id:req.body.favorite_movie_id
             },{
                 where: {
                     id:req.params.id
                 }
             })
             res.redirect('/actors/edit/'+req.params.id)
         },
    eliminar: (req,res)=>{
            Actor.destroy({
                    where: {
                        id:req.params.id
                    }})
                res.redirect('/actors');
        }
        }

           
        
module.exports = moviesController; 