javascript:

var url = "http://google-plus-1-bookmarklet.googlecode.com/svn/trunk/admin/short_urls.txt";

document.write(

	'<html><head>'+
		'<script type="text/javascript">'+
			'function doStuff(){'+
				'alert(document.getElementById(\'hidden\').contentWindow.document.innerHTML);'+
			'}'+
		'</script>'+
	'</head>'+
	
	'<body>'+
		'<iframe src="'+url+'" id="hidden" style="display:none" onload="doStuff();" />'+
		
		/*
		'<span style="font-family:'courier new',monospoace;font-size:10pt">'+
			document.location.href+'<br>'+
			document.getElementById('long_url').innerHTML+'<br>'+
			document.getElementById('clicks').firstChild.innerHTML+
		'</span>'+
		*/
	'</body></html>'
);