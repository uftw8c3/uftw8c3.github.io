const users = [
    { email: 'user1@webtest.com', password: 'password1' },
    { email: 'user2@webtest.com', password: 'password2' },
    { email: 'user3@webtest.com', password: 'password3' },
];

document.getElementById('auth-button').onclick = function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the email and password match a predefined user
    const user = users.find(u => u.email === email && u.password === password);

    if (user = 'user2@webtest.com') {
        displayHelpMessage();
    }

    if (user = 'user1@webtest.com') {
        displayWelcomeMessage(user.email)
    }

    if (user = 'user3@webtest.com') {
        displayWelcomeMessage(user.email);
    } else {
        showMessage('Invalid email or password. Please try again.');
    }
};

function displayWelcomeMessage(email) {
    document.getElementById('auth-container').innerHTML = `
        <h1>Welcome</h1>
        <p>You are logged in as ${email}</p>
        <button id="logout-button">Logout</button>
    `;
    document.getElementById('logout-button').onclick = logout;
}

function displayHelpMessage() {
    document.getElementById('auth-container').innerHTML = `
        <h1>Now the next step</h1>
        <p>Go to Afonso to ask him to give you the file.</p>`
}

function logout() {
    document.getElementById('auth-container').innerHTML = `
        <h1 id="auth-title">Login</h1>
        <input type="email" id="email" placeholder="Email" required>
        <input type="password" id="password" placeholder="Password" required>
        <button id="auth-button">Login</button>
        <div id="message"></div>
    `;
}

function showMessage(message) {
    document.getElementById('message').innerText = message;
}
