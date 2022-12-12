import { Component } from "react";

 export default class Employee extends Component{
    constructor(){
        super()
        this.state={
            employeeDetails:{
                EmpName:"Balaji",
                EmpMail:"balaji@gmail.com",
                EmpRole:"Developer"
            },
            showEmployee:false
        };
        // this.showEmployeeInfo=this.showEmployeeInfo.bind(this)OLder Version 
    }
    showEmployeeInfo =()=>{
        console.log("EmployeeINfo called")
        // let newEmpDetails={

        //     EmpName:"Balu",
        //     EmpMail:"balaji@gmail.com",
        //     EmpRole:"Tester"

        // }
        let newEmpDetails={...this.state.employeeDetails,EmpName:"Bablu"}
      this.setState({showEmployee:true,employeeDetails:newEmpDetails})//the Setstate is used for updated which is existed in state  can be change

    }



    // showEmployeeInfo (){
    //     console.log("EmployeeINfo called")
    // };
    render(){
        return <div>
           <h2> welcome to EmployeeComponent</h2>
           <button onClick={this.showEmployeeInfo}>ShowEmployeeDetails</button>
          
            {/* <li>{this.state.showEmployee && this.state.employeeDetails.EmpName}</li> */}
            {/* {this.state.showEmployee ? <p>{this.state.employeeDetails.EmpName}</p>: <p>No EmployeeDetails.....</p>} */}
            {
                this.state.showEmployee ? <div>
                    <p>{this.state.employeeDetails.EmpMail}</p>
                    <p>{this.state.employeeDetails.EmpName}</p>
                    <p>{this.state.employeeDetails.EmpRole}</p>
                </div>:
                <p>No EmployeeDetails.....</p>

            }

         
        </div>
    }

}