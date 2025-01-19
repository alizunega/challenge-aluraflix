import * as React from "react";
import '../../index.css'
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { FormControl, Button, Select, MenuItem, InputLabel, TextField, Box, Container, Typography } from "@mui/material";

import { GlobalContext } from "../../context/GlobalContext";

const Form = () => {

  const { categoryState, handleSubmit } = React.useContext(GlobalContext);
  const { categorias } = categoryState;

  //manejo de formulario de carga

  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [url, setUrl] = React.useState("")
  const [categoriaSeleccionada, setCategoria] = React.useState("");
  const [prevImage, setPrevImage] = React.useState("");
  
  const extractVideoId = (url) => {
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === "www.youtube.com" || urlObj.hostname === "youtube.com") {
        return urlObj.searchParams.get("v");
      } else if (urlObj.hostname === "youtu.be") {
        return urlObj.pathname.slice(1);
      }

    } catch (err) {
      console.log("Url invalida, error: ", err);
    }
    return null;

  }
  const crearImg = (url) => {

    if (url) {

      const videoId = extractVideoId(url);
      console.log("id del video: ", videoId )

      if (videoId) {
        setPrevImage(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
      } else {
        setPrevImage(""); // Limpia la vista previa si la URL no es válida
      }
    }
    
    console.log("link a vista previa: ", prevImage);
    
  }



  const handleLimpieza = () => {
    setTitle("")
    setDescription("")
    setUrl("")
    setCategoria("")
  }


  const inputStyle = { m: 1, width: "57ch", autoWidth: 'auto' };

  // console.log(categorias);

  return (
    <Container align="center" component="div" maxWidth="md" sx={{ m: "auto" }}>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          const categoriaFinal =
            categoriaSeleccionada === "" || categoriaSeleccionada === "default"
              ? "Todas"
              : categoriaSeleccionada;
          handleSubmit({ title, url, description, categoria: categoriaFinal, img: prevImage })
          handleLimpieza()
        }}
        sx={{
          "& .MuiTextField-root": inputStyle,
          border: ".1em solid #515151",
          borderRadius: ".5em",
          padding: "2em",
          height: "100%"
        }}
        noValidate
        autoComplete="on"
      >

        <div >
          <Typography variant="h4" align="center" color="white">Nuevo Video</Typography>
          <TextField
            required
            id="titulo"
            name="title"
            label="Titulo"
            type="text"
            value={title}
            sx={inputStyle}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          // error= { errors.title.error }
          // helperText={ errors.title.error ? errors.title.message: "" }
          />
          <TextField
            required
            id="link"
            name="url"
            label="Link"
            type="text"
            value={url}
            sx={inputStyle}
            onChange={(e) => {
              setUrl(e.target.value)
              crearImg(e.target.value)
            }}
          // error= { errors.url.error }
          // helperText={ errors.url.error ? errors.url.message: "" }
          />
          <TextField
            required
            id="descripcion"
            name="description"
            label="Descripcion"
            type="text"
            value={description}
            sx={inputStyle}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          // error= { errors.description.error }
          // helperText={ errors.description.error ? errors.description.message: "" }
          />
          <FormControl >
            <InputLabel id="categorias-label" sx={{ p: 1 }}>Categorías</InputLabel>
            <Select
              required
              labelId="categorias-label"
              id="categorias"
              name="category"
              value={categoriaSeleccionada}
              label="Categorías"
              onChange={(e) => {
                setCategoria(e.target.value)
              }}
              sx={{ m: 1, width: "57ch", textAlign: "left" }}

            >
              <MenuItem value="default"><em>Selecciona una Categoria</em></MenuItem>
              {
                categorias.map(
                  (categoria) => (
                    <MenuItem
                      key={categoria.id}
                      value={categoria.nombre}
                      sx={{ backgroundColor: "transparent" }}>{categoria.nombre}</MenuItem>
                  )
                )
              }

            </Select>

          </FormControl>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1.5em",
            justifyContent: "space-around",
            paddingTop: "1em",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            color="success"
            size="medium"
            startIcon={<AddIcon />}
          >
            Agregar
          </Button>
          <Button
            onClick={handleLimpieza}
            variant="outlined"
            color="error"
            size="medium"
            endIcon={<DeleteIcon />}
          >
            Limpiar
          </Button>
        </div>
      </Box>
    </Container>


  );
};

export default Form;
