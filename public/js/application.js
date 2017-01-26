$(document).ready(function () {
  $('.organiser').mouseenter(function () {
    $('.organisername').show()
  })
  .mouseout(function () {
    $('.organisername').hide()
  })


  let socket = io()
  $('.white').scrollTop(60 * ($('#messages div').length+1))

  socket.on(`chatmessages<%= req.params.id %>`, function(msg) {
    if (msg.sender == '<%=user.id%>') {
      $('#messages').append($(`<div class='col-md-12 panel panel-default text-right'><p>${msg.content} </p> <p style='font-size:10px'>now</p></div>`));
    } else {
      $('#messages').append($(`<div class='col-md-12 panel panel-default text-left grey'><p> ${msg.content} </p> <p style='font-size:10px'>now</p></div>`));
    }
      $('.white').scrollTop(60 * ($('#messages div').length+1))
  });

})
