App.notifications = App.cable.subscriptions.create("UpdateAdminDashboardChannel", {
    connected: function() {},
    disconnected: function() {},
    received: function(data) {

      $("#admin_message_count").html(data.conversation_count);
      $("#"+data.conversation_box).removeClass("unread-message");
        $("#"+data.conversation_list).remove();
        $("#"+data.filter_all_count).html(data.filter_all_count_value);
        $("#"+data.filter_me_count).html(data.filter_me_count_value);
        $("#"+data.filter_all_group_count).html(data.filter_all_group_count_value);
        $("#"+data.filter_team_count1).html(data.filter_team_count1_value);
        $("#"+data.filter_user_count1).html(data.filter_user_count1_value);

    }
});
