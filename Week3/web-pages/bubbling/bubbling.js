function bubble(event, id) {
  console.log(id);
}

/*document.getElementById("one-c").addEventListener('click', () => {
  console.log(1);
},
true  // Set to capturing
);*/

document.getElementById("two-c").addEventListener('click', () => {
  //console.log(2);
  event.stopPropagation();
});