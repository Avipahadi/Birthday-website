document.getElementById('message-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        const messageContainer = document.getElementById('messages-container');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';

        const nameElement = document.createElement('h3');
        nameElement.textContent = name;

        const messageElement = document.createElement('p');
        messageElement.textContent = message;

        messageDiv.appendChild(nameElement);
        messageDiv.appendChild(messageElement);

        messageContainer.appendChild(messageDiv);

        // Clear the form
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    }
});

