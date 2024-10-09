document.addEventListener('DOMContentLoaded', (event) => {
    //const encodeData = window.location.hash.substring(1);
    //const data = JSON.parse(atob(encodeData));
    //console.log(data);
    loadClientes();

});

async function loadClientes() {
    try {
        const response = await fetch('https://portafolio-zeta-rosy.vercel.app/clientes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const clientes = await response.json();
        console.log(clientes);

        const tableBody = document.getElementById('clientesTbody');
        tableBody.innerHTML = '';

        clientes.forEach(cliente => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = cliente.id_cliente;

            const nameCell = document.createElement('td');
            nameCell.textContent = cliente.nombre;

            const lastNameCell = document.createElement('td');
            lastNameCell.textContent = cliente.apellido;

            const emailCell = document.createElement('td');
            emailCell.textContent = cliente.email;

            const phoneCell = document.createElement('td');
            phoneCell.textContent = cliente.telefono;

            const companyCell = document.createElement('td');
            companyCell.textContent = cliente.empresa;

            const positionCell = document.createElement('td');
            positionCell.textContent = cliente.cargo;

            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(lastNameCell);
            row.appendChild(emailCell);
            row.appendChild(phoneCell);
            row.appendChild(companyCell);
            row.appendChild(positionCell);

            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error(error);
    }
}