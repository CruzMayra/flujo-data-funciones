function () {
    // Traer los elementos que se necesitan del HTML
   var botonAgregar = document.getElementById("agregar");
   var botonMostrar = document.getElementById("mostrar");
   var botonBuscar = document.getElementById("buscar");
   var botonTopTecnico = document.getElementById("top-tecnico");
   var botonTopHse = document.getElementById("top-hse");
   var result = document.getElementById('resultado');

    // Evento Click - Agregar
    var eventoAgregar = function (e) {
        e.preventDefault();
        var estudiante = agregarEstudiante();
        result.innerHTML = mostrar(estudiante);
    };

    var eventoMostrar = function (e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        result.innerHTML = mostrarLista(estudiantes);
    };

    var eventoBuscar = function (e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        var nombreEstudiante = prompt("¿Qué nombre desea buscar?");
        var estudianteBuscado = buscar(nombreEstudiante, estudiantes);
        result.innerHTML = mostrarLista(estudianteBuscado);
    };

    var eventoTopTecnico = function (e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        var estudiantesTopTecnico = topTecnico(estudiantes);
        result.innerHTML = mostrarLista(estudiantesTopTecnico);
    };

    var eventoTopHSE = function (e) {
        e.preventDefault();
        var estudiantes = obtenerListaEstudiantes();
        var estudiantesTopHSE = topHSE(estudiantes);
        result.innerHTML = mostrarLista(estudiantesTopHSE);
    };

    // Agregar eventos que correspondan
        botonAgregar.addEventListener("click", eventoAgregar);
        botonMostrar.addEventListener("click", eventoMostrar);
        botonBuscar.addEventListener("click", eventoBuscar);
        botonTopTecnico.addEventListener("click", eventoTopTecnico);
        botonTopHse.addEventListener("click", eventoTopHse);

}();
