function ScrollToPage() {
  $('#' + $(this).attr('targetid'))[0].scrollIntoView({block: 'end', behavior: 'smooth'})
}

$('.document').ready( function () {
  $('.scroll-to-link').on('click', ScrollToPage)
})