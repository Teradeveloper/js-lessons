const list = document.getElementById('taskList');
list.addEventListener('click', function (e) {
  console.log(e.target.nodeName);

  // handle check list items
  if (e.target.nodeName === 'LI') {
    e.target.classList.toggle('checked');
  } 

  // handle remove list items  
  if (e.target.nodeName === 'BUTTON') {
    list.removeChild(e.target.parentElement);
  }
});

const addForm = document.getElementById('add-form');
addForm.addEventListener('submit', function(event) {
  // stop the default behaviour of the form
  event.preventDefault();

  if (addForm.task.value == '') {
    alert('Cant be empty')
    // stop the function if no value added
    return;
  }
  
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${addForm.task.value}</span> 
    <button class="delete-btn">✕</button>
  `;

  list.appendChild(listItem);

  // reset all form inputs 
  addForm.reset();
});