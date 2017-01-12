var i=0;
function start(info,tab){
    chrome.tabs.query({
	   "active":true,
	   "currentWindow":true
    },function(tabs){
	   chrome.tabs.sendMessage(tabs[0].id,{
			"counter":i+=1
	       });
    });
}

chrome.contextMenus.create({
	"title":"There is no way back!",
	"contexts":["selection"],
	"onclick":start
});
