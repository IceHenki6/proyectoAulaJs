const inputBusqueda = document.querySelector('#filtrar-paciente');

inputBusqueda.addEventListener('input', function(){
    const pacientes = document.querySelectorAll('.paciente');
    
    if(this.value.length > 0){
        for(let i = 0;i<pacientes.length;i++){
            let paciente = pacientes[i];
            let nombreTd = paciente.querySelector('.info-nombre');
            let nombre = nombreTd.textContent;
    
            let expresion = new RegExp(this.value,'i');
    
            if(!expresion.test(nombre)){
                paciente.classList.add('hidden');
            }
            else{
                paciente.classList.remove('hidden');
            }
    
        }
    }
    else{
        for (let i = 0; i < pacientes.length ; i++){
            let paciente = pacientes[i];
            paciente.classList.remove("hidden");
        }   
    }

})