/* Copyright as per the footer notice on plus1.atspace.co.uk */
var u = document.location.search,h=0,b,t,po;
function insertPlusOne(u) {
	po = document.createElement('div');
	po.style.marginTop = '5%';
	po.style.marginBottom = '5%';
	var g = document.createElement('g:plusone');
	g.setAttribute('size', 'tall');
	g.setAttribute('callback', "plusone_vote");
	g.setAttribute('href', decodeURIComponent(u));
	po.appendChild(g);
	b.appendChild(po);
	var e = window.document.createElement('script');
	e.src = 'https://apis.google.com/js/plusone.js';
	e.innerHTML = '{lang: \'en-GB\'}';
	document.head.appendChild(e);
}

function toggleHelp(el){
	if(h==0){
		var tr2 = document.createElement('tr');
		t.appendChild(tr2);
		var td3 = document.createElement('td');
		td3.innerHTML = '<span class="hint" title="Enter the URL you want to +1">1<img src="ua.gif"></span>';
		tr2.appendChild(td3);
		var td4 = document.createElement('td');
		td4.innerHTML = '<span class="hint" title="Click the button">2<img src="ua.gif"></span>';
		tr2.appendChild(td4);
		var tmp = document.createElement('span');
		tmp.innerHTML += '<div class="hint" title="+1 your URL">3<img src="ua.gif"></div>'; //http://goo.gl/RKekT
		po.appendChild(tmp);
		el.style.cssText='font-weight:bold;color:#00F;';
		h=1;
	}
	else{
		var tmp = t.getElementsByTagName('tr')[1];
		tmp.parentNode.removeChild(tmp);
		tmp = po.getElementsByTagName('span')[0];
		tmp.parentNode.removeChild(tmp);
		el.style.cssText='font-weight:normal;color:#666680;';
		h=0;
	}
}

function contact() {
  var a = document.createElement("div");
  a.style.cssText = "z-index:999;width:100%;height:100%;cursor:wait;position:absolute;left:0;top:0;background:url('blank.gif');";
  a.title='Please wait, or click here to cancel';
  b.appendChild(a);
  var i = document.createElement("iframe");
  i.src = "http://goo.gl/8ogIy";
  i.style.display = "none";
  i.onload = a.onclick = function() { b.removeChild(a) };
  a.appendChild(i);
  b.appendChild(a);
}

function isValidUrl(u) {
	re = /(https?):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
	return (re.test((u = decodeURIComponent(u))));
}
function insertForm(){
	var f = document.createElement('form');
	f.style.cssText='width:40%;margin-left:auto;margin-right:auto;margin-top:5%;margin-bottom:5%;';
	t = document.createElement('table');
	t.cellPadding='0'; t.cellSpacing='0';
	var tr1 = document.createElement('tr');
	tr1.oncontextmenu=function(){document.getElementsByTagName('input')[0].focus();return false;}
	t.appendChild(tr1);
	var td1 = document.createElement('td');
	td1.style.cssText='border:4px solid transparent;width:100%;';
	tr1.appendChild(td1);
	var d2 = document.createElement('div');
	d2.style.cssText='border:3px solid #DFE2F2;border-bottom:3px solid #D3D5E3;cursor:text';
	d2.onclick=function(){document.getElementsByTagName('input')[0].focus()}
	td1.appendChild(d2);
	var d3 = document.createElement('div');
	d3.style.cssText='border:2px solid #EBEEFF;background-color:#FCFCFC;';
	d2.appendChild(d3);
	var e = document.createElement('input'), l=document.location.protocol+'//'+document.location.hostname;
	e.onfocus=function(){td1.style.borderColor='#E6E8F5';e.style.backgroundColor='#FFF';d3.style.borderColor='transparent';if(e.value==l)e.value='';}
	e.onblur=function(){td1.style.borderColor='transparent';e.style.backgroundColor='#FCFCFC';d3.style.borderColor='#EBEEFF';if(e.value=='http://'||e.value=='')e.value=l;}
	e.style.cssText='outline-style:none;border:0px solid transparent;background-color:#FCFCFC;font-family:\'century gothic\',sans-serif;height:100%;padding:0px;width:100%;height:100%';
	e.type = 'text';
	e.name = 'u';
	if(u) e.value = decodeURIComponent(u.substr(u.indexOf("?u=")+3));
	else e.value = l;
	d3.appendChild(e);
	var td2 = document.createElement('td');
	td2.style.cssText='border:4px solid transparent;';
	tr1.appendChild(td2);
	var e2 = document.createElement('input');
	e2.style.cssText='font-family:\'century gothic\',sans-serif;height:100%;';
	e2.type='submit';
	e2.value = "get +1";
	td2.appendChild(e2);
	f.appendChild(t);
	b.appendChild(f);
}
window.onload = function () {
	b = document.body.getElementsByTagName('div')[0];
	if(u){
		var t=u.substr(u.indexOf("?u=")+3);
		insertForm();
		insertPlusOne(t)
		if (!isValidUrl(t)){
			t=decodeURIComponent(t);
			e = document.createElement('div');
			e.style.cssText = 'color:#E01B1B;font-family:\'century gothic\',sans-serif;margin-top:5%;margin-bottom:5%;font-size:10pt;';
			if(t.indexOf('http')!=0){
				if(t.indexOf('ftp://')==0)t=t.replace('ftp://','');
				e.innerHTML = '<span style="font-weight:bold">Not working?</span><br>The +1 requires a protocol prefix&#8230;<br>'
							+ 'I want to use:<a href="http://plus1.atspace.co.uk/?u=http://'+t+'" class="errorlink">http://</a><a href="http://plus1.atspace.co.uk/?u=https://'+t+'" class="errorlink">https://</a>';
			}
			b.appendChild(e);
		}
	} else {
		insertForm();
		insertPlusOne('')
	}
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-24583930-3']);
_gaq.push(['_trackPageview']);
(function () {
		var ga = document.createElement('script');
		ga.type = 'text/javascript';
		ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ga, s);
	}
)();
	
function plusone_vote( obj ) {
	_gaq.push(['_trackEvent','plusone',obj.state]);
}