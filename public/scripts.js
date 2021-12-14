function initForm(){
    getNavbar()
    getTipos()
}

function getTipos(){
    const tipo = document.getElementById('tipo')
    fetch('http://localhost:3000/tipos')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        tipo.innerHTML+=
        `<option selected>Escolha um tipo de utilizador...</option>`
        for(i in data){
            let op = 
            `<option value="${data[i].idtipo}">${data[i].designacao}</option>`
            tipo.innerHTML += op
        }
    })
    .catch((err)=>{
        alert('Erro no pedido...')
    })
}

function adicionar(){
    //obter os valores introduzidos no formulário
    let nome = document.getElementById('nome').value
    let morada_rua = document.getElementById('morada_rua').value
    let morada_num = document.getElementById('morada_num').value
    let dnasc = document.getElementById('dnasc').value
    let telem = document.getElementById('telem').value
    let email = document.getElementById('email').value
    let tipo = document.getElementById('tipo').value

    //criar um objeto com os valores
    let objeto = {
        //nome na db : nome da variável com o valor
        nomeutilizador : nome,
        moradarua : morada_rua,
        moradanumero : morada_num,
        datanascimento : dnasc,
        telemovel : telem,
        email : email,
        idtipo : tipo
    }

    //transformar o objeto em JSON
    let objetoJSON = JSON.stringify(objeto)

    //preparar as opções do pedido
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: objetoJSON
    }
    
    //fazer fetch com as opções acima definidas
    fetch('http://localhost:3000/utilizador', options)
    .then(res => res.text())
    .then(text => {
        alert(text)
    })
    .catch((err)=>{
        alert('Ocorreu um erro no pedido...')
    })

}


function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar')
    .then(res => res.text())
    .then((html)=>[
        nbar.innerHTML += html
    ])
    .catch(function(err){
        alert('Ocorreu um problema...')
    })

}
















/*funções antigas, podem dar jeito :)*/
function getData(){
    fetch('http://localhost:5000/bd')
    .then(res => res.json())
    .then(data => processData(data))
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}
function processData(data) {
    const linhaCidade = document.getElementById('cidades')
    linhaCidade.innerHTML=''
    for(let i=0 ; i < 100; i++){
        let nome = data[i].Name
        let distrito = data[i].District
        let pop = data[i].Population
        let ID = data[i].ID
        linhaCidade.innerHTML += `<tr>
                                    <td>${nome}</td>
                                    <td>${distrito}</td>
                                    <td>${pop}</td>
                                    <td>
                                    <button
                                        onclick="showID(${ID});"
                                        type="button" 
                                        class="btn btn-success"
                                        style="width:100px;"> Editar                                      
                                    </button>
                                    <button 
                                        type="button" 
                                        class="btn btn-danger"
                                        style="width:100px;"> Eliminar
                                    </button>
                                    </td>
                                </tr>`
    }
}
function showID(ID){
    console.log(ID)
}