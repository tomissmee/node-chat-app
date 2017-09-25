var socket = io();

socket.on('connect', function() {
    console.log('connected to server');
});

socket.on('disconnect', function(){
    console.log('Disconnect from server');
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
});



