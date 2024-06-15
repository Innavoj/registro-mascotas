import * as React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import {main, lime, purple, primary, secondary, inherit, dark, light, contrastText, background} from '@mui/material/colors';





  export const ThemeConfig ()  {
       return (
           <ThemeProvider theme={theme}>
                <CssBaseline />
                 
           </ThemeProvider>
       )
   }