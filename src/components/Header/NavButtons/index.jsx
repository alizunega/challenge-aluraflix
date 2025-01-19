import { styled, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import React from "react";
import { Link } from "react-router-dom";



const StyledNav = styled("nav")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  gap: "1em",

  [theme.breakpoints.up("sm")]: {
    padding: ".8rem",
    gap: ".8em",

  }, 


}));

const buttonStyle = (theme) => ({
  fontSize: {
    xs: "0.7rem", 
    md: "1rem", 
  },
  padding: {
    xs: ".3em .75em",
    md: ".7em 1.2em",
    sm: ".4em 1em",
    xs: '0',
  },
  "& span": {
    color: "black", 
  },
  "& .MuiButton-startIcon": {
    display: "flex",
    margin:".2em auto"
  },
  [theme.breakpoints.down("sm")]: {
    "& span": {
      display: "none", 
    },

    "& .MuiButton-startIcon": {
      fontSize: "1rem",
      textAlign: "center"
    },

  },
});



//onClick={dispatch({type: "ABRIR_FORM", payload: })}

const NavButtons = () => {
  // const { routesState } = useContext(GlobalContext);
  // const { goToHome, goToNuevoVideo } = routesState;

  return (
    <StyledNav>
      <Link to="/">
        <Button
          variant="contained"
          color="primary"
          startIcon={<HomeIcon />}
          sx={buttonStyle}
        // onClick={goToHome}
        >
          <span>Inicio</span>
        </Button>
      </Link>
      <Link to="/add">

        <Button
          variant="contained"
          color="primary"
          startIcon={<VideoCallOutlinedIcon />}
          // onClick={goToNuevoVideo}
          sx={buttonStyle}
        >
          <span>Nuevo</span>
        </Button>
      </Link>

    </StyledNav>
  );
};

export default NavButtons;
