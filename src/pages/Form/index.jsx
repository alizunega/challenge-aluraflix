import * as React from "react";

import './Form.css'
import '../../index.css'
import DeleteIcon from "@mui/icons-material/Delete";

import CloseIcon from '@mui/icons-material/Close'
import AddIcon from "@mui/icons-material/Add";
import { FormControl, Button, Select, MenuItem, InputLabel, TextField, Box, Container, Typography, IconButton } from "@mui/material";



import { GlobalContext } from "../../context/GlobalContext";




const Form = () => {

  const { categoryState, handleSubmit, routesState } = React.useContext(GlobalContext);
  const { categorias } = categoryState;
  const { goToHome } = routesState;

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
      console.log("id del video: ", videoId)

      if (videoId) {
        setPrevImage(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
      } else {
        setPrevImage("");
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


  const inputStyle = (theme) => ({
    width: "57ch",
    m: 1,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    }
  })

  const selectStyle = (theme) => ({
    width: "57ch",
    m: "1",
    textAlign: "left",

    [theme.breakpoints.down("md")]: {
      width: "57ch",
      marginLeft:".5em"
    },

    [theme.breakpoints.down("sm")]: {
      width: "49ch",
      marginLeft:".5em"
    }
  })

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
          padding: "1em",
          height: "100%"
        }}
        noValidate
        autoComplete="on"
      >

        <div >
          <div className="div-title">
          <Typography variant="h4" className="form-title">Nuevo Video</Typography>
            <IconButton
              aria-label="close"
              onClick={goToHome}
              sx={(theme) => ({
                justifyContent: "right",
                position: 'relative',
                right: 0,
                top: 0,
                color: "white",
              })}
            >
              <CloseIcon />
            </IconButton>
        

          </div>
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
            multiline
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
              sx={selectStyle}

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

        <div className="buttons-div" >
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
