window.addEventListener('DOMContentLoaded', () => {

// Página Mural
let muralBtn = document.querySelector('.mural-btn')
let nome = document.getElementById('campo-nome')
let recado = document.getElementById('recado')
let areaMural = document.querySelector('.area-mural');

muralBtn.addEventListener('click', (event) => {
    event.preventDefault();        
    let novoRecado = `<div class="box-recado">
                        <div class="mensagem">
                            <p><i>“${recado.value}”</i></p>
                        </div>
                        <p class="autor-mural">${nome.value}</p>
                    </div>`
    ;
    areaMural.innerHTML += novoRecado;
})

// Fazer a requisição à API de recados
fetch('http://localhost:3000/api/recados')
    .then(response => response.json())
    .then(recados => {
        // Manipular o DOM para exibir os recados
        const recadosListDiv = document.getElementById('listaRecados');
        recados.forEach(recado => {
            const boxRecado = document.createElement('div');
            const mensagem = document.createElement('div')
            boxRecado.classList.add('box-recado')
            mensagem.classList.add('mensagem')
            mensagem.innerHTML = `
                <p><i>${recado.text}</i></p>
                <p style="padding-top: 15px"><i>${recado.author}</i></p>
            `;
            boxRecado.appendChild(mensagem);
            recadosListDiv.appendChild(boxRecado)
        });
    })
    .catch(error => console.error('Erro ao carregar os recados:', error));
});