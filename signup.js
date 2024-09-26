document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;

    
    if (username === 'admin' && password === 'admin123' && confirmpassword === 'admin123') {
        alert('sign successful!');
        window.location.href = 'tampilan1.html'; 
    } else {
        alert('Invalid username or password. Please try again.');
    }
});