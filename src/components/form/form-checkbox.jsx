import { FormContext } from './form-context';
import { useContext } from 'react';

function FormCheckbox(props) {
    const {
        label,         
        name,
        value
      } = props;  

    const formContext = useContext(FormContext);
    const { handleFormChange } = formContext;

    const handleChange = (event) => {
        
        const { checked } = event.target;

        event.target.value = checked ? value : '';        
        
        handleFormChange(event);
    }

    return (
        <div className="mt-2">
            <label>
                <input type='checkbox' name={name} onChange={handleChange} className="mx-3 border" /> {label}
            </label>
        </div>
    )
}

export default FormCheckbox;