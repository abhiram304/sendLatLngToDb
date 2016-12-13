
var ejs = require("ejs");
var mysql = require('./mysql');


exports.signup = function(req, res){
  res.render('register', { title: 'Express' });
};

exports.signed = function(req, res) {
	var fname = req.body.FirstName;
	var details = {
		userid : req.body.userid,
		email : req.body.email,
		password : req.body.password
	};
	var detailsS = JSON.stringify(details);
	var detailsP = JSON.parse(detailsS);
	console.log(detailsP.userid);
	
	/*SHOULD CHECK DUPLICATE ENTRIES*/
		var queryStr = "INSERT INTO REGISTRATION(userid ,email, pass) VALUES('" + detailsP.userid
				+ "', '" + detailsP.email + "', '" + detailsP.password+"')";
		// var queryStr="INSERT INTO USERDETAILS
		// VALUES('fn','lna',STR_TO_DATE('1-01-2012',
		// '%d-%m-%Y'),"+detailsP.email+"'pass','thandle','123')"";
		mysql.fetchData(function(err, results) {
			if (err) {
				throw err;
			} else {
				res.render('signupSuccess');
			}
		}, queryStr);

};