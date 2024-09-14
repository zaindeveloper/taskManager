App.notifications = App.cable.subscriptions.create("WorkerScheduleChannel", {
    connected: function() {

    },
    disconnected: function() {

    },
    received: function(data) {}
});
