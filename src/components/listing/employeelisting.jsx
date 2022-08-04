import {useState, useEffect} from 'react';

function EmployeeListing({filter, employees} ) {
    
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    
    useEffect(() => { 
        const temp = employees.filter(e => e.name.toLowerCase().includes(filter.search.toLowerCase()) || e.mobile.includes(filter.search));
        setFilteredEmployees(temp);
    },[filter, employees]);
    
    return (          
        <ul>
            { 
            filteredEmployees.map( (employee, index) => <li key={index}>{employee.name} - {employee.mobile}</li>)
            }            
        </ul>        
    );
}

export default EmployeeListing;