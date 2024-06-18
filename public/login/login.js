document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
  
    fetch('/login/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then(data => {
          throw new Error(data.message);
        });
      }
    })
    .then(data => {
      if (data.success) {
        window.location.href = data.redirectUrl; // Redirect to /profs
      }
    })
    .catch(error => {
      message.style.color = 'red';
      message.textContent = error.message || 'An error occurred';
    });
  });
  