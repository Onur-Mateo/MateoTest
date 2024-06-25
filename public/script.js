// Pipedrive SDK Initialization
window.addEventListener('load', function() {
    const pipedrive = new Pipedrive.Client();

    pipedrive.initialize();

    pipedrive.ready(() => {
        // SDK is ready
        console.log('Pipedrive SDK initialized');
    });
});

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText === '') return;

    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'sent');
    messageElement.textContent = messageText;
    
    document.getElementById('chat-messages').appendChild(messageElement);
    messageInput.value = '';
    messageInput.focus();
    
    // Simulate receiving a message
    setTimeout(() => receiveMessage('Received: ' + messageText), 1000);
}

function receiveMessage(text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'received');
    messageElement.textContent = text;

    document.getElementById('chat-messages').appendChild(messageElement);
}
