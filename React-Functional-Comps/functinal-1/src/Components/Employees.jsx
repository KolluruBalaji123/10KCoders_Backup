import React, { useState } from "react";
const Employees = () => {
  const [employee, setemployee] = useState(["nikki", "RAVI", "Balu", "Babai"]);
  const handleDelete = (emps) => {
    // console.log("handle delete called",emps)
    let newEmployee=[...employee]
   let filteredEmp= newEmployee.filter((emp)=> emp !==emps)
    setemployee(filteredEmp)
    // let newEmployee=employee.filter((emp)=> emp !==emps)
    // setemployee(newEmployee)


  };
  return (
    <div>
      <ul>
        {employee.map((emps, i) => {
          return (
            <li key={i} style={{ margin: 10 }}>
              {emps}{" "}
              <span
                style={{
                  color: "red",
                  border: "1px solid red",
                  margin: 20,
                  cursor: "pointer",
                  borderRadius: 50,
                  width: 50,
                }}
                onClick={()=>{handleDelete(emps)}}
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Employees;
