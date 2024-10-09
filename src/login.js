window.onload = (event) => {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    const registerForm = document.getElementById('registerForm');
    const registerMessage = document.getElementById('registerMessage');

    loginForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const nombre_usuario = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('https://portafolio-zeta-rosy.vercel.app/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"nombre_usuario": nombre_usuario, "password": password}),
            });

            const data = await response.json();
            console.log(data);
            const encodeData = btoa(JSON.stringify(data));
            console.log(encodeData);

            if (response.ok) {
                loginMessage.textContent = 'Login Exitoso';
                loginMessage.style.color = 'green';
                window.location.href = `/dashboard.html#${encodeData}`;
            } else {
                loginMessage.textContent = data.message || 'Error en el Login';
                loginMessage.style.color = 'red';
            }
        } catch (error) {
            console.log(error);
            loginMessage.textContent = 'Hubo un Error en el Login';
            loginMessage.style.color = 'red';
        }
    });

    registerForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const newUserName = document.getElementById('new__username').value;
        const newEmail = document.getElementById('registerEmail').value;
        const newPassword = document.getElementById('registerPassword').value;

        try {
            const response = await fetch('https://portafolio-zeta-rosy.vercel.app/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"nombre_usuario": newUserName, "email": newEmail, "password": newPassword}),
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                registerMessage.textContent = 'Registro Exitoso';
                registerMessage.style.color = 'green'; 
            } else {
                registerMessage.textContent = data.message || 'Error en el Registro';
                registerMessage.style.color = 'red';
            }
        } catch (error) {
            console.log(error);
            registerMessage.textContent = 'Hubo un Error en el Registro';
            registerMessage.style.color = 'red';
        }
    });
};
