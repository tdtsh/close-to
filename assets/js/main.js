$(function() {

  $('#send_message').click(function() {

    $('#send_message').hide();
    $.ajax({
      type: 'post',
      url: '/contact',
      data: {
        text: $('#message_body').val(),
        from: $('#from_email').val(),
        subject: $('#subject').val(),
        name: $('#from_name').val()
      },
      success: function(e) {
        //console.log(JSON.stringify(e));
        console.log('success');
        alert('送信しました');
        setTimeout(function() {
          window.location = "/";
        }, 800);
      },
      error: function(e) {
        console.log('error');
        //console.log(JSON.stringify(e));
        var message = 'unknown error';
        if (e && e.responseText) {
          message = e.responseText;
        }
        alert(message);
      }
    });

    /*
    $.post(
      '/mail/contact',
      {
        text: $('#feedback').val(),
        from: $('#from_email').val(),
        name: $('#from_name').val()
      },
      function (e) {
        //window.location = "/chat";
        console.log(JSON.stringify(e));
        alert('送信しました');
      }
    ).fail(function(res){
      console.log(JSON.stringify(res));
      alert('error' + JSON.stringify(res));
    });
    */

  });
});

