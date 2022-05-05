let tabla= document.querySelector('#tabla-pacientes');
let selected = false;

tabla.addEventListener('click',function(event){
    if(!selected){
        const btnCell = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.id = 'delete-btn';
        btnCell.id = 'delete-cell';
        btnCell.appendChild(deleteBtn);
        
        event.target.parentNode.classList.add("resaltar");
        event.target.parentNode.appendChild(btnCell);

        const deleteTarget = event.target.parentNode;

        deleteBtn.addEventListener('click', function(){
            deleteTarget.classList.add("fadeOut");
            setTimeout(function(){
                deleteTarget.remove();    
            },350);
        })
    
        selected = true;
    }
    else{
        let elem = document.getElementById('delete-cell');
        elem.remove();
        event.target.parentNode.classList.remove('resaltar');
        selected = false;
    }

    console.log('click!');
});

