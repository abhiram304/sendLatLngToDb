var mysql = require('./mysql');
exports.showMap = function(req, res){
	var lat=req.param("Lat");
	var lng=req.param("Lng");
	var queryStr = "select * from Location ORDER BY id DESC LIMIT 1";
	mysql.fetchData(function(err, results) {
		if (err) {
			console.log("Error in db connection: "+err);
			throw err;
		} else {
			var jsonString1= JSON.stringify(results);
			var passParsed= JSON.parse(jsonString1);

			//console.log("Results "+results[0].lattitude);
			
			res.render('Homepage', { lat: results[0].lattitude, lng: results[0].longitude });
			res.send({dataSaved: true});
		}
	}, queryStr);
	
	//res.render('home', { title: lat });
};