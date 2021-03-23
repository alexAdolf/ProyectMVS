"use strict";

// const { default: validator } = require("validator");
var Validator = require("validator");
var fs = require("fs");
var path = require("path");
// const article = require("../models/article");
var Article = require("../models/article");
const { exists } = require("../models/article");
const article = require("../models/article");
// const { param} = require("../routes/article");

var controller = {
  datosCurso: (req, res) => {
    var hola = req.body.hola;

    return res.status(200).send({
      curso: "Master en Frameworks Js",
      autor: "Adolfo astorga",
      url: "adolfo.cl",
      hola,
    });
  },

  test: (req, res) => {
    return res.status(200).send({
      message: "Soy la acción Test de mi controlador de articulos",
    });
  },

  save: (req, res) => {
    //Recoger parametros por post

    var params = req.body;
    console.log(params);

    //validar datos (validator)

    try {
      var validate_title = !validator.isEmpty(params.title);
      var validate_content = !validator.isEmpty(params.content);
    } catch (err) {
      return res.status(200).send({
        status: "error",
        message: "Falta datos por enviar",
      });
    }

    if (validate_title && validate_content) {
      //crear el objeto a guardar
      var article = new Article();

      //Asignar valores
      article.title = params.title;
      article.content = params.content;

      if(params.image){
        article.image = params.image;
      }else{
        article.image = null;
      }
      

      //guardar el articulo

      article.save((err, articleStored) => {
        if (err || !articleStored) {
          return res.status(404).send({
            status: "error",
            message: "El articulo no se ha guardado",
          });
        }

        //devolver una respuesta

        return res.status(200).send({
          status: "success",
          article: articleStored,
        });
      });
    } else {
      return res.status(200).send({
        status: "error",
        message: "Los datos no son validos",
      });
    }
  },

  getArticles: (req, res) => {
    var query = Article.find({});

    var last = req.params.last;
    if (last || last != undefined) {
      query.limit(5);
    }

    //Find
    Article.find({})
      .sort("-_id")
      .exec((err, article) => {
        if (err) {
          return res.status(500).send({
            status: "error",
            message: "Error al devolver los articulos",
          });
        }

        if (!article) {
          return res.status(404).send({
            status: "error",
            message: "No hay articulos para mostrar",
          });
        }

        return res.status(200).send({
          status: "success",
          article,
        });
      });
  },

  getArticle: (req, res) => {
    //Recoger el id de la url
    var articleId = req.params.id;

    //comprobar que existe
    if (!articleId || articleId == null) {
      return res.status(404).send({
        status: "error",
        message: "No existe el articulo",
      });
    }

    //buscar el articulo

    Article.findById(articleId, (err, article) => {
      if (err || !article) {
        return res.status(404).send({
          status: "error",
          message: "No existe el articulo",
        });
      }

      //devolverlo en json
      return res.status(404).send({
        status: "success",
        article,
      });
    });
  },

  update: (req, res) => {
    //Recoger el id del articulo por la url
    var articleId = req.params.id;

    //recoger los datos que llegan por put
    var params = req.body;

    //validar los datos
    try {
      var validate_title = !Validator.isEmpty(params.title);
      var validate_content = !validator.isEmpty(params.content);
    } catch (err) {
      return res.status(200).send({
        status: "error",
        message: "Faltan datos por enviar",
      });
    }

    if (validate_title && validate_content) {
      //hacer un find and update
      Article.findOneAndUpdate(
        { _id: articleId },
        params,
        { new: true },
        (err, articleUpdated) => {
          if (err) {
            return res.status(500).send({
              status: "error",
              message: "Error al actualizar",
            });
          }

          if (!articleUpdated) {
            return res.status(404).send({
              status: "error",
              message: "No existe el articulo",
            });
          }

          return res.status(404).send({
            status: "success",
            article: articleUpdated,
          });
        }
      );
    } else {
      //Devolver respuesta

      return res.status(200).send({
        status: "error",
        message: "La validación no es correcta",
      });
    }
  },

  delete: (req, res) => {
    //Recoger el id de la url
    var articleId = req.params.id;

    //Find and Delete
    Article.findByIdAndDelete({ _id: articleId }, (err, articleRemoved) => {
      if (err) {
        return res.status(500).send({
          status: "error",
          message: "Error al borrar",
        });
      }

      if (!articleRemoved) {
        return res.status(404).send({
          status: "error",
          message: "No se ha borrado el articulo, posiblemente no exista",
        });
      }

      return res.status(200).send({
        status: "success",
        article: articleRemoved,
      });
    });
  },

  upload: (req, res) => {
    //configurar el modulo connect multiPaty router/article.js (hecho)

    //Recoger el fichero de la petición
    var file_name = "Image no subida..";
    console.log(req.files);

    if (!req.files) {
      return res.status(404).send({
        status: "error",
        message: file_name,
      });
    }

    //Conseguir el nombre y extensión del archivo
    var file_path = req.files.file0.path;
    var file_split = file_path.split("\\");

    //nombre del archivo

    var file_name = file_split[2];

    //extensión del fichero

    var extension_split = file_name.split(".");
    var file_ext = extension_split[1];

    //comprbar la extensión, solo imagenes, si es valida borrar el fichero

    if (
      file_ext != "png" &&
      file_ext != "jpg" &&
      file_ext != "jpeg" &&
      file_ext != "gif"
    ) {
      //borrar el archivo subido
      fs.unlink(file_path, (err) => {
        return res.status(200).send({
          status: "error",
          message: "la extensión de la imagen no es valida",
        });
      });
    } else {
      //Si todo es valido sacando id de la url
      var articleId = req.params.id;

      if(articleId){

        //Buscar el articulo, asignar el nombre de la imagen y actualizarlo
      Article.findByIdAndUpdate(
        { _id: articleId },
        { image: file_name },
        { new: true },
        (err, articleUpdated) => {
          if (err || !articleUpdated) {
            return res.status(200).send({
              status: "error",
              message: "Error al guardar la imagen del articulo",
            });
          }

       
        });

      }else{
        return res.status(200).send({
          status: "success",
          image: file_name
        });
      }
      
    }
  }, //end upload file

  getImage: (req, res) => {
    var file = req.params.image;
    var path_file = "./upload/articles/" + file;

    fs.exists(path_file, (exists) => {
      console.log(exists);
      if (exists) {
        return res.sendFile(path.resolve(path_file));
      } else {
        return res.status(404).send({
          status: "error",
          message: "La imagen no existe",
        });
      }
    });
  },

  search: (req, res) =>{

    //sacar el string a buscar
    var searchString = req.params.search;

    // find or
      Article.find({ "$or":[
        { "title": { "$regex": searchString, "$options": "i" }},
        { "content": {"$regex": searchString, "$options": "i"}},
      ]})
      .sort([['date', 'descending']])
      .exec((err, articles) => {

        if(err){
          return res.status(500).send({
            status: 'error',
            message: 'Error en la petición',
           
          });
        }

        if(!articles || articles.length <= 0){
          return res.status(404).send({
            status: "error",
            message: "no hay articulos que coincidan con tu busqueda",
          });
        }

        return res.status(200).send({
          status: "success",
          articles,
        });
      });
    }
}; // end controller

module.exports = controller;
