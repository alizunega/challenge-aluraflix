import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Button, Container } from "@mui/material";



const CategoryFilter = () => {
 const {categoryState} = useContext(GlobalContext);
 const { categorias, selectedCategory, filterByCategory } = categoryState;

  const boxStyle= (theme) => ({
    display: "flex",
    flexDirection: "row",
    gap: "1em",
    flexWrap: "wrap",
    mt: ".8em",
    mb: "1em",
    justifyContent: "center",

    [theme.breakpoints.down("md")]:{
      gap: ".6em",
      flexWrap: "wrap",
      mt: ".3em",
      mb: ".4em",
      justifyContent: "left",
      position:"relative",

    }

  })

  return (
    <Container component="section" sx={boxStyle} >
      {categorias.map((categoria) => (
        <Button
          sx={{
            backgroundColor: selectedCategory === categoria.nombre ? "#c9545f" : "custom.main",
            color:"custom.contrastText",
            fontWeight: {
              md:"600",
              sm:"500"
            } ,
            fontSize: {
              md:"1em",
              sm:".8em",
              xs:".6em"
            } ,

            "&:hover": {
              backgroundColor: "#db4f60",
              // Cambiar el color al hacer hover
            },
          }}
          key={categoria.id}
          variant={selectedCategory === categoria.nombre ? "contained" : "outlined"}
          onClick={() => filterByCategory(categoria.nombre)}
          aria-label={`Filtrar por ${categoria.nombre}`}
        >
          {categoria.nombre}
        </Button>
      ))}
    </Container>
  );
};

export default CategoryFilter;
