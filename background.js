let i = 0
function start (info, tab) {
  chrome.tabs.query({
    'active': true,
    'currentWindow': true
  }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      'counter': i += 1
    })
  })
}

chrome.contextMenus.create({
  'title': 'Download it as an image',
  'contexts': ['selection'],
  'onclick': start
})
