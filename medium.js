if(mpo=document.getElementById('myplusone'))mpo.style.display=(mpo.style.display=='block'?'none':'block');else{bgs="background:rgb(174,188,191);background:-moz-linear-gradient(top,rgba(174,188,191,1)0%,rgba(110,119,116,1)50%,rgba(10,14,10,1)51%,rgba(10,8,9,1)100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,rgba(174,188,191,1)),color-stop(50%,rgba(110,119,116,1)),color-stop(51%,rgba(10,14,10,1)),color-stop(100%,rgba(10,8,9,1)));background:-webkit-linear-gradient(top,rgba(174,188,191,1)0%,rgba(110,119,116,1)50%,rgba(10,14,10,1)51%,rgba(10,8,9,1)100%);background:-o-linear-gradient(top,rgba(174,188,191,1)0%,rgba(110,119,116,1)50%,rgba(10,14,10,1)51%,rgba(10,8,9,1)100%);background:-ms-linear-gradient(top,rgba(174,188,191,1)0%,rgba(110,119,116,1)50%,rgba(10,14,10,1)51%,rgba(10,8,9,1)100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#aebcbf',endColorstr='#0a0809',GradientType=0);background:linear-gradient(top,rgba(174,188,191,1)0%,rgba(110,119,116,1)50%,rgba(10,14,10,1)51%,rgba(10,8,9,1)100%);";div=document.createElement('div');div.id='myplusone';div.style.cssText=bgs;div.style.display='block';div.style.position='fixed';div.style.top='8px';div.style.right='8px';div.style.zIndex='9999';div.style.padding='5px';div.style.webkitUserSelect='none';e=document.createElement('g:plusone');e.setAttribute('size','medium');div.appendChild(e);document.body.appendChild(div);e=window.document.createElement('script');e.setAttribute('src','https://apis.google.com/js/plusone.js');e.innerHTML='{lang: \'en-GB\'}';document.head.appendChild(e);};