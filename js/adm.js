// ADM
let logoutBtn = document.querySelector('.logout-button')
let addPostBtn = document.getElementById('add-post-button')
let areaPost = document.getElementById('criar-postagem')

logoutBtn.addEventListener('click', (event) => {

    event.preventDefault()

        let res = window.confirm('Deseja mesmo sair ?');

        if(res == true) {
            alert('Logout realizado.')
            window.location.href = "index.html";
        } 
})

addPostBtn.addEventListener('click', (event) => {
    
    event.preventDefault()
    
    areaPost.classList.toggle('hidden');
    
})