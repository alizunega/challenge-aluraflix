import * as React from "react";
import Button from "@mui/material/Button";
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
} from "@mui/material";

const styleBand = {
  width: "auto",
  backgroundColor: "#5875f7",
  textAlign: "center",
  justifyContent: "center",
  paddingTop: "1em",
};

export default function FormDialog() {
  //estilos para header y footer de card

  //menejo de estados
  const { modalState, categoryState, handleEdit } =
    React.useContext(GlobalContext);
  const { open, selectedVideo, handleClose } = modalState;
  const { categorias } = categoryState;
  const inputStyle = { m: 1, width: "57ch", autoWidth: "auto" };
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
          open={open}
          onClose={handleClose}
          sx={{
            "& > .MuiBackdrop-root": {
              backdropFilter: "blur(2px)",
            },
          }}
        >
          <DialogTitle sx={styleBand}>Editar Card</DialogTitle>
          <DialogContent>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                "& .MuiTextField-root": inputStyle,
                border: ".1em solid #515151",
                borderRadius: ".5em",
                padding: "1em",
                height: "100%",
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
                  <InputLabel id="categorias-label" sx={{ p: 1 }}>
                    Categorías
                  </InputLabel>
                  <Select
                    labelId="categorias-label"
                    id="categorias"
                    name="categoria"
                    value={categoriaSeleccionada}
                    label="Categorías"
                    onChange={handleChangeCat}
                    sx={{ m: 1, width: "57ch" }}
                  >
                    {categorias.map((categoria) => (
                      <MenuItem key={categoria.id} value={categoria.nombre}>
                        {categoria.nombre}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <DialogActions sx={{ justifyContent: "space-evenly" }}>
                <Button variant="outlined" color="purple">
                  Limpiar
                </Button>
                <Button type="submit" variant="outlined" color="error">
                  Modificar
                </Button>
              </DialogActions>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </React.Fragment>
  );
}
