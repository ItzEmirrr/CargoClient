fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;

        const loginLink = document.querySelector('#navmenu a[href="login.html"]');
        if (loginLink) {
            loginLink.textContent = 'Profile';
            loginLink.setAttribute('href', 'profile.html');
        } else {
            console.error('Login link not found after loading header.');
        }
    })
    .catch(error => console.error('Error loading header:', error));