import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()


    // *** very imp. method can be asked in interview it takes data from our AddEmploye form 
    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = {firstName, lastName, email}
        

        // console.log(employee);
        // since we are getting our data

        // *** now we are gonna make a rest api call and will send that data to rest api and rest api will save data to database

        // if (id) {
        //     updateEmployee(id, employee).then((response) => {
        //         navigate('/employees')
        //     }).catch(error => {
        //         console.log(error)
        //     })
        

        // *** imp. this will going to add data in database

        if(id)
        {
          EmployeeService.updateEmployee(id, employee).then(response =>
          {
            navigate('/employees')
          }).catch(error =>
            console.log(error)
          )
        }
        else{
            EmployeeService.createEmployee(employee).then((response) => {

                console.log(response.data)
                navigate('/employees');

            }).catch(error => {
                console.log(error)
            })
        }
        }
       
        //in order to make rest api call we use useEffect
        useEffect(() => {
            // Function to fetch data
            EmployeeService.getEmployeeById(id).then((response) =>{
               setFirstName(response.data.firstName)
               setLastName(response.data.lastName)
               setEmail(response.data.email)
            }).catch(error =>{
                console.log(error)
            })

        },[])
        

        const pageTitle = () => {

            if(id){
                return <h2 className = "text-center">Update Employee</h2>
            }else{
                return <h2 className = "text-center">Add Employee</h2>
            }
        }
        

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card-col-md-6'>
                        {
                            pageTitle()
                        }
                        <div className='card-body'>
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> First Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        // read about this *** imp.
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Last Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Email Id :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter email Id"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className='save-employee-button' onClick={(e) => saveOrUpdateEmployee(e)}>Save</button>
                                <Link to="/employees" className="cancel-employee-button"> Cancel </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent
