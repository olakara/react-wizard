import FormSelect from "../form/form-select";

function StepFour(props) {

  const cityOptions = [
    {
      name: "Abu Dhabi",
      value: 0
    },
    {
      name: "Dubai",
      value: 1
    },
    {
      name: "Sharjah",
      value: 2
    },
    {
      name: "Ras Al Khaimah",
      value: 3
    },
    {
      name: "Ajman",
      value: 4
    },
    {
      name: "Umm Al Quwain",
      value: 5
    }, 
    {
      name: "Fujairah",
      value: 6
    }
  ];

    return ( 
      <>
        <FormSelect label="City" name="city" options={cityOptions}></FormSelect>
      </> 
      );
  }
  
  export default StepFour;