function WizardStep(props) {    
    return (  <>
        <div className="wizard-step">
            {props.children}
        </div>        
    </>);
}

export default WizardStep;