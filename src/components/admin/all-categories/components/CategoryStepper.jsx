import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useSelector } from 'react-redux';

const steps = [
  'Category',
  'Sub Category',
  'Sub Sub Category'
];

export default function CategoryStepper() {
  const {activeStep} = useSelector((state) => state.adminCategory);
  return (
    <Box sx={{ width: '100%' , my: 5}}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{'& .css-3hpdci-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {color:'#027a36'}, '& .css-3hpdci-MuiSvgIcon-root-MuiStepIcon-root.Mui-active': {color:'#027a36'}}}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
