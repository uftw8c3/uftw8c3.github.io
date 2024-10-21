document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const welcome = document.getElementById('welcome');

    // Sample credentials
    const validUsername = "uftw", "tio";
    const validPassword = "5423";

    if (username === validUsername && password === validPassword) {
        message.classList.add('hidden');
        welcome.classList.remove('hidden');
        welcome.textContent = `Welcome, ${username}!`;
    } else {
        message.textContent = "Error: Invalid username or password.";
        welcome.classList.add('hidden');
    }
});
