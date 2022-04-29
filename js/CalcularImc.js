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
    
    pesoEsValido = validarPesoTabla(peso);
    alturaEsValida = validarAlturaTabla(altura);
    
    if(!pesoEsValido){
        console.log("Peso incorrecto");
        tdIMC.textContent = "Peso incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");
    }
    
    if(!alturaEsValida){
        console.log("Altura incorrecta");
        tdIMC.textContent = "Altura incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");
    }
    
    if(pesoEsValido && alturaEsValida){
        var imc = peso / (altura * altura);
        tdIMC.textContent = imc.toFixed(2);
    }   
}

function validarAlturaTabla(altura){
    return((altura>0) && (altura < 3.00));
}

function validarPesoTabla(peso){
    return((peso>0) && (peso<700));
}