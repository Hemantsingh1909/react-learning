import React from 'react';
import Button from '@mui/material/Button';

export const CustomButton = ({ variant, label }) => {
  return <Button variant={variant} color='success'>{label}</Button>;
};