var input = document.querySelector('input');
var btn = document.querySelector('button');
var list = document.querySelector('ul');
var indice = 1;

function add() {
    var item = document.createElement('li');
    
    list.appendChild(item);
    item.innerHTML = "<strong>Item " + indice + ":</strong> " + input.value;

    input.value = "";
    indice++;
}