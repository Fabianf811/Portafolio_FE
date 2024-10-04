document.addEventListener('DOMContentLoaded', (event) => {
    //const encodeData = window.location.hash.substring(1);
    //const data = JSON.parse(atob(encodeData));
    //console.log(data);
    loadUsuarios();

});

async function loadUsuarios() {
    try {
        const response = await fetch('http://localhost:3000/usuarios', {
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

            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(emailCell);

            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error(error);
    }
}