/*window.onload = () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const empresa = document.getElementById('empresa').value;
            const cargo = document.getElementById('cargo').value;

            try {
                const response = await fetch('http://localhost:3000/createClientes', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nombre,
                        apellido,
                        email,
                        telefono,
                        empresa,
                        cargo
                    })
                });

                const data = await response.json();
                const mensaje = document.getElementById('formMessage');

                if (response.ok) {
                    mensaje.textContent = 'Cliente creado exitosamente';
                    mensaje.style.color = 'green';
                } else {
                    mensaje.textContent = 'Error al crear el cliente: ' + (data.message || 'Error desconocido');
                    mensaje.style.color = 'red';
                }
            } catch (error) {
                console.error('Error:', error);
                document.getElementById('formMessage').textContent = 'Hubo un error en la solicitud';
                document.getElementById('formMessage').style.color = 'red';
            }
        });
    } else {
        console.error('El formulario no se encontró');
    }
};*/

window.addEventListener('load', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const empresa = document.getElementById('empresa').value;
            const cargo = document.getElementById('cargo').value;
            const servicio = document.getElementById('opciones__servicios').value;
            const consulta = document.getElementById('descripcion_consulta').value;

            try {
                const response = await fetch('http://localhost:3000/createClienteConsulta', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nombre,
                        apellido,
                        email,
                        telefono,
                        empresa,
                        cargo,
                        servicio,
                        consulta
                    })
                });

                const data = await response.json();
                const formMessage = document.getElementById('formMessage');

                if (response.ok) {
                    formMessage.textContent = 'Cliente y consulta creados exitosamente';
                    formMessage.style.color = 'green';
                } else {
                    formMessage.textContent = 'Error al crear cliente o consulta: ' + data.message;
                    formMessage.style.color = 'red';
                }
            } catch (error) {
                console.error('Error:', error);
                document.getElementById('formMessage').textContent = 'Hubo un error en la solicitud';
                document.getElementById('formMessage').style.color = 'red';
            }
        });
    }
});


