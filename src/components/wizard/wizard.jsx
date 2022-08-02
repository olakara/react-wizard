import { useState } from 'react';
import { FormContext } from '../form/form-context';

function Wizard(props) {

  const { children, submit = () => {}, initialValues } = props;  

  const [form, setForm] = useState(initialValues);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
  
    const updatedForm = {
      ...form,
      [name]: value
    };      
    setForm(updatedForm);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();    
    submit(form);
  }

  return ( 
    <div className="flex-1 flex flex-col justify-top py-12 px-4 sm:px-6">   
      <form onSubmit={handleFormSubmit}>
        <FormContext.Provider value={{
          form,
          handleFormChange
        }}>
          {children}
        </FormContext.Provider>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>      
      </form>     
    </div>
  );
}

export default Wizard;