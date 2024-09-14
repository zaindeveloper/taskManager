App.message = App.cable.subscriptions.create("MessageChannel", {

  connected: function() {
    // Called when the subscription is ready for use on the server
  },
  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },
  received: function(data) {
    
      if ($("#"+data.chat_area).length  == 0)
      {
        $("#"+data.conversation_box).addClass("unread-message");
        var unread_div =   $("#"+data.conversation_box).clone(true);
          $("#"+data.conversation_box).remove();
        $("#company_worker_lister").prepend(unread_div)
          if (data.sound_status == "yes") {
              var sound = document.getElementById("normal_notification");
              sound.play();
          }
          if (data.count_status == "yes") {
              $("#" + data.message_count).html(data.conversation_count);
          }
      }
      if ($("#"+data.conversation_list_box).length != 0)
      {
          if (data.last_message.length > 30) {
              $("#"+data.conversation_list_box).html(data.last_message)
          } else {
              $("#"+data.conversation_list_box).html(data.last_message)
          }
      }
      $("#"+data.chat_area).append(data.full_message);
      if ($(".last_message_vissable").length != 0) {
        $(".chat-app-window").scrollTop($(".chat-app-window")[0].scrollHeight);
      }
      //$(".chat-app-window").scrollTop($(".chat-app-window")[0].scrollHeight);
  }
});
