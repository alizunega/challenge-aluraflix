import logo from '/iconos/logo.png'
import { styled } from '@mui/material';
import NavButtons from './NavButtons';
import { Link } from 'react-router-dom';

const StyledHeader = styled("header")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5em .5em",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 99,
    position: "relative",
    [theme.breakpoints.up("md")]: {
        padding: ".4em .4em", // Tamaño para pantallas medianas o mayores (desde "md")
    },
}));

const StyledImage = styled("img")(({ theme }) => ({
    width: "8em",
    [theme.breakpoints.down("md")]: {
        width: "6em", // Para pantallas pequeñas (menos de "sm")
    },
    [theme.breakpoints.down("sm")]: {
        width: "3.5em", // Para pantallas extra pequeñas (xs)
    },
}));

const StyledTitle = styled("h1")(({ theme }) => ({
    fontSize: "2.5em", // Valor por defecto para pantallas grandes
    margin: "0",
    color: "black",
    [theme.breakpoints.down("md")]: {
        fontSize: "2em", // Tamaño para pantallas medianas o menores (hasta "md")
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "1em", // Tamaño para pantallas pequeñas (menos de "sm")
    },
}));

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/">
                <StyledImage
                    src={logo}
                    alt="Logo AluraTube"
                />
            </Link>
            <StyledTitle>{"AluraTube"}</StyledTitle>
            <NavButtons />
        </StyledHeader>
    );
}

export default Header;
