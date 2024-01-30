// Página Mural
let muralBtn = document.querySelector('.mural-btn')
let nome = document.getElementById('campo-nome')
let recado = document.getElementById('recado')
let areaMural = document.querySelector('.area-mural');
let listaRecados = document.querySelectorAll('box-recado');

muralBtn.addEventListener('click', (event) => {

    event.preventDefault();
                    
    let novoRecado = `<div class="box-recado">
                        <div class="mensagem">
                            <p><i>“${recado.value}”</i></p>
                        </div>
                        <p class="autor-mural">${nome.value}</p>
                    </div>`
    
    areaMural.innerHTML += novoRecado;
})