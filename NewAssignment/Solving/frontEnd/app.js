const staffArray = [];

document.getElementById("submitButton").addEventListener("click", () => {
  const nameValue = document.getElementById("name").value;
  const idCardValue = document.getElementById("idCard").value;
  const department = document.getElementById("department").value;
  const table = document.getElementById("staffList");
  const row = table.insertRow(-1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  cell1.innerHTML = nameValue;
  cell2.innerHTML = idCardValue;
  cell3.innerHTML = department;

  // Clear the form after submission
  document.getElementById("myForm").reset();
});
// staffArray.push({ nameValue, idCardValue, department });
// console.log(staffArray);
