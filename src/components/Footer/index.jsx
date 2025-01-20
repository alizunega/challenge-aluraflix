import { styled } from "@mui/material";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { fontSize, textAlign } from "@mui/system";


const StyledFooter = styled("footer")(({theme})=>({
  backgroundColor: "transparent",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  bottom: 0,
  width: "100dvw",
  [theme.breakpoints.down("sm")]:{
    flexDirection: "column",
    textAlign:"center"
  }

})
);

const StyledSocial = styled("div")({
  display: "flex",
  flexDirection: "row",
});

const StyledSocialList = styled("ul")(({theme})=>({
  display: "flex",
  flexDirection: "row",
  listStyle: "none",
  gap: "1em",
  padding: 0,
  margin: 0,

  [theme.breakpoints.down("md")]:{
    gap:".6em"
  },
  [theme.breakpoints.down("sm")]:{
    gap:".5em"
  }

}));

const StyledLink = styled("a")(({theme})=>({
  textDecoration: "none",
  color: "#d1f1fd",
  display: "flex",
  alignItems: "center",
  gap: "0.7em", // Espacio entre el ícono y el texto
  fontSize: "1rem",
  "& span":{
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  [theme.breakpoints.down("md")]:{
    fontSize:".7em",
    gap:".5em"
  }

}));

const StyledText = styled("h4")(({theme})=>({
  margin: 0,
  fontSize: "1rem",
  display: "flex",
  alignItems: "center",
  gap: "0.6em",
  [theme.breakpoints.down("md")]:{
    fontSize:".8em"
  },
  [theme.breakpoints.down("sm")]:{
    fontSize:".6em",
    gap:".3em"
  }
}));

const StyledImg =styled("img")(({theme})=>({
  width: "6em",
  right: 0,
  bottom: 0,

  [theme.breakpoints.down("sm")]:{
    width:"4em"
  }

}))

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <StyledSocial>
        <StyledSocialList>
          <li>
            <StyledLink
              href="https://github.com/alizunega"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon /> 
              <span>GitHub</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="https://www.linkedin.com/in/alicialzunegamza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon /> 
              <span>LinkedIn</span>
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="https://t.me/AlitaZ84"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon /> 
              <span>Telegram</span>
            </StyledLink>
          </li>
        </StyledSocialList>
      </StyledSocial>
      <StyledText>
        Desarrollado por Alicia 
        <CopyrightOutlinedIcon 
        sx={{
          fontSize:{
            md:"2em",
            sm: "1em",
            xs:".8em", 
          },
          marginLeft: "8px", 
        }} />
        {currentYear}
      </StyledText>
      <StyledImg src="./iconos/logo-wb.png" alt="Icono Logo Personal" />
    </StyledFooter>
  );
};
export default Footer;
