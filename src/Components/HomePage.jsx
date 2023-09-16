// Import React and Component
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BrandRegistration from '../Forms/BrandRegistration';
import ContactDetails from '../Forms/ContactDetails';
import Confirmation from '../Forms/Confirmation';
import { ClearStorage, StoreLocalstorage } from './Helper';
import Preview from '../Forms/Previewpage';

//----------- constant ----------
const steps = ['Brand Registration', 'Address and Contact', 'Confirm Details'];

//---------- components ---------
export default function HomePage() {

  //---------- state, redux state, veriable and hooks
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [isValidation, setIsIsValidation] = React.useState(false);
  const [dataForm, setDataForm] = React.useState({});
  const [dataSecand, setDataSecand] = React.useState({});
  const isStepOptional = (step) => {
    return step === 1;
  };

  //---------- helpers : other and users action
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  // handle next page navigate
  const handleNextButton = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    setIsIsValidation(false)
  }

  const handleNext = () => {
    if ((activeStep === 0 && dataForm?.country && dataForm?.tocksymbol &&
      dataForm?.vertical && dataForm?.businessName && dataForm?.businessID
    )
    ) {
      StoreLocalstorage("registration",dataForm)
      handleNextButton()
    }
    else if (dataSecand?.business_address && dataSecand?.State && dataSecand?.Postal_code && dataSecand?.primary_phone
      && dataSecand?.phone_number && dataSecand?.website && dataSecand?.email
    ) {
      StoreLocalstorage("contactDetails",dataSecand)
      handleNextButton()
    } else {
      setIsIsValidation(true)

    }
  }

  // handle back page navigate
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //------ handle reset page navigate
  const handleReset = () => {
    setActiveStep(0);
    ClearStorage()
    setDataSecand({})
    setDataForm({})
  };

  //---------- main view
  return (
    <Box sx={{ width: '100%', marginTop: 5, marginBottom: 5, margin: 'auto' }}>

      {/* top stepper bar  */}
      <Stepper activeStep={activeStep}
        sx={{
          width: '45%',
          marginLeft: "5%",
        }}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography> */}
          {activeStep === 3 && <Preview />}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 2 }}>
            <Button onClick={handleReset}
              sx={{
                width: 130,
                height: 'auto',
                padding: 1,
                borderRadius: 50,
                backgroundColor: 'rgb(63, 176, 41)',
                color: 'white',
                mr: 1,
              }}
            >Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>

          {/* render navigation tab component  */}
          {activeStep === 0 && <BrandRegistration
            isValidation={isValidation}
            setDatadataForm={(data) => setDataForm(data)}
          />}
          {activeStep === 1 && <ContactDetails
            isValidation={isValidation}
            setDatadataForm={(data) => setDataSecand(data)}
          />}
          {activeStep === 2 && <Confirmation />}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'flex-end', }}>

            {/* button next and back  */}
       {  activeStep !==0 &&   <Button
              color="inherit"
              disabled={activeStep === 0}
              
              onClick={handleBack}
              sx={{
                width: 130,
                height: 'auto',
                padding: 1,
                borderRadius: 50,
                backgroundColor: 'rgb(63, 176, 41)',
                color: 'white',
                mr: 1,
              }}
            >
              Back
            </Button>}
            
            <Box sx={{ justifyContent: 'flex-end'}} />
            <Button onClick={handleNext} className='next' sx={{
              width: 130,
              height: 'auto',
              padding: 1,
              borderRadius: 50,
              backgroundColor: 'rgb(63, 176, 41)',
              color: 'white',
              marginRight:5
            }} >
              {activeStep === steps.length - 1 ? 'Preview' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
