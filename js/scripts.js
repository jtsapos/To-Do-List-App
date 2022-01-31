function newItem() {

  //1. Explanation: Adding a new item to the list of items:
  //let li = document.createElement('li');
  //let inputValue = document.getElementById('input').value;
  //let text = document.createTextNode(inputValue);
  //li.appendChild(text);
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must enter some information');
  } else {
    //let list = document.querySelector('#list');
    //list.appendChild(li);
    $('#list').append(li);
  }

  //2. Explanation: Crossing out an item from the list of items:
  function crossOut() {
    //li.classList.toggle('strike');
    li.toggleClass('strike');
  }

  //li.addEventListener('dblclick', crossOut);
  li.on('dblclick', crossOut);