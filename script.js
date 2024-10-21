const storedUser = JSON.parse(localStorage.getItem('user'));

if (storedUser) {
    displayWelcomeMessage(storedUser.email);
} else {
    document.getElementById('auth-button').onclick = function() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple check for demo purposes
        if (email && password) {
            const user = { email, password };
            localStorage.setItem('user', JSON.stringify(user));
            displayWelcomeMessage(email);
        } else {
            showMessage('Please enter both email and password.');
        }
    };
}

function displayWelcomeMessage(email) {
    document.getElementById('auth-container').innerHTML = `
        <h1>Welcome</h1>
        <p>You are logged in as ${email}</p>
        <button id="logout-button">Logout</button>
    `;
    document.getElementById('logout-button').onclick = logout;
}

function logout() {
    localStorage.removeItem('user');
    location.reload(); // Reload to show the login form again
}

function showMessage(message) {
    document.getElementById('message').innerText = message;
}
