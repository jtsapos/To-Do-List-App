//1. Adding a new item to the list of items:
//let li = document.createElement('li');
//let inputValue = document.getElementById('input').value;
//let text = document.createTextNode(inputValue);
//li.appendChild(text);
function newItem() {
  let li = $('<li></li>'); //You can store each <li> element in a variable using let li = $('<li></li>')
  let inputValue = $('#input').val(); //You can then get the value of the selected ToDoList id (#input) from html with jQuery like this: $('#input').val();
  // If you want to store the value into a variable you can use let inputValue = $('#input').val()
  li.append(inputValue); //Now you can append this value into another element such as the li using li.append(inputValue);

  if (inputValue === '') {
    alert('You must enter some information');
  } else {
    //let list = document.querySelector('#list');
    //list.appendChild(li);
    let list = $('#list');
    list.append(li); // jQuery doesn’t have an equivalent to document.createElement or querySelector,so you have to append css object as a string
    //like this: $('.selectedElement').append('<li>some item</li>').
    // $('#list').append(li) li from declard variable above
  }

  //2. Crossing out an item from the list of items:
  function crossOut() {
    //li.addEventListener('dblclick', crossOut);
    li.on('dblclick', crossOut); //Here, on is equivalent to addEventListener in JavaScript and takes two arguments.
    //The first one is the event (in this case it’s the click event) and the second argument takes a function where you add the css class strike to the li element
    // when it is clicked on.
    //li.classList.toggle('strike'); //creates a CSS class strike that will apply line-through on the text: .strike{text-decoration: line-through;}.
    li.addClass('strike'); //Then, you can add this class into the li element using jQuery: li.addClass("strike");
    //By doing this the list item li should be crossed out but still visible.
  };

  //3(i). Adding the delete button 'X':
  //let crossOutButton = document.createElement('crossOutButton');
  //crossOutButton.appendChild(document.createTextNode('X'));
  //li.appendChild(crossOutButton);
  let crossOutButton = $('<crossOutButton></crossOutButton>'); //You can store each element in a variable using let li = $('<li></li>').From css li> crossOutButton
  crossOutButton.append(document.createTextNode('X')); //You can reuse createTextNode('X') in jQuery like this: deleteButton.append(document.createTextNode('X'));
  li.append(crossOutButton); ////Now you can append this value into another element such as the li using li.append(crossOutButton);
  crossOutButton.on('click', deleteListItem); ////Here, on is equivalent to addEventListener in JavaScript and takes two arguments.
  //The first one is the event (in this case it’s the click event) and the second argument takes a function where you add the css class .delete to the li element
  // when it is clicked on.

  //3(ii). Adding the class 'delete' (display: none) from the css:
  function deleteListItem() { ////creates a CSS class .delete that will not display (essentially delete) the text: .delete {display: none;}.
    //li.classList.add('delete');
    li.addClass('delete'); //Then, you can add this class into the li element using jQuery: li.addClass("delete");
  }


  // 4. Reordering the items:
  $('#list').sortable()
}