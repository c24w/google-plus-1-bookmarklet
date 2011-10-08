function f(e) {
	if ("pushState" in history) {
		window.location.hash = 'previews';
		history.pushState("", document.title, window.location.pathname)
	} else {
		var y = 0;
		if (e.offsetParent) {
			do {
				y += e.offsetTop
			} while (e = e.offsetParent);
			window.scroll(0, y)
		}
	}
	setTimeout(function () {
			td.style.color = '#f00';
			setTimeout(function () {
					td.style.color = '#000';
					setTimeout(function () {
							td.style.color = '#f00';
							setTimeout(function () {
									td.style.color = '#000'
								}, 500)
						}, 500)
				}, 1000)
		}, 500)
}
if (e = document.getElementById('previews'))
	f(e);
else {
	o = new Array();
	t = document.getElementById('wikicontent').getElementsByTagName('table')[0];
	td = document.createElement('td');
	td.id = 'previews';
	td.innerHTML = '&#8595;Preview&#8595;';
	td.style.cssText = "font-weight:bold;border: 1px solid #ccc; padding: 5px;";
	t.getElementsByTagName('tr')[0].appendChild(td);
	for (i = 0; i < (tts = t.getElementsByTagName('tt')).length; i++) {
		(tt = tts[i]).parentNode.parentNode.appendChild(e = document.createElement('td'));
		e.setAttribute('style', tt.parentNode.getAttribute('style'));
		e.setAttribute('align', 'middle');
		e.innerHTML = "<a href=\"" + tt.innerHTML + "\" onclick=\"for(i in o)o[i].firstChild.style.display='inline';this.style.display='none';if(e=document.getElementById('myplusone'))e.parentNode.removeChild(e);\" style=\"font-weight:bold;text-decoration:none;\">+1</a>";
		o[i] = e
	}
	s = document.createElement('script');
	s.type - 'text/javascript';
	s.src = 'http://platform.twitter.com/widgets.js';
	document.head.appendChild(s);
	s = s.cloneNode(false);
	s.src = 'http://www.google.com/buzz/api/button.js';
	document.head.appendChild(s);
	d = document.createElement('div');
	d.style.width = '100%';
	d.style.backgroundColor = '#FF0';
	d.innerHTML='<div style="color:#F00;margin-right:30px;font-weight:bold;display:inline;">Please spread the word:</div><div style="display:inline;"><div class="fb-like" data-href="http://code.google.com/p/google-plus-1-bookmarklet" data-send="true" data-layout="button_count" data-width="110" data-show-faces="false"></div><div style="display:inline;"><a href="http://twitter.com/share" class="twitter-share-button" data-url="http://code.google.com/p/google-plus-1-bookmarklet" data-text="Google Plus +1 Bookmarklets" data-count="horizontal">Tweet</a></div><div><div style="display:inline;"><div id="fb-root"></div></div><div><a class="google-buzz-button" href="http://www.google.com/buzz/post" data-button-style="small-count" data-locale="en_GB" data-imageurl="http://img32.imageshack.us/img32/552/codebuzz.png"></a></div>';
	document.getElementById('wikicontent').insertBefore(d,document.getElementById('wikicontent').firstChild);
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) {return;}
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/all.js#appId=120853844681261&xfbml=1";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	f(td);
}