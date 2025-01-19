import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; //para resetear formato de navegador por defecto


const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000", 
      paper: "#121212", 
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
    custom:{
      main:"#FF7D95",
      contrastText: "#000000",
    }
  },
  typography: {
    allVariants: {
      color: "#ffffff", 
    },
  },
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
)
