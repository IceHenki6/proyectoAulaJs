let searchBtn = document.querySelector('#buscar-paciente');

searchBtn.addEventListener('click', function(){
    let xhr = new XMLHttpRequest;
    let errorAjax = document.querySelector('#error-ajax');
    
    xhr.open('GET','https://alura-es-cursos.github.io/api-pacientes/pacientes.json');
    xhr.addEventListener('load', function(){
        if(xhr.status == 200){
            errorAjax.classList.add('hidden');
            let response = xhr.responseText;
            let pacientes = JSON.parse(response);
        
            pacientes.forEach(paciente => {
                CrearTr(paciente);
             });
        }
        else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            errorAjax.classList.remove('hidden');
        }

    });

    xhr.send();
})