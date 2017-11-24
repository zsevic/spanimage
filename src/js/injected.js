function downloadAsImage () {
  if (window.getSelection) {
    const target = window.getSelection().anchorNode.parentElement
    html2canvas(target, {
      onrendered: function (canvas) {
        return Canvas2Image.saveAsPNG(canvas)
      }
    })
  }
}
downloadAsImage()
