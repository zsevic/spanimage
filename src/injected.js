import domToImage from 'dom-to-image'

;(async () => {
  if (window.getSelection) {
    const target = window.getSelection().anchorNode.parentElement
    let dataUrl = await domToImage.toJpeg(target)
    let link = document.createElement('a')
    link.download = 'image.jpeg'
    link.href = dataUrl
    link.click()
  }
})()
