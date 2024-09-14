

const beamsClient = new PusherPushNotifications.Client({
    instanceId: 'b020bcf4-2d7a-476f-820a-66e283e64511',
  });

  beamsClient.start()
    .then(() => beamsClient.addDeviceInterest("user-"+$('#my_user_div').data('uid')))
    .then(() => console.log('Successfully registered and subscribed!'))
    .catch(console.error);
