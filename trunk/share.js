bg1 = 'background:-moz-linear-gradient(top,rgba(167,207,223,0.5) 0,rgba(35,83,138,0.5) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,rgba(167,207,223,0.5)),color-stop(100%,rgba(35,83,138,0.5)));background:-webkit-linear-gradient(top,rgba(167,207,223,0.5) 0,rgba(35,83,138,0.5) 100%);background:-o-linear-gradient(top,rgba(167,207,223,0.5) 0,rgba(35,83,138,0.5) 100%);background:-ms-linear-gradient(top,rgba(167,207,223,0.5) 0,rgba(35,83,138,0.5) 100%);background:linear-gradient(top,rgba(167,207,223,0.5) 0,rgba(35,83,138,0.5) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#80a7cfdf\',endColorstr=\'#8023538a\',GradientType=0);';
bg2 = 'background:#fff;background:-moz-linear-gradient(top,rgba(255,255,255,1) 0,rgba(229,229,229,1) 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,rgba(255,255,255,1)),color-stop(100%,rgba(229,229,229,1)));background:-webkit-linear-gradient(top,rgba(255,255,255,1) 0,rgba(229,229,229,1) 100%);background:-o-linear-gradient(top,rgba(255,255,255,1) 0,rgba(229,229,229,1) 100%);background:-ms-linear-gradient(top,rgba(255,255,255,1) 0,rgba(229,229,229,1) 100%);background:linear-gradient(top,rgba(255,255,255,1) 0,rgba(229,229,229,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#ffffff\',endColorstr=\'#e5e5e5\',GradientType=0);';
if (mpo = document.getElementById('mygp1share')){
	mpo.style.display = (mpo.style.display == 'block' ? 'none' : 'block');
	void(0);
}
else{
	d = document.createElement('div');
	d.setAttribute('onclick','this.style.display=\'none\'');
	d.id = 'mygp1share';
	d.setAttribute('oncontextmenu','return false');
	d.style.cssText = 'display:block;width:100%;height:100%;text-align:center;position:fixed;z-index:999;left:0px;top:0px;'+bg1;
	d.innerHTML = '<iframe src="https://plusone.google.com/u/0/_/+1/confirm?hl=en-GB&url='+encodeURIComponent(window.location.href)+'" width="455" height="390" id="mygp1shareframe" style="overflow-y:hidden;border:0;margin-left:auto;margin-right:auto;margin-top:'+((window.innerHeight-390)/2)+'px;'+bg2+'" scrolling="no"><p>Your browser does not support iframes.</p><a>Please click here instead.</a></iframe>';
	document.body.appendChild(d);
	window.onresize = function() {
		if(window.innerHeight < 390) document.getElementById('mygp1shareframe').style.marginTop = '0px';
		else document.getElementById('mygp1shareframe').style.marginTop = ((window.innerHeight-390)/2) + 'px';
	};
}