//grabbing our html elements by id
let tableCourses = document.querySelector("#infoTable");
let tableBody = document.querySelector("#infoBody");

//api function fetch for courses
function coursesFetchTable() {
  fetch("http://localhost:8081/api/courses")
    .then((response) => response.json())
    .then((courses) => {
      for (const course of courses) {
        let row = tableBody.insertRow(-1);
        let cell1 = row.insertCell(0);
        cell1.innerText = course.dept;
        let cell2 = row.insertCell(1);
        cell2.innerText = course.courseNum;
        let cell3 = row.insertCell(2);
        cell3.innerText = course.courseName;
        let cell4 = row.insertCell(3);
        let anchor = document.createElement("a");
        anchor.href = `details.html?courseid=${course.id}`;
        anchor.text = "See details";
        cell4.appendChild(anchor);
      }
    });
}

//lets call the function
window.onload = coursesFetchTable();
