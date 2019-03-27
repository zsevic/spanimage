const injectScript = (file, node, counter) => {
  const body = document.getElementsByTagName(node)[0]
  if (counter !== 1) {
    body.removeChild(body.lastChild)
  }

  const script = document.createElement('script')
  script.src = file
  script.setAttribute('type', 'module')
  body.appendChild(script)
}

chrome.extension.onMessage.addListener((message, sender, callback) => {
  injectScript(
    chrome.extension.getURL('dist/injected.js'),
    'body',
    message.counter
  )
})
