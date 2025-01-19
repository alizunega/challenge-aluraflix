
import "./index.css"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Home";
import Form from "./pages/Form";
import { styled } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "../src/context/GlobalContext";



const BackgroundGradient = styled("div")({
//  backgroundColor:"#020201",
  minHeight: "100vh",
  width: "100dvw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  // color: "white",
});

const App = () => (
  <BackgroundGradient>
    <Router>
      <GlobalProvider>
        <Header />
        <div style={{ flex: 1, width: "100%" }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/add" element={<Form />} />
          </Routes>
        </div>
        <Footer />
      </GlobalProvider>
    </Router>
</BackgroundGradient>
);

export default App;
