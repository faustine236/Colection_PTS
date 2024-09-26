document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform login validation here
    if (username === 'admin' && password === 'admin123') {
        alert('Login successful!');
        window.location.href = 'tampilan1.html'; // Redirect to the next page
    } else {
        alert('Invalid username or password. Please try again.');
    }
});