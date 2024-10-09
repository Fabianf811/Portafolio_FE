document.addEventListener('DOMContentLoaded', (event) => {
    //const encodeData = window.location.hash.substring(1);
    //const data = JSON.parse(atob(encodeData));
    //console.log(data);
    loadConsultas();

});

async function loadConsultas() {
    try {
        const response = await fetch('https://portafolio-zeta-rosy.vercel.app/consultas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const consultas = await response.json();
        console.log(consultas);

        const tableBody = document.getElementById('consultasTbody');
        tableBody.innerHTML = '';

        consultas.forEach(consulta => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = consulta.id_consulta;

            const clienteIdCell = document.createElement('td');
            clienteIdCell.textContent = consulta.cliente_id;

            const serviceCell = document.createElement('td');
            serviceCell.textContent = consulta.servicio;

            const consultCell = document.createElement('td');
            consultCell.textContent = consulta.consulta;

            const dateCell = document.createElement('td');
            dateCell.textContent = consulta.fecha_envio;

            row.appendChild(idCell);
            row.appendChild(clienteIdCell);
            row.appendChild(serviceCell);
            row.appendChild(consultCell);
            row.appendChild(dateCell);

            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error(error);
    }
}