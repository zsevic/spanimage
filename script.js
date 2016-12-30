function convertAndDownload(e){
    e.preventDefault();
    html2canvas(e.target.parentNode,{
        onrendered:function(canvas){
            document.removeEventListener('contextmenu',convertAndDownload);
            return Canvas2Image.saveAsPNG(canvas);
        }
    });
}

chrome.extension.onMessage.addListener(function(message,sender,callback){
	if(message.do=="span2image"){
        document.addEventListener('contextmenu',convertAndDownload);
	}
});