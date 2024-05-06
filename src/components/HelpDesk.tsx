import { Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import HelpDeskFormFields from './HelpDeskFormFields';
import { useState , useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { addHelpDeskTicket } from '../redux/helpdeskSlice';

const HelpDesk = () => {
  const [complaint , setComplaint] = useState<String>("");
  const [subComplaint , setSubComplaint] = useState<String>("");
  const [currentSubComplaints , setCurrentSubComplaints] = useState<any[]>([]);
  const [description , setDescription] = useState<String>("");

  const getUser : any = localStorage.getItem('user')
  const user = JSON.parse(getUser);

  console.log(user);

  const dispatch = useDispatch<AppDispatch>();

  const steps = ['', '', ''];

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step:Number) => {
    return step === 1;
  };

  const isStepSkipped = (step:Number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onSubmiHandler = (e:any) => {
    e.preventDefault();

    const data = {
      complaint,
      subComplaint,
      description,
      email : user.email
    }

    dispatch(addHelpDeskTicket(data))
      .unwrap()
      .then(() => {
        console.log("Successfully Added the Help Desk")
      })
      .catch((err) => {
        console.log(err);
      })

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  return (
    <Box sx={{ width: '100%' , padding : "50px"}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode} = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption"></Typography>
            );
          }
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
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
             Thank for your Request Complaint.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
         {activeStep == 0 ? (
            <>
               <Box sx={{mt:1 , pb:5}}>
                    <Typography sx = {{fontSize:"48px"}}>Help Desk</Typography>
                    <Typography sx = {{fontSize:"14px"}}>Raise any complaints regarding to your society and we will fixed it right away !</Typography>
                </Box>
                </>
            ) : (
                <>
                <Box sx={{ display: 'flex', flexDirection: 'row', p : 5}}>
                   <HelpDeskFormFields 
                      step = {activeStep} 
                      complaint= {complaint}
                      setComplaint = {setComplaint}
                      subComplaint = {subComplaint}
                      setSubComplaint={setSubComplaint}
                      description = {description}
                      setDescription = {setDescription}
                      currentSubComplaints = {currentSubComplaints}
                      setCurrentSubComplaints = {setCurrentSubComplaints}
                   />
                </Box>
            </>
         )}
         <Box display={{"display":"flex"}}>
               <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                >
                    Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                </Button>
                )}

                {activeStep === steps.length - 1 ? (
                     <Button type = "submit" onClick={onSubmiHandler}>
                        Submit
                     </Button>
                ) : (
                    <Button onClick={handleNext}>
                      Next
                    </Button>
                )}
         </Box>
        </>
      )}
    </Box>
  );
}

export default HelpDesk;