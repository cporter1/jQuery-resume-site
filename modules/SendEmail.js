function sendEmail() {
  const name    = $('#name-input').val()
  const email   = $('#email-input').val()
  const message = $('#message-textarea').val()

  $.ajax({
    url: 'https://api.emailjs.com/api/v1.0/email/send' , 
    type: 'POST',
    crossDomain: true,
    data: JSON.stringify({
            service_id: 'service_vs246fs',
            template_id: 'template_q65g9ef',
            user_id: 'KrejWp8Qji292CEL7',
            template_params: {email, name, message}
          }),
    contentType: 'application/json'
  })
  .catch((error) => {
    console.log(error)
  })
}

function clearFields() {

}

$('.document').ready( function() {
  $('.contactme-submit-button').on('click' , sendEmail)
})