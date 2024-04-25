function downloadFile() {

  const a = document.createElement('a')

  a.href= './assets/resume.jpeg'
  a.download 
  $('body').append(a)
  a.click()

  // clean up
  $('a').remove()
}

$('.document').ready( function() {
  $('.download-button').on('click', downloadFile)
})