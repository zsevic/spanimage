function injectScript(file,node,counter){	
	var body=document.getElementsByTagName(node)[0];
	if(counter!==1){	
		body.removeChild(body.lastChild);
	}
	var script=document.createElement('script');
	script.src=file;
	body.appendChild(script);
}

chrome.extension.onMessage.addListener(function(message,sender,callback){
	injectScript(chrome.extension.getURL('dist/js/injected.min.js'), 'body', message.counter);
});
