import logo from '/iconos/logo.png'
import { styled } from '@mui/material';
import NavButtons from './NavButtons';

const StyledHeader = styled("header")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 .5em",
    top: 0,
    left: 0,
    width: "100%",
    position: "fixed",
})

const StyledImage = styled("img")({
    width: "8em",
})

const StyledTitle = styled("h1")({
    fontSize: "1.5em",
    margin: "0", 
})


const Header =()=>{
    return(
        <StyledHeader>
            <StyledImage src={logo} alt="Logo AluraTube" />
            <StyledTitle>{"AluraTube"}</StyledTitle>
            <NavButtons />
            
        </StyledHeader>
    );
}
export default Header;