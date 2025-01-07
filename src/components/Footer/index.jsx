import { styled } from "@mui/material";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const StyledFooter = styled("footer")({
  backgroundColor: "transparent",
  padding: "20px",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "row",
  bottom: 0,
  position: "fixed",
  width: "100%",
});

const StyledSocial = styled("div")({
  display: "flex",
  flexDirection: "row",
});
const StyledSocialList = styled("ul")({
  display: "flex",
  flexDirection: "row",
  listStyle: "none",
  gap: "1em",
  padding: 0,
  margin: 0,
});

const StyledLink = styled("a")({
  textDecoration: "none",
  color: "#000",
  display: "flex",
  alignItems: "center",
  gap: "0.7em", // Espacio entre el ícono y el texto
  fontSize: "1rem",
});

const StyledText = styled("h4")({
  margin: 0,
  fontSize: "1rem",
  display: "flex",
  alignItems: "center",
  gap: "0.6em",
});

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
              <GitHubIcon /> GitHub
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="https://www.linkedin.com/in/alicialzunegamza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon /> LinkedIn
            </StyledLink>
          </li>
          <li>
            <StyledLink
              href="https://t.me/AlitaZ84"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon /> Telegram
            </StyledLink>
          </li>
        </StyledSocialList>
      </StyledSocial>
      <StyledText>
        Desarrollado por Alicia <CopyrightOutlinedIcon />
        {currentYear}
      </StyledText>
    </StyledFooter>
  );
};
export default Footer;
