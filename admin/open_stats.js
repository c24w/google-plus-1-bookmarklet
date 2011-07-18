javascript:

var urls = new Array(
	"http://goo.gl/vObZK",
	"http://goo.gl/WLzPo",
	"http://goo.gl/nMmuq",
	"http://goo.gl/UTsQ0",
	"http://goo.gl/pnvs9",
	"http://goo.gl/mmCrH",
	"http://goo.gl/R3Ihk",
	"http://goo.gl/eMK2p",
	"http://goo.gl/nrlgG",
	"http://goo.gl/ihS0K",
	"http://goo.gl/79XHY"
);

var iframes = "";

for(i in urls)
	iframes += "<iframe src=\""+urls[i]+"+\" /><br>";

document.write(

	'<html><head></head>'+
	
	'<body>'+
		iframes+
		
		/*
		'<span style="font-family:'courier new',monospoace;font-size:10pt">'+
			document.location.href+'<br>'+
			document.getElementById('long_url').innerHTML+'<br>'+
			document.getElementById('clicks').firstChild.innerHTML+
		'</span>'+
		*/
	'</body></html>'
);