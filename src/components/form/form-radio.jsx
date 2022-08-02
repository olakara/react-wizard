import { FormContext } from './form-context';
import { useContext } from 'react';

function FormRadio(props) {

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
            {options.map(option => (
                <label key={option.value}>
                <input
                    type='radio'
                    name={name}
                    value={option.value}
                    onChange={handleFormChange}
                    className="mx-3 border"
                /> {option.name}
                </label>
            ))}          
        </div>
      )
}

export default FormRadio;