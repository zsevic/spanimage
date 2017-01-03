function injectScript(file,node){
	var body=document.getElementsByTagName(node)[0];
	var script=document.createElement('script');
	script.setAttribute('type','text/javascript');
	script.setAttribute('src',file);
	body.appendChild(s);
}

chrome.extension.onMessage.addListener(function(message,sender,callback){
	if(message.do=="span2image"){
        injectScript(chrome.extension.getURL('injected.min.js'),'body');
	}
});
