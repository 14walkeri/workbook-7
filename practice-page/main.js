//html variables for letsgetdata
const button1 = document.getElementById("submitButton1");
const searchBar1 = document.getElementById("searchBar1");
const paragraph1 = document.getElementById("paragraph1");
//html variables for letsGetName


//function for display data
function letsGetData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
      let toDo = data.find((toDo) => toDo.id == parseInt(searchBar1.value));
      paragraph1.innerText = toDo.title;
    });
}
button1.onclick = letsGetData;


