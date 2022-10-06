/*========== Verificación de formulario ==========*/

// variables
let input = document.querySelector('.input')
let btn = document.querySelector('.btn');
let conError = document.querySelector('.con--error');

// eventos
btn.addEventListener('click',() =>{
    if(input.textContent.indexOf('@') < 1){
        let error = document.createElement('P');
        error.textContent = ('Please provide a valid email addres.');
        error.classList.add('error');
        input.classList.add('activo');
        conError.appendChild(error);
        console.log(input.textContent)
    }
})

// funciones