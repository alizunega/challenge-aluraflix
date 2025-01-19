import React from "react";
import { Box } from "@mui/material";



const Banner = () => {
  return (
    <Box
      component="img"
      src="./img/banners/banner3.png" // URL de la imagen
      alt="Banner"
      sx={{
        marginTop: "-10em",
        width: "100%", 
        height: "auto", 
        maxHeight: "400px", 
        objectFit: "cover", 
      }}
    />
  );
};

export default Banner;
