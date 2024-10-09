document.addEventListener('DOMContentLoaded', (event) => {
    //const encodeData = window.location.hash.substring(1);
    //const data = JSON.parse(atob(encodeData));
    //console.log(data);
    loadUsuarios();

});

async function eliminarUsuario(id_usuario) {
    const apiUrl = 'https://portafolio-zeta-rosy.vercel.app';  // URL de tu API en Vercel
    try {
        const response = await fetch(`${apiUrl}/deleteUsuarios/${id_usuario}`, {  // Asegúrate que aquí la URL coincide
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            alert('Usuario eliminado con éxito');
            loadUsuarios();  // Recargar la lista de usuarios después de la eliminación
        } else {
            alert('No se pudo eliminar el usuario');
        }
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        alert('Error al intentar eliminar el usuario');
    }
}
