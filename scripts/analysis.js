document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chat-input');
    const sendChatButton = document.getElementById('send-chat');
    const graphsContainer = document.querySelector('.graphs-container');

    // Placeholder for predefined graphs
    graphsContainer.innerHTML = '<h2>Predefined Graphs</h2><p>Graphs will be displayed here.</p>';

    sendChatButton.addEventListener('click', () => {
        const message = chatInput.value;
        if (message) {
            addMessage('user', message);
            chatInput.value = '';
            // Simulate a bot response
            setTimeout(() => {
                addMessage('bot', `You said: "${message}"`);
            }, 500);
        }
    });

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
