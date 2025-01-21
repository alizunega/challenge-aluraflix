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
      main:"#546fc9",
      contrastText: "#efeff7",
      error: "#ff0000",
    }
  },
  typography: {
    fontFamily: "var(--font-cuerpo)", 
    h1: { fontFamily: "var(--font-titulos)" },
    h2: { fontFamily: "var(--font-titulos)" },
    h3: { fontFamily: "var(--font-titulos)" },
    h4: { fontFamily: "var(--font-titulos)" },
    h5: { fontFamily: "var(--font-titulos)" },
    h6: { fontFamily: "var(--font-titulos)" },
    body1: { fontFamily: "var(--font-cuerpo)" },
    body2: { fontFamily: "var(--font-cuerpo)" },
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
