const employees = [
    {
        empid: 465,
        empName: "Sandeep",
        empCompany: "Tech mahindra",
        empSalary: 80000,
        empAddress: {
          empCity: "Hyderabad",
          Area: "mind speace",
    },
},
    {
          empid: 466,
          empName: "Varun",
          empCompany: "HCL",
          empSalary: 75000,
          empAddress: {
              empCity: "Hyderabad",
              Area: "Hitch city",
    },
},
    {
          empid: 468,
          empName: "Rahul",
          empCompany: "infosys",
          empSalary: 80000,
          empAddress: {
              empCity: "Hyderabad",
              Area: "nanakramguda",
    },
},
  
  ];
  

  function displayEmployees() {
    const tableBody = document.querySelector("#employeeTable tbody");
    employees.forEach(employee => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${employee.empid}</td>
        <td>${employee.empName}</td>
        <td>${employee.empCompany}</td>
        <td>${employee.empSalary}</td>
        <td>${employee.empAddress.empCity}</td>
        <td>${employee.empAddress.empArea}</td>
      `;
  
      tableBody.appendChild(row);
    });
  }
  
  displayEmployees();
  