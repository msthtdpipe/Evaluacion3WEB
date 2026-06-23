const formulario = document.getElementById('formulario-tareas');
const inputNombre = document.getElementById('nombre-tarea');
const selectAsignatura = document.getElementById('asignatura');
const inputFecha = document.getElementById('fecha-entrega');
const inputHoras = document.getElementById('horas-estimadas');
const contenedorTareas = document.getElementById('contenedor-dinamico');


document.addEventListener('DOMContentLoaded', cargarTareas);

function obtenerTareasStorage() {
    const tareasGuardadas = localStorage.getItem('tareasEstudio');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
}

function cargarTareas() {
    const tareas = obtenerTareasStorage();
    tareas.sort((a, b) => {     // PARA ORDENAR LAS TAREAS POR FECHA DE MENOR A MAYOR POR PROXIMIDAD DE ENTREGA
        if (a.fecha < b.fecha) return -1;       
        if (a.fecha > b.fecha) return 1;
        return 0;
    });

    contenedorTareas.innerHTML = ''; 
    tareas.forEach(tarea => renderizarTareaDOM(tarea));
}

function guardarTareaStorage(tarea) {
    const tareas = obtenerTareasStorage();
    tareas.push(tarea);
    localStorage.setItem('tareasEstudio', JSON.stringify(tareas));
}

function eliminarTareaStorage(id) {
    let tareas = obtenerTareasStorage();
    tareas = tareas.filter(tarea => tarea.id !== id);
    localStorage.setItem('tareasEstudio', JSON.stringify(tareas));
}


function mostrarError(input, idError, mensaje) {
    const spanError = document.getElementById(idError);
    spanError.textContent = mensaje;
    input.classList.remove('campo-valido');
    input.classList.add('campo-invalido');
}

function mostrarExito(input, idError) {
    const spanError = document.getElementById(idError);
    spanError.textContent = '';
    input.classList.remove('campo-invalido');
    input.classList.add('campo-valido');
}

function validarFormulario() {
    let esValido = true;
    const nombre = inputNombre.value.trim();
    const asignatura = selectAsignatura.value;
    const fecha = inputFecha.value;
    const horas = parseInt(inputHoras.value, 10);

    if (nombre === '') {
        mostrarError(inputNombre, 'error-nombre', 'El nombre es obligatorio.');
        esValido = false;
    } else if (nombre.length < 5 || nombre.length > 50) {
        mostrarError(inputNombre, 'error-nombre', 'Debe tener entre 5 y 50 caracteres.');
        esValido = false;
    } else {
        const regexLetrasyNumeros    = /^[a-zA-Z0-9\s]+$/;
        if (!regexLetrasyNumeros.test(nombre)) {
            mostrarError(inputNombre, 'error-nombre', 'Solo se permiten letras y números.');
            esValido = false;
        } else {
            mostrarExito(inputNombre, 'error-nombre');
        }
    }


    if (asignatura === '') {
        mostrarError(selectAsignatura, 'error-asignatura', 'Seleccione una asignatura.');
        esValido = false;
    } else {
        mostrarExito(selectAsignatura, 'error-asignatura');
    }

    if (fecha === '') {
        mostrarError(inputFecha, 'error-fecha', 'La fecha es obligatoria.');
        esValido = false;
    } else {
        const fechaIngresada = new Date(fecha + 'T00:00:00');
        const hoy = new Date();
        hoy.setHours(0,0,0,0);

        if (fechaIngresada < hoy) {
            mostrarError(inputFecha, 'error-fecha', 'La fecha no puede ser anterior a hoy.');
            esValido = false;
        } else {
            mostrarExito(inputFecha, 'error-fecha');
        }
    }


    if (isNaN(horas) || horas < 1) {
        mostrarError(inputHoras, 'error-horas', 'Ingrese un número válido mayor a 0.');
        esValido = false;
    } else if (asignatura === 'Integracion de Competencias I' && horas < 5) {
        mostrarError(inputHoras, 'error-horas', 'Esta asignatura requiere al menos 5 horas de dedicación.');
        esValido = false;
    } else {
        mostrarExito(inputHoras, 'error-horas');
    }

    return esValido;
}


formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (validarFormulario()) {
        const nuevaTarea = {
            id: Date.now().toString(), 
            nombre: inputNombre.value.trim(),
            asignatura: selectAsignatura.value,
            fecha: inputFecha.value,
            horas: inputHoras.value
        };

        guardarTareaStorage(nuevaTarea);
        cargarTareas();
        
        formulario.reset();
        document.querySelectorAll('.campo-valido').forEach(el => el.classList.remove('campo-valido'));
    }
});

formulario.addEventListener('input', function(event) {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'SELECT') {
        event.target.classList.remove('campo-invalido');
        const spanId = event.target.nextElementSibling.id;
        if(spanId) {
            document.getElementById(spanId).textContent = '';
        }
    }
});


function renderizarTareaDOM(tarea) {
    const divItem = document.createElement('div');
    divItem.classList.add('tarea-item');
    divItem.id = `tarea-${tarea.id}`;

    const divInfo = document.createElement('div');  //INFO DEL CONTENEDOR DE TAREAS
    divInfo.classList.add('tarea-info');
    divInfo.innerHTML = `
        <strong>${tarea.nombre}</strong>
        <span>${tarea.asignatura} | Entrega: ${tarea.fecha} | ${tarea.horas} horas</span>
    `;

    const btnEliminar = document.createElement('button');
    btnEliminar.classList.add('btn-eliminar');
    btnEliminar.textContent = 'Eliminar';
    
    btnEliminar.addEventListener('click', function() {
        eliminarTareaStorage(tarea.id);
        divItem.remove(); 
    });

    divItem.appendChild(divInfo);
    divItem.appendChild(btnEliminar);
    contenedorTareas.appendChild(divItem);
}