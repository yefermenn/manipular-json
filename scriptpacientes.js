document.addEventListener('DOMContentLoaded', ()=>{
    const mostrarNombre = document.getElementById("nombrePaciente");
    const mostrarDoc = document.getElementById("docPaciente");
    const mostrarEps = document.getElementById("epsPaciente");
    const mostrarCausa = document.getElementById("causaPaciente");
    const existe = document.getElementById("existe");
    let buscarPaciente = document.getElementById("buscarPaciente");
    let mostrar = document.getElementById("detallesPaciente");
    mostrar.style.display="none";
    let encontrado = 0;

    buscarPaciente.addEventListener('keydown',() =>{
        fetch('pacientes.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(paciente => {
                    if(paciente.identificacion === buscarPaciente.value.trim()){
                        existe.textContent="el paciente se encuentra ingresado en el hospital";
                        encontrado=encontrado-1;
                        mostrarNombre.textContent = paciente.nombre;
                        mostrarDoc.textContent = paciente.identificacion;
                        mostrarEps.textContent = paciente.eps;
                        mostrarCausa.textContent = paciente.causa_ingreso;
                    }else{
                        encontrado=encontrado+1;
                    }
                })
                if(encontrado === 10){
                    existe.textContent="el paciente no se encuentra ingresado";
                    mostrar.style.display="none";
                }else{
                    mostrar.style.display = "block";
                }
                encontrado=0;
            });
    })
        
});