function calcularIMC(peso,altura){
    let imc = peso/(altura*altura)
    return imc.toFixed(2);
}

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i< pacientes.length;i++){
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdIMC = paciente.querySelector(".info-imc");
    
    pesoEsValido = true;
    alturaEsValida = true;
    
    if((peso < 0)||(peso > 1000)){
        console.log("Peso incorrecto");
        tdIMC.textContent = "Peso incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }
    
    if((altura < 0)||(altura > 3.0)){
        console.log("Peso incorrecto");
        tdIMC.textContent = "Altura incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    }
    
    if(pesoEsValido && alturaEsValida){
        var imc = peso / (altura * altura);
        tdIMC.textContent = imc.toFixed(2);
    }
    
    
}

//Agregar nuevos pacientes

let form = document.querySelector('form');
let agregarBtn=form.querySelector('#adicionar-paciente');


agregarBtn.addEventListener('click',function(event){
    event.preventDefault();

    let nombre = form.querySelector('#nombre');
    let peso = form.querySelector('#peso');
    let altura = form.querySelector('#altura');
    let gordura = form.querySelector('#gordura');

    let trPaciente = document.createElement('tr');
    let tdNombre = document.createElement('td');
    let tdPeso = document.createElement('td');
    let tdAltura = document.createElement('td');
    let tdGordura = document.createElement('td');
    let tdIMC = document.createElement('td');

    tdAltura.classList.add('info-altura');
    tdPeso.classList.add('info-peso');
    tdGordura.classList.add('info-gordura');
    tdNombre.classList.add('info-nombre');
    tdIMC.classList.add('info-imc');

    tdNombre.textContent = nombre.value;
    tdAltura.textContent = altura.value;
    tdPeso.textContent = peso.value;
    tdGordura.textContent = gordura.value;
    tdIMC.textContent = calcularIMC(tdPeso.textContent, tdAltura.textContent);
    console.log(tdNombre.textContent);

    trPaciente.appendChild(tdNombre);
    trPaciente.appendChild(tdPeso);
    trPaciente.appendChild(tdAltura);
    trPaciente.appendChild(tdGordura);
    trPaciente.appendChild(tdIMC);

    let tablaPacientes = document.querySelector('#tabla-pacientes');
    tablaPacientes.appendChild(trPaciente);

    console.log('click-on-button');
})


