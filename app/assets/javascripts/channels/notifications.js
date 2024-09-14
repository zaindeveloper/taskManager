App.notifications = App.cable.subscriptions.create("NotificationsChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {

      if (data.count_status == "yes") {
        if (data.notification_count != "0" && data.notification_count != 0) {
          $("#notifi_count").html(data.notification_count);
        }
      }
      if (data.sound_status == "yes") {
        var sound = document.getElementById("normal_notification");
        sound.play();
      }
  }
});
