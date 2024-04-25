function toggleMenu() {
  const menu = $('#left-navbar-section')
  if( menu.css('display') == 'none' ) {
    menu.css('display', 'flex')
  }
  else {
    menu.css('display', 'none')
  }
}


$('.document').ready( function() {

  $('.navbar-mobile-button').on('click', toggleMenu)
})