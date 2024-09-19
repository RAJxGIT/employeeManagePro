// As we know that react is not concerned with HTTP library so we are gonna use 3rd party HTTP library like axios in order to make api calls
//npm install axios --save
//--save will add entry in packag.json

import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employee'

class EmployeeService{
    // making rest api calls
    
    //making call to get data of all employees
    getAllEmployess()
    {
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }
    
    //making call to create employees and rest will internally store this data to our database
    createEmployee(employee)
    {
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
    }

    getEmployeeById(employeeId)
    {
       return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId) 
    }
    updateEmployee(employeeId, employee)
    {
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId,employee)
    }
    deleteEmployee(employeeId)
    {
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId)
    }


}

export default new EmployeeService

