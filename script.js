let ul = document.querySelector('.list')
let divLict = document.querySelector('.list-container')
let button = document.querySelector('.button')
let input = document.querySelector('.taskName-input');
let sort = document.querySelector('.sort')

let array = [];
// кнопка сортировки
sort.addEventListener('click', clickSortButton)

function clickSortButton () {
    if (divLict.style.display == "block"){
let listItems = document.querySelectorAll('.list li'); //находим все элементы 
array.sort(compareList);
console.log('сортированный массив: ', array)
// console.log(listItems);
listItems.forEach((element, i, arr) => {
      arr[i].innerHTML = ''; //очистка каждого элемента
      arr[i].innerHTML = array[i]; //вставляем значение из отсортированного массива
      let div = document.createElement('div');
    div.className = "close";
    div.innerText = "X"; 
    arr[i].append(div);
  })

  sort.classList = sort.classList == 'sort' 
  ? 'sort-reverse' 
  : 'sort';
}else {
    return;
  }
}

function compareList (a,b) { 
   //проверяем на класс
    if(sort.classList == 'sort'){
        if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
        
          return 0;
       }else{
        if (a < b) {
            return 1;
          }
          if (a > b) {
            return -1;
          }
        
          return 0; 
       }
    }
input.addEventListener('keyup', (event)=>{
    if (event.key === 'Enter') { // добавляем в список по "Enter"
        newElement() 
    }
})
button.addEventListener('click', newElement)

ul.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
        if (ev.target.classList.contains('checked') === false) {
            ev.target.className = 'checked';
            return; // выделяем  по клику
        }
        ev.target.classList.remove('checked') // снимаем выделение
    } 
    if(ev.target.tagName === "DIV") { // удаляем елемент
        let div = ev.target.parentElement; // родитель
        let divText = div.innerText.slice(0,-2)
        console.log(divText)
        let elDeleteIndex = array.findIndex((el) => el == divText);
        console.log(elDeleteIndex)

        array.slice(elDeleteIndex,1)
        console.log('массив после удаления: ', array)
        // div.remove();
        
         // нужно добавить удаление из массива
        // сделать проверку, если массив пуст, то divLict.style.display = 'none'
    }
}, false);
    

function newElement() {
    divLict.style.display = 'block'
    let li = document.createElement('li');
    let inputValue = document.querySelector('.taskName-input').value;
    li.append(inputValue);
    if(inputValue == "") {
        alert("Введите элемент списка!");
    } else {
        document.querySelector('.list').appendChild(li);
    }
    array.push(input.value);
    // console.log(array)
    document.querySelector('.taskName-input').value = "";
    let div = document.createElement('div');
    let txt = document.createTextNode("x");
    div.className = "close";
    div.appendChild(txt);
    li.appendChild(div);
}