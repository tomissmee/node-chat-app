var socket = io();

socket.on('connect', function() {
    console.log('connected to server');
});

socket.on('disconnect', function() {
    console.log('disconnected form server');
});

socket.on('newMessage', function(message){
    console.log('newMessage', message);
})