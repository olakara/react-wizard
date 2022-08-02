  import { FormContext } from './form-context';
  import { useContext } from 'react';

function FormInput(props) {
    const {
        label, 
        type,
        name,
      } = props;   

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <div className="mt-2">
      <label>{label}</label>
      <input
        type={type || 'text'}
        name={name}
        value={form[name]}
        onChange={handleFormChange}
        className="mx-3 border"
      />
    </div>
  )
}

export default FormInput;