App.notifications = App.cable.subscriptions.create("WorkerHubChannel", {
    connected: function() {},
    disconnected: function() {},
    received: function(data) {}
});
