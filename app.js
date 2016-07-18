(function (){
    'use strict'    ;
    
    // Main packages
    var express = require('express');
    var parser = require('body-parser');
    
    // Main app
    var app = express();
    var router = express.Router();
    
    // Configure app
    app.use(parser.urlencoded({ extended: true }));
    app.use(parser.json());
    
    //
    var port = process.env.PORT;        // set our port
    var ip = process.env.IP;        // set our port
    
    
    // ROUTES
    // =============================================================
    app.get('/', function (req, res){
       res.json({ message: 'hooray! welcome to our api!' });   
    });
    
    //
    app.use('/api', router);
    
    // Listen 
    console.log('App listenning on ', ip,':',port);
    app.listen (port,ip);
    
})();
