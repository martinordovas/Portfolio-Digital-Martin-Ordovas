const barraNavegacion = document.getElementById('navbarPaginaPrincipal');
const contenidoMenu = document.getElementById('menuNavbar');
const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]')
const altura = 50;

function actualizarNavbar() {
    if (window.scrollY >= altura || contenidoMenu.classList.contains('show')) {
        barraNavegacion.classList.add('cambioNavbar');
    } else {
        barraNavegacion.classList.remove('cambioNavbar');
    }
}

window.onscroll = function () {
    actualizarNavbar();
};

contenidoMenu.addEventListener('show.bs.collapse', function () {
    barraNavegacion.classList.add('cambioNavbar');
});

contenidoMenu.addEventListener('hide.bs.collapse', function () {
    if (window.scrollY <= altura) {
        barraNavegacion.classList.remove('cambioNavbar');
    }
});

window.addEventListener('activate.bs.scrollspy', function () {
    const activeLink = document.querySelector('.navbar-nav .nav-link.active');
    if (activeLink) {
        const targetId = activeLink.getAttribute('href');
        document.querySelectorAll('.dot').forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('href') === targetId) {
                dot.classList.add('active');
            }
        });
    }
});