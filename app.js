let ul = document.querySelector('.list')
let divLict = document.querySelector('.list-container')
let button = document.querySelector('.button')
let input = document.querySelector('.taskName-input');
let sort = document.querySelector('.sort')

let array = [];
// кнопка сортировки
sort.addEventListener('click', clickSortButton)

function clickSortButton () {
  if (divLict.style.display == "block") {
    array = array.sort(compareList);
    sort.classList = sort.classList == 'sort' ? 'sort-reverse' : 'sort';
  }
  render();
  return;
}

function compareList (a,b) { 
   //проверяем на класс
    if (sort.classList == 'sort') {
        if (a.text < b.text) {
            return -1;
          }
          if (a.text > b.text) {
            return 1;
          }
        
          return 0;
       }else{
        if (a.text < b.text) {
            return 1;
          }
          if (a.text > b.text) {
            return -1;
          }
        
          return 0; 
       }
    }

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') { // добавляем в список по "Enter"
        newElement() 
    }
})
button.addEventListener('click', newElement)

ul.addEventListener('click', function (ev) {
  let elIndex = parseInt(ev.target.getAttribute('data-id'));
  if (ev.target.tagName === "LI") {
    array[elIndex].done = !array[elIndex].done;
    render();
  } 
  
  if (ev.target.tagName === "DIV") { // удаляем елемент
    array.splice(elIndex, 1);
    render();
  }
}, false);
    

function newElement() {
    const inputValue = document.querySelector('.taskName-input').value;
    if (inputValue == "") {
        alert("Введите элемент списка!");
    } else {
      array.push({
        text: inputValue,
        done: false,
      });
      document.querySelector('.taskName-input').value = "";
      render();
    }
}

function render() {
  console.log('render', array);
  document.getElementById('list').innerHTML = "";

  array.forEach((el, i) => {
    let li = document.createElement('li');
    li.dataset.id = i;
    if (el.done) {
      li.className = 'checked';      
    }

    li.append(el.text);
    let div = document.createElement('div');
    div.dataset.id = i;
    let txt = document.createTextNode("x");
    div.className = "close";
    div.appendChild(txt);
    li.appendChild(div);
    document.getElementById('list').appendChild(li);
  })

  divLict.style.display = 'none'
  
  if (array.length) {
    divLict.style.display = 'block'
  }

}