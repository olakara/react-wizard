import FormInput from "../form/form-input";
import FormRadio from "../form/form-radio";


function StepTwo(props) {

  const genderOptions = [
    {
      name: "Male",
      value: 0
    },
    {
      name: "Female",
      value: 1
    }
  ];

    return ( 
     <div className="mt-2 border">
      <FormInput label="Date Of Birth" type="date" name="dob"></FormInput>   
      <FormRadio label="Gender" name="gender" options={genderOptions}></FormRadio> 
     </div>
    );
  }
  
  export default StepTwo;