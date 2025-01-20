import * as React from "react";
import CloseIcon from '@mui/icons-material/Close'
import { GlobalContext } from "../../context/GlobalContext";
import {
  Dialog,
  DialogActions,
  TextField,
  DialogContent,
  DialogTitle,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton, 
  Button
} from "@mui/material";




const styleBand = {
  width: "auto",
  backgroundColor: "#5875f7",
  textAlign: "center",
  justifyContent: "center",
  // paddingTop: "1em",
  m: 0,
  p: 2, 
};

const inputStyle = (theme) => ({
  width: "100%",
  m: 1,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  }
})

const selectStyle = (theme) => ({
  width: "98%",
  m: 1,
  p:1,
  marginLeft: ".5em",
  textAlign: "left",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginLeft: "0",
    padding:".5em"
  }
})

const styleDialogActions = (theme) => ({
  marginLeft: ".5em",
  justifyContent: "space-around",
  marginTop: "1em",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    marginLeft: "auto",
    width: "100%",
    gap: ".8em",
  },
});



export default function FormDialog() {
   
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
          return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        } else {
          return "";
        }
        

      }
      return ""

      // //console.log("link a vista previa: ", prevImage);
      
    }
  


  //menejo de estados
  const { modalState, categoryState, handleEdit } =
    React.useContext(GlobalContext);
  const { open, selectedVideo, handleClose } = modalState;
  const { categorias } = categoryState;

  const [categoriaSeleccionada, setCategoria] = React.useState(
    selectedVideo ? selectedVideo.categoria : ""
  );

  //manejo de modificacion
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Valores en target: ", e.target);

    const nuevoVideo = {
      id: selectedVideo.id,
      categoria: e.target.categoria.value,
      title: e.target.title.value,
      url: e.target.url.value,
      img: crearImg(e.target.url.value),
      description: e.target.description.value,
    };

    console.log("Form submitted:", nuevoVideo);
    handleEdit(nuevoVideo);
    handleClose();
  };

  React.useEffect(() => {
    if (selectedVideo) {
      setCategoria(selectedVideo.categoria);
    }
  }, [selectedVideo]);

  const handleChangeCat = (e) => {
    if (e && e.target) {
      console.log("Nuevo valor para cat: ", e.target.value);
      setCategoria(e.target.value);
    }
  };

  return (
    <React.Fragment>
      {open && selectedVideo && (
        <Dialog 
          fullWidth
          maxWidth="md"
          open={open}
          onClose={handleClose}
          sx={{
            "& .MuiDialogPaper-root": {
              width: '80%', // Ajusta el porcentaje de ancho que desees
            },
            "& > .MuiBackdrop-root": {
              backdropFilter: "blur(2px)",
            },
          }}
        >
          <DialogTitle sx={styleBand}>
            Editar Card
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={(theme) => ({
              position: 'absolute',
              right: 8,
              top: 8,
              color: "white",
            })}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                "& .MuiTextField-root": inputStyle,
                border: ".1em solid #515151",
                borderRadius: ".5em",
                padding: "1em",
              }}
              noValidate
              autoComplete="on"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                }}
              >
                <TextField
                  required
                  id="titulo"
                  label="Titulo"
                  type="text"
                  sx={inputStyle}
                  defaultValue={selectedVideo.title}
                  name="title"
                />
                <TextField
                  required
                  id="url"
                  label="Link"
                  type="text"
                  sx={inputStyle}
                  defaultValue={selectedVideo.url}
                  name="url"
                />
                <TextField
                  id="descripcion"
                  label="Descripcion"
                  type="text"
                  sx={inputStyle}
                  defaultValue={selectedVideo.description}
                  name="description"
                />
                <FormControl>
                  <InputLabel id="categorias-label" sx={{ p: "1em" }}>
                    Categorías
                  </InputLabel>
                  <Select
                    labelId="categorias-label"
                    id="categorias"
                    name="categoria"
                    value={categoriaSeleccionada}
                    label="Categorías"
                    onChange={handleChangeCat}
                    sx={selectStyle}
                  >
                    {categorias.map((categoria) => (
                      <MenuItem key={categoria.id} value={categoria.nombre}>
                        {categoria.nombre}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <DialogActions sx={styleDialogActions}>
                <Button type="submit" variant="outlined" color="success" sx={{ width: "100%" }}>
                  Modificar
                </Button>
                <Button variant="outlined" color="error" sx={{ width: "100%" }} onClick={handleClose}>
                  Cancelar
                </Button>
              </DialogActions>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </React.Fragment>
  );
}
