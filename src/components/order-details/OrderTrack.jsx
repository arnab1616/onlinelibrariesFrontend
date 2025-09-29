import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Order Placed',
    description: `On 22 sep Monday 2025`,
  },
  {
    label: 'Shipped',
    description: 'On 22 sep Monday 2025',
  },{
    label: 'Out for delivery',
    description: 'Your order is out for delivery',
  },
  {
    label: 'Delivered',
    description: `On 22 sep Monday 2025`,
  },
];

export default function OrderTrack() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      {/* sx={{'& .MuiStepConnector-line':{borderColor:'#027a36', borderLeftWidth: '1px'}, '& .MuiStepContent-root': {borderLeft:'2px solid #00d35cff'}}} */}
      <Stepper activeStep={activeStep} orientation="vertical" >
        {steps.map((step, index) => (
          <Step key={step.label} sx={{'& .Mui-completed .MuiSvgIcon-root':{color:'#027a36'}}}>
            <StepLabel
              optional={
                index === steps.length - 1 && activeStep !== steps.length ? (
                  <Typography variant="caption">Expected delivery on 22 sep Monday 202</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Your order has been delivered successfully.</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            See all updates
          </Button>
        </Paper>
      )}
    </Box>
  );
}
