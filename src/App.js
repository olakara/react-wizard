import StepFour from "./components/member/step-four";
import StepOne from "./components/member/step-one";
import StepThree from "./components/member/step-three";
import StepTwo from "./components/member/step-two";
import Wizard from "./components/wizard/wizard";
import WizardStep from "./components/wizard/wizardstep";


function App() {

  const initialValues = {
    name: '',
    email: '',    
    password: '',
    dob: '',
    address: '',
    city: '',
    agree: ''
  };

  const handelSubmit = (values) => {
    console.log("Form values:", values);
  }

  return (
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
    </div>
  );
}

export default App;
