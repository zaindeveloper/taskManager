App.notifications = App.cable.subscriptions.create("UpdateDashboardChannel", {
    connected: function() {
        // Called when the subscription is ready for use on the server
    },
    disconnected: function() {
        // Called when the subscription has been terminated by the server
    },
    received: function(data) {}
});
