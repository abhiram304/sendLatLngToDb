
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
var point=require('./routes/location');
var mapPointer=require('./routes/showMap');
var registerPointer=require('./routes/userSignup');
var loginPointer=require('./routes/customerLogin');
var liveSensorTrackPointer=require('./routes/liveSensorTrack');
var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', mapPointer.showMap);
app.get('/userRegister', registerPointer.signup);
app.get('/userLogin', loginPointer.getLogin);
app.post('/signed', registerPointer.signed);
app.post('/customerCheckLogin',loginPointer.checkLogin);
app.get('/postlocation', point.index1);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
