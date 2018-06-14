var express 	= require("express"),
	app 		= express(),
	converter 	= require("./converter");

app.get("/rgbToHex", function(req, res) {
  var red   	= parseInt(req.query.red, 10),
  	  green 	= parseInt(req.query.green, 10),
      blue  	= parseInt(req.query.blue, 10),

      hex 		= converter.rgbToHex(red, green, blue);

  res.send(hex);
});

app.get("/hexToRgb", function(req, res) {
  var hex 		= req.query.hex,
	  rgb 		= converter.hexToRgb(hex);

  res.send(JSON.stringify(rgb));
});

app.listen(3000);