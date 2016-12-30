function start(info,tab){
    chrome.tabs.query({
	   "active":true,
	   "currentWindow":true
    },function(tabs){
	   chrome.tabs.sendMessage(tabs[0].id,{
	       "do":"span2image"
	       });
    });
}

chrome.contextMenus.create({
	"title":"There is no way back!",
	"contexts":["selection"],
	"onclick":start
});