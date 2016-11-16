var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 3000; 


app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(express.static(__dirname + '/public')); 


app.listen(port, function(res, err){
	if(!err){
		console.log('Magic happens on port ' + port);
	}else{
		throw err;
	}

});  

             
                    
