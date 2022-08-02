import { FormContext } from './form-context';
import { useContext } from 'react';

function FormSelect(props) {

    const {
        label,         
        name,
        options
      } = props;  

    const formContext = useContext(FormContext);
    const { handleFormChange } = formContext;

    return ( 
        <div className="mt-2">
          <label>{label}</label>
          <select name={name} onChange={handleFormChange}
                    className="mx-3 border">
             <option>Select</option>
            { options.map(option => (
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}          
          </select>            
        </div>
     );
}

export default FormSelect;