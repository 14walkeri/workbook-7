//html elements for the table
const tableBody = document.getElementById("tableBody");
const table = document.getElementById("infoTable");
//html elements for the drop down
const dropDown = document.getElementById("nameList");

//api that fills the dropdown
function letsGetName() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((table) => table.json())
    .then((users) => {
      for (const user of users) {
        let option = document.createElement("option");
        option.innerText = user.name;
        option.value = user.name;
        dropDown.appendChild(option);
      }
    });
}

//api that finds the info from dropdown
function letsGetInfo() {
  tableBody.innerText = "";
  const userValue = dropDown.value;
  if (userValue) {
    table.style.display = "block";
  } else {
    table.style.display = "none";
  }
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((table) => table.json())
    .then((users) => {
      for (const userInfo of users) {
        if (userInfo.name == userValue) {
          let row = tableBody.insertRow(-1);
          let cell1 = row.insertCell(0);
          cell1.innerText = userInfo.name;
          let cell2 = row.insertCell(1);
          cell2.innerText = userInfo.username;
          let cell3 = row.insertCell(2);
          cell3.innerText = userInfo.email;
          let cell4 = row.insertCell(3);
          cell4.innerText = userInfo.address.street;
          let cell5 = row.insertCell(4);
          cell5.innerText = userInfo.address.suite;
          let cell6 = row.insertCell(5);
          cell6.innerText = userInfo.address.city;
        }
      }
    });
}

//calling the bois for proper function
letsGetName();
dropDown.onchange = letsGetInfo;
