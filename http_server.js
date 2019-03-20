const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const url = require('url');
const bodyParser = require('body-parser');

// localhost:3000
app.get('/', (request, response) => response.send('Main page'));


app.use('/api',router);

router.get('/',(request,response)=>
	{ response.json({message:'Router page'}); 
});


router.get('/square', (request, response) => {
  var urlParts = url.parse(request.url, true);
  var parameters = urlParts.query;
  var myParam = parameters.num;
    
  var myResponse = `Recieved:${myParam} Square:${ myParam * myParam }`;
  
  response.json({message: myResponse});
  //console.log('get num');
});



app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


app.post('/name',(request,response)=>{
	//console.log('post');
	var post_data = request.body;
  	console.log(post_data);
	const myParam=request.body.username;
	//var urlParts=url.parse(request.url,true);
	//var parameters=urlParts.query;
	//var myParam=parameters.username;

	var myResponse=`Post request Recieved parameter:${myParam}`;
	response.json({message: myResponse});	
});



// set the server to listen on port 3000
app.listen(3000, () => console.log('Listening on port 3000'));



