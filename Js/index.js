const nombre = document.querySelector('.Nombre')
const apellido = document.querySelector('.Apellido')
const telefono = document.querySelector('.Telefono')
const btnAgregar = document.querySelector('.btn-agregar')

const listadoTareas = document.querySelector('.listado')

const db= window.localStorage
btnAgregar.onclick =() => {
    let contacto = {
        nombre: nombre.value,
        apellido: apellido.value,
        telefono: telefono.value,
    }
    fetch("http://www.raydelto.org/agenda.php", {
            method: 'POST',
            body: JSON.stringify(contacto),
            hearders: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => alert("The data was send successfully!"))
        cargarContacto(db)
}
cargarContacto(listadoTareas)