import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Divider, Card, CardContent, CardActions, Typography, CardMedia, CircularProgress, Button } from "@mui/material";
import Grid from '@mui/material/Grid2'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Loading from "./Loading";

const ListVids = () => {
  const { modalState, error, categoryState, handleDelete } = useContext(GlobalContext);
  const { handleClickOpen } = modalState;
  const { filteredVideos } = categoryState;


  const styleBorder = {
    borderColor: "#6200ea",
    borderWith: 3,
    margin: "1rem 0"
  }


  if (error) return (
    <div>
      <Typography color="error">{error}</Typography>
    </div>
  );

  //https://img.youtube.com/vi/<videoId>/maxresdefault.jpg\

  return (
    <Grid
      container
      spacing={3}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent={"center"}>
      {
        filteredVideos.length === 0 ?
          <Loading  />
         : (filteredVideos.map((video) => (
            <Grid component="div" xs={4} sm={4} md={4} key={video.id}
            >
              <Card sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                maxWidth: 345,
                height: "100%",
                margin: "auto",
                backgroundColor: "transparent",
                boxShadow: "0 4px 8px rgba(221, 218, 250, 0.886)",
                borderRadius: "8px"
              }} >
                <CardMedia
                  component="img"
                  src={video.img}
                  alt={video.title}
                  height="auto"
                  sx={{ cursor: "pointer" }}
                  onClick={() => window.open(video.url, "_blank", "noopener,noreferrer")}
                />
                <CardContent>
                  <Typography variant="h6"
                    component="a"
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                      "&:hover": {
                        textDecoration: "underline",
                        color: "#ac78f6",
                      },
                    }}
                  >{video.title}</Typography>

                  <Divider sx={styleBorder} />
                  <Typography variant="body3">{video.description}</Typography>
                  <Divider sx={styleBorder} />
                  <Typography variant="body2" >{video.categoria}</Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "space-around", mt: "auto" }}>
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => {
                      handleClickOpen(video)
                    }}
                    size="medium"
                    startIcon={<EditIcon aria-label="Editar" color="success" />} >
                    Editar</Button>
                  <Button
                    onClick={() => { handleDelete(video.id) }}
                    variant="outlined"
                    color="error"
                    size="medium"
                    startIcon={<DeleteForeverIcon aria-label="Eliminar" color="error" />} >
                    Eliminar</Button>
                </CardActions>
              </Card>

            </Grid>

          ))
          )

      }
    </Grid>
  );
};

export default ListVids;