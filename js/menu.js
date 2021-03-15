var btnMenu = document.getElementById('btn-menu');

var nav = document.getElementById('nav');

btnMenu.addEventListener('click', function (){
    nav.classList.toggle('mostrar');
});


/*validar inicio alumno o profesor*/

function abrir_Vent(){
    document.getElementById('vent').style.display='block'
}

function cerrar_Vent(){
    document.getElementById('vent').style.display='none';
}

function abrir_login(){
    document.getElementById('iniciar--secion').style.display='block';
}

function redirigir_docente(){
    location.href = 'docentes.html';
}


