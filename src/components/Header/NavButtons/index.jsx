import { styled, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';

const StyledNav = styled("nav")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  gap: "1em",
});


const NavButtons = () => {
  return(
  <StyledNav>
    <Button variant="contained" color="primary" size="large" startIcon={<HomeIcon />}>
      Inicio
    </Button>
    <Button variant="contained" color="primary" size="large" startIcon={<VideoCallOutlinedIcon />}>
      Nuevo
    </Button>
  </StyledNav>)
};

export default NavButtons;
