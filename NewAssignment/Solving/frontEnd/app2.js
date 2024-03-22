var dataForm = document.getElementById("dataForm");
var table = document.getElementById("dataTable");
var tbody = table.getElementsByTagName("tbody")[0];

dataForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var idCard = document.getElementById("idcard").value;
  var department = document.getElementById("department").value;
  var unit = document.getElementById("unit").value;
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value;
  //var division = document.getElementById("division").value;

  var row = tbody.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);
  const cell7 = row.insertCell(6);

  var serialNumber = tbody.rows.length;

  cell1.textContent = serialNumber;
  cell2.textContent = name;
  cell3.textContent = idCard;
  cell4.textContent = department;
  cell5.textContent = unit;
  cell6.textContent = email;
  cell7.textContent = dob;
  // cell4.textContent = division;

  // Reset the form
  dataForm.reset();
});
