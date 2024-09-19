// react we have two componenets:
// class components: we can define state(i.e stateful component)
// funtional componenet: we cant define state(i.e stateless component)
// using es7 react snippet extension we can make componenets easily usin (rafc)

import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';


const ListEmployeeComponent = () => {

 // use state hook is a funtion which returns current value of state and function to make changes on states values  
 const [employees, setEmployees] = useState([])

//useEffect allow us to perform side effects in funtion componenets
//Effect Hooks are equivalent to componenetDidMounbt(), componenetDidupdate(), and componentWillUnmount() lifecycle methods
//read more about it
 
useEffect(() => {
  // Code to run on component mount or update
  getAllEmployess()
}, []);

//since our sprin and react is running on differents port it will give this error to resolve it we will use @CrossOrigin("*") in our rest api using which any client can access that api or we can use @CrossOrigin(origins = {"http://localhost:3000/"}) for specific client to use that api

// Access to XMLHttpRequest at 'http://localhost:8080/api/v1/employee' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

const getAllEmployess = () =>{
  EmployeeService.getAllEmployess().then((response) => {
    setEmployees(response.data)
    console.log(response.data)
  }).catch(error => console.error())  
}

//delete Employee
const deleteEmployee = (employeeId) =>{
EmployeeService.deleteEmployee(employeeId).then(response => {
getAllEmployess()
}).catch(error => 
{
  console.log(error)
}
)
}
  return (
    <div className='container'>
      <h2 className='text-center'>List Employee</h2>
      <Link to = '/add-employee' className='add-employee-button'>ADD</Link>
      <table className='table-border'>
        <thead>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee EmailId</th>
            <th>Actions</th>
        </thead>

        <tbody>
            {
                employees.map(employee => 
                    {
                        return(
                            // it shoudd me same as we have defines in our api
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                  <Link className = 'update-button' to={`/edit-employee/${employee.id}`}>
                                  Update
                                  </Link>
                                  <button className='delete-employee' onClick={() => deleteEmployee(employee.id)}>
                                    Delete
                                  </button>
                                </td>
                            </tr>
                        )
                    }
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent


