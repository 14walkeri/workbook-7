//grabbing our html elements by id
let tableCourses1 = document.querySelector("#detailsTable");
const tableBody1 = document.querySelector("#detailsBody");
const urlParams = new URLSearchParams(location.search);

//function to fetch and display course chosen
function courseDisplay() {
  let id = -1;
  if (urlParams.has("courseid") === true) {
    id = urlParams.get("courseid");

    fetch(`http://localhost:8081/api/courses/${id}`)
      .then((response) => response.json())
      .then((course) => {
        let row = tableBody1.insertRow();
        let cell1 = row.insertCell(0);
        cell1.innerText = course.dept;
        let cell2 = row.insertCell(1);
        cell2.innerText = course.courseNum;
        let cell3 = row.insertCell(2);
        cell3.innerText = course.courseName;
        let cell4 = row.insertCell(3);
        cell4.innerText = course.instructor;
        let cell5 = row.insertCell(4);
        cell5.innerText = course.startDate;
        let cell6 = row.insertCell(5);
        cell6.innerText = course.numDays;
      });
  }
}

courseDisplay();
