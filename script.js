let ul = document.querySelector('.list')
let divLict = document.querySelector('.list-container')
let button = document.querySelector('.button')
let input = document.querySelector('.taskName-input');

let array = [];
console.log(array)

input.addEventListener('keyup', (event)=>{
    if (event.key === 'Enter') {
        newElement()
    }
})
button.addEventListener('click', newElement)

ul.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
        if (ev.target.classList.contains('checked') === false) {
            ev.target.className = 'checked';
            console.log('class chek');
            return;
        }
        ev.target.classList.remove('checked')
        console.log('class no')
    //    console.log(ev.target.classList.contains('checked'))
        
    } 
    // ev.target.classList.contains('checked') === 'true' ? ev.target.className = 'checked' : ev.target.classList.remove('checked')
    if(ev.target.tagName === "SPAN") {
       let div = ev.target.parentElement;
       div.remove();
        // if(document.querySelector('li').tagName !== 'li'){
        //     divLict.style.display = 'none'
        // }
    }
}, false);

function newElement() {
    divLict.style.display = 'block'
    let li = document.createElement('li');
    // console.log(li)
    let inputValue = document.querySelector('.taskName-input').value;
    // let t = document.createTextNode(inputValue);
    // console.log(inputValue)
    // console.log(t)
    array.push(inputValue);
    // console.log(array)
    li.append(array.pop());
    // li.append(inputValue);
    if(inputValue == "") {
       alert("Введите ваше дело!");
    } else {
       document.querySelector('.list').appendChild(li);
    }
    document.querySelector('.taskName-input').value = "";
    let span = document.createElement('span');
    let txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}