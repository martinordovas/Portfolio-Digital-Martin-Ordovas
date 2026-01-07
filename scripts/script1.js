const barraNavegacion = document.getElementById('navbarPaginaPrincipal');
const contenidoMenu = document.getElementById('menuNavbar');
const altura = 50;

function actualizarNavbar(){
    if(window.scrollY >= altura || contenidoMenu.classList.contains('show')){
        barraNavegacion.classList.add('cambioNavbar');
    }else{
        barraNavegacion.classList.remove('cambioNavbar');
    }
}

window.onscroll = function() {
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