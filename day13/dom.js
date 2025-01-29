let form=document.querySelector("form")
let username=document.getElementById("uName");
let password=document.getElementById("uPass");
let check=document.getElementById("check");
let show=document.getElementById("show");

let gender=document.getElementsByName("gender");


//hiding and shiwing the password
check.addEventListener("click",(event)=>{
    if(event.target.checked==true){
        password.setAttribute("type","text");
        show.innerText="hide password";
    }else{
        password.setAttribute("type","password")
        show.innerText="show password";
    }
})

// Array of employee objects
const employees = [
    {
      empid: 101,
      empName: "John Doe",
      empCompany: "Tech Corp",
      empSalary: 75000,
      empAddress: { empCity: "New York", empArea: "Manhattan" }
    },
    {
      empid: 102,
      empName: "Jane Smith",
      empCompany: "Finance Inc.",
      empSalary: 85000,
      empAddress: { empCity: "Los Angeles", empArea: "Downtown" }
    },
    {
      empid: 103,
      empName: "Alice Johnson",
      empCompany: "HealthCare Ltd.",
      empSalary: 70000,
      empAddress: { empCity: "Chicago", empArea: "Lincoln Park" }
    },
    {
      empid: 104,
      empName: "Bob Brown",
      empCompany: "Retail Works",
      empSalary: 65000,
      empAddress: { empCity: "San Francisco", empArea: "Bay Area" }
    }
  ];
  
  // Function to display employees in the table
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
  
  // Call the function to display data
  displayEmployees();
  