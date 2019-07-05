const eleTwo = document.getElementById('two');
eleTwo.style.borderColor = 'red';

function addItem(event) {
  event.preventDefault();
  const newItemInput = document.getElementById('new-item-input');
  const itemList = document.getElementById('item-list');
  itemList.innerHTML += `<li>${newItemInput.value}</li>`;

  // Should be done diff to prevent html injection
 // const li = document.createElement('li');

}