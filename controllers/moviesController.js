var express = require('express');
var app = express();
var  {Movie} = require ('../database/models');
const Sequelize = require ('sequelize');
const Op = Sequelize.Op

let moviesController = {

    listar: (req,res)=>{
        Movie.findAll()
            .then(function(movies){
               
         res.render ('movies',{movies:movies})
    })} ,
    detalle: (req,res)=>{
        Movie.findByPk(req.params.id)
            .then(function(movie){
               
         res.render ('detalle',{movie:movie})
    })},
    nueva: (req,res)=>{
        Movie.findAll({
            order: [["release_date","DESC"]],
            limit: 5
        })
        .then (function(nuevas){
               
            res.render ('nueva',{nuevas:nuevas})
       })
    },
    recomendadas: (req,res)=>{
        Movie.findAll({
            where:{
                rating: {[Op.gte]:8}
             }})
             .then (function(recomendadas){
               
                res.render ('recomendadas',{recomendadas:recomendadas})
           })},
    formulario: (req,res)=>{
         res.render('crear')  
    },
    crear: (req,res)=>{
        Movie.create({
            title:req.body.title,
            rating:req.body.rating,
            awards:req.body.awards,
            length:req.body.length,
            release_date:req.body.release_date
        })
        res.redirect('/movies');
        
    },
   verEditar: (req,res)=>{
    Movie.findByPk(req.params.id)
    .then(function(movie){
        res.render('editar',{movie:movie})
    })},
    editar: (req,res)=>{
       Movie.update({
        title:req.body.title,
        rating:req.body.rating,
        awards:req.body.awards,
        length:req.body.length,
        release_date:req.body.release_date
        },{
            where: {
                id:req.params.id
            }
        })
        res.redirect('/movies/edit/'+req.params.id)
    },
    eliminar: (req,res)=>{
        Movie.destroy({
                where: {
                    id:req.params.id
                }})
            res.redirect('/movies');
    }
}

module.exports = moviesController; 