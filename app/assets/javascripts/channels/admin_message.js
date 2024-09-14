App.message = App.cable.subscriptions.create("AdminMessageChannel", {
  connected: function() {
  },
  disconnected: function() {
  },
  received: function(data) {
    if ($("#"+data.chat_area).length  == 0  ) {
      if  ($("#"+data.conversation_box).length == 0) {
        $("#company_worker_lister").prepend(data.full_left_message);
      } else {
        $("#"+data.conversation_box).addClass("unread-message");
        var unread_div = $("#"+data.conversation_list).clone(true);
        $("#"+data.conversation_list).remove();
        $("#company_worker_lister").prepend(unread_div);
      }
      $("#"+data.filter_all_count).html(data.filter_all_count_value);
      $("#"+data.filter_me_count).html(data.filter_me_count_value);
      $("#"+data.filter_all_group_count).html(data.filter_all_group_count_value);
      $("#"+data.filter_team_count1).html(data.filter_team_count1_value);
      $("#"+data.filter_user_count1).html(data.filter_user_count1_value);
      if (data.sound_status == "yes") {
        var sound = document.getElementById("normal_admin_notification");
        sound.play();
      }
      if (data.count_status == "yes") {
        $("#" + data.message_count).html(data.conversation_count);
      }
    }
    if ($("#"+data.conversation_list_box).length != 0) {
      if (data.last_message.length > 30) {
        $("#"+data.conversation_list_box).html(data.last_message.substring(0, 30) + "..." )
      } else {
        $("#"+data.conversation_list_box).html(data.last_message)
      }
    }
    $("#"+data.chat_area).append(data.full_message);
    if ($(".last_message_vissable").length != 0) {
    $(".chat-app-window").scrollTop($(".chat-app-window")[0].scrollHeight);
  }
  }
});