import Footer from './components/Footer';
import Header from './components/Header';
import { styled } from '@mui/material/styles';

const BackgroundGradient = styled("div")({
  backgroundImage:" linear-gradient(to right bottom, #a1a4f5, #9ba5f3, #95a6f1, #90a6ee, #8ba7eb, #84a3eb, #7d9eec, #759aec, #6b8eef, rgb(101, 130, 240), #6275f0, #6367ef);",
  height: "100dvh",
  width: "100dvw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",

})

const App = () => (
  <BackgroundGradient>
    <Header />
    <h1>Hola Vite</h1>

    <Footer  />
  </BackgroundGradient>
);

export default App
