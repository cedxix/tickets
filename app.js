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
    app.use(router);
    app.use('/api', router);
    
    //
    var port = process.env.PORT;        // set our port
    var ip = process.env.IP;        // set our port
    
    //
    var dbManager = require('./api/db/db');
    // ROUTES
    // =============================================================
    router.get('/', function (req, res){
       res.json({ message: 'hooray! welcome to our api!' });   
    });
    
     router.get('/tickets', function (req, res){
         var tickets = dbManager.allDocs();
       res.json({ data : tickets  });   
    });
    
    
    router.get('/tickets/:id', function (req, res){
         var tickets = dbManager.get(req.params.id);
       res.json({ data : tickets  });   
    });
    //
    
    
    // Listen 
    console.log('App listenning on ', ip,':',port);
    app.listen (port,ip);
    
})();
