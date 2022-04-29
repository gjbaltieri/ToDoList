
let add = document.getElementById('botao');
let input = document.getElementById('input');
let lista = document.getElementById('lista');
let p = document.querySelectorAll('.li');




/*************************************************************************** */

add.addEventListener('click', inserir)

function inserir (){
        var li = document.createElement("li");
        var t = document.createTextNode(input.value);
        li.appendChild(t);
    if (input.value === '') {
        alert ('escreva algo')
    }
    
    
    else {
        
      lista.innerHTML += `<li class='li'>${input.value}
                            <span class='icon'>&#215;</span></li>`
      input.value = '';

      let listagem = document.querySelectorAll('.icon');
      listagem.forEach(linha => {
      linha.addEventListener('click', ApagarLinha)});

      
      let concluida = document.querySelectorAll('.li');
          concluida.forEach(closed => {
          closed.addEventListener('click', lineThrough)})


      
}};

/*****************Funçoes apagar, line-through e add c/ Enter***********************/



function ApagarLinha(x) {
  let apagar = x.target.parentElement
  apagar.style.display = 'none'
}


function lineThrough (lineThrough) {
  let apagar = lineThrough.target
  apagar.style.textDecoration = 'line-through'
}



document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter')
  inserir()
})

