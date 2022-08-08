function cargarContacto(){
    fetch("http://www.raydelto.org/agenda.php").then(function(contactos){
        return contactos.json();
    }).then(function(contactos){
        console.log(contactos);
        const listado = document.getElementById("lista")
        for(let i = 0; i<contactos.length; i++){
         const primer = contactos[i];
         const divContacto = document.createElement('div')
         const nombreContacto = document.createElement('h3')
         
         const apellidoContacto = document.createElement('h3')
         const numeroContacto = document.createElement('h3')
         
         nombreContacto.textContent = primer.nombre
         apellidoContacto.textContent = primer.apellido,
         numeroContacto.textContent  = primer.telefono   
         
         divContacto.classList.add('tarea')
     
         divContacto.appendChild(nombreContacto)
         divContacto.appendChild(apellidoContacto)
         divContacto.appendChild(numeroContacto)
     
         listado.appendChild(divContacto)
    
      }    
    });
}