export function downloadImage(baseImage: string, fileName: string = 'image') {
  const imgUrl = baseImage
  // 如果浏览器支持msSaveOrOpenBlob方法（也就是使用IE浏览器的时候），那么调用该方法去下载图片
  if ((window.navigator as any).msSaveOrOpenBlob) {
    let bstr = atob(imgUrl.split(',')[1])
    let n = bstr.length
    let u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    let blob = new Blob([u8arr]);
    (window.navigator as any).msSaveOrOpenBlob(blob, fileName + '.' + 'png')
  } else {
    // 这里就按照chrome等新版浏览器来处理
    let a = document.createElement('a')
    a.href = imgUrl
    a.setAttribute('download', fileName)
    a.click()
  }
}
