// Mensaje de bienvenida al cargar la pagina
document.addEventListener('DOMContentLoaded', function() {
    console.log('Pagina cargada correctamente');

    // Efecto activo en navegacion
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.style.fontWeight = 'normal');
            this.style.fontWeight = 'bold';
        });
    });
});