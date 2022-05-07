
//Agregar nuevos pacientes
let agregarBtn=document.querySelector('#adicionar-paciente');

function captureDatosPaciente(form){
    let paciente = {
        nombre : form.nombre.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calcularIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}


agregarBtn.addEventListener('click',function(event){
    event.preventDefault();
    let form = document.querySelector('form');
    let datosPacientes = form.querySelectorAll('.campo');
    let inputVacio = false;
    let inputAltura = form.querySelector('#altura');
    let inputPeso = form.querySelector('#peso');

    let pesoValido = ValidarInputPeso(inputPeso.value, inputPeso);
    let alturaValida = ValidarInputAltura(inputAltura.value,inputAltura);


    datosPacientes.forEach(dato => {
        if(dato.value === ''){
            console.log(dato.value);
            dato.classList.add('campo-invalido');
            inputVacio = true;
        }
    });

    if((!inputVacio) && pesoValido && alturaValida){

        datosPacientes.forEach(dato => {
            dato.classList.remove('campo-invalido');
        })

        let paciente = captureDatosPaciente(form);

        CrearTr(paciente);
    
        form.reset();
    
        console.log('click-on-button');
    }

})


function CrearTr(paciente){
    let trPaciente = document.createElement('tr');
    trPaciente.classList.add('paciente');


    trPaciente.appendChild(CrearTd(paciente.nombre,'info-nombre'));
    trPaciente.appendChild(CrearTd(paciente.peso,'info-peso'));
    trPaciente.appendChild(CrearTd(paciente.altura,'info-altura'));
    trPaciente.appendChild(CrearTd(paciente.gordura,'info-gordura'));
    trPaciente.appendChild(CrearTd(paciente.imc, 'info-imc'));

    let tablaPacientes = document.querySelector('#tabla-pacientes');
    tablaPacientes.appendChild(trPaciente);
}

function CrearTd(dato, className){
    let  td = document.createElement('td');
    td.classList.add(className)

    td.textContent = dato;

    return td;
}


//validar datos de los inputs

function ValidarInputPeso(peso,element){
    if((peso>0) && (peso<700)){
        return true;
    }
    else{
        element.classList.add('campo-invalido');
        element.value = '';
        element.placeholder = 'Peso invalido';
        return false;
    }
}

function ValidarInputAltura(altura, element){
    if((altura>0) && (altura < 3.00)){
        return true;
    }
    else{
        element.classList.add('campo-invalido');
        element.value = '';
        element.placeholder = 'Altura Invalida';
        return false;  
    }
}