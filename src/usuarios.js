document.addEventListener('DOMContentLoaded', (event) => {
    //const encodeData = window.location.hash.substring(1);
    //const data = JSON.parse(atob(encodeData));
    //console.log(data);
    loadUsuarios();

});

async function loadUsuarios() {
    try {
        const response = await fetch('https://portafolio-zeta-rosy.vercel.app/usuarios', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const usuarios = await response.json();
        console.log(usuarios);

        const tableBody = document.getElementById('usuariosTbody');
        tableBody.innerHTML = '';

        usuarios.forEach(usuario => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = usuario.id_usuario;


            const nameCell = document.createElement('td');
            nameCell.textContent = usuario.nombre_usuario;


            const emailCell = document.createElement('td');
            emailCell.textContent = usuario.email;

            const deleteCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('borrar_usuario');

            deleteButton.addEventListener('click', () => eliminarUsuario(usuario.id_usuario));

            deleteCell.appendChild(deleteButton);

            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(emailCell);
            row.appendChild(deleteCell);

            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error(error);
    }
}