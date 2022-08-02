import FormTextArea from "../form/form-textarea";
function StepThree(props) {
    return ( 
      <div className="mt-2 border">
        <FormTextArea label="Address" type="text" name="address"></FormTextArea>
      </div>
    );
  }
  
  export default StepThree;