//route helps to map URL to responses
// next parameter ensure that it isn't the only route and will look for other routes too.
module.exports = function(express, app){

	var router = express.Router();
	router.get('/', function(req,res,next){
		res.render('index',{title : 'Welcome to ChitChat'});
	})

	router.get('/chatrooms', function(req,res,next){
		res.render('chatrooms',{title : 'Chatrooms'});
	})

	//set default route to be handled by express router instance
	app.use('/',router);
}