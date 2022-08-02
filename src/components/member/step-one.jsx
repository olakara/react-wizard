import FormInput from "../form/form-input";

function StepOne(props) {
  return (    
    <div className="mt-2 border">
      <FormInput label="Name" type="text" name="name"></FormInput>    
      <FormInput label="Email" type="email" name="email"></FormInput>
      <FormInput label="Password" type="password" name="password"></FormInput>
    </div>
  );
}

export default StepOne;