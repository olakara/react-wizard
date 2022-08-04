import Form from "./components/form/form";
import FormInput from "./components/form/form-input";
import EmployeeListing from "./components/listing/employeelisting";
import StepFour from "./components/member/step-four";
import StepOne from "./components/member/step-one";
import StepThree from "./components/member/step-three";
import StepTwo from "./components/member/step-two";
import Wizard from "./components/wizard/wizard";
import WizardStep from "./components/wizard/wizardstep";
import {useState} from 'react';

const initialValues = {
  name: '',
  email: '',    
  password: '',
  dob: '',
  address: '',
  city: '',
  agree: ''
};

const initialLoginValues = {
  username: '',
  password: ''
};

const employees = [{
  name: 'John',
  mobile: '1234567890',
},{
  name: 'Jane',
  mobile: '0503626490',
},{
  name: 'Jack',
  mobile: '0556677888',
},{
  name: 'Jill',
  mobile: '0544556677',
},{
  name: 'Jana',
  mobile: '0524499555'
},{
  name: 'Joody',
  mobile: '0583337450' 
}];

function App() {

  

  const handelSubmit = (values) => {
    console.log("Form values:", values);
  }

  const [filters, setFilters] = useState({ 
    search: ''
  }); 

  return (
    <>
     <div className="min-h-screen bg-white flex">      
      <Wizard submit={handelSubmit} initialValues={initialValues}>
        <WizardStep title="">
          <StepOne></StepOne>
        </WizardStep>
        <WizardStep title="">
          <StepTwo></StepTwo>
        </WizardStep>
        <WizardStep title="">
          <StepThree></StepThree>
        </WizardStep>
        <WizardStep title="">
          <StepFour></StepFour>
        </WizardStep>       
      </Wizard>     

       <Form submit={handelSubmit} initialValues={initialLoginValues}>
          <FormInput name="username" label="Username" type="text" />
          <FormInput name="password" label="Password" type="password" />
      </Form>
    </div> 
      <div>
        <label>Search:</label>        
        <input
              type="text"
              value={ filters.search }
              onChange={e => setFilters({ search: e.target.value })} />
          <EmployeeListing employees={employees} filter={filters}></EmployeeListing>
      </div>    
    </>
  );
}

export default App;
