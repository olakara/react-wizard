import { FormContext } from './form-context';
import { useContext } from 'react';

function FormTextArea(props) {

    const {
        label,         
        name,        
      } = props;  

    const formContext = useContext(FormContext);
    const { handleFormChange } = formContext;

    return ( 
        <div className="mt-2">
          <label>{label}</label>                 
          <textarea name={name} rows="5" onChange={handleFormChange} className="mx-3 border">

          </textarea>
        </div>
     );
}

export default FormTextArea;