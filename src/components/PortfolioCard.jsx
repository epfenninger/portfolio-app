import * as React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
} from "@mui/material";

export default function PortfolioCard({ title, content, altText, imgSrc }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Card>
        <CardActionArea onClick={handleClickOpen("paper")}>
          <CardMedia
            style={{
              objectFit: "cover",
              height: "20vh",
              width: "100%",
              margin: "auto",
            }}
            component="img"
            image={imgSrc}
            alt={altText}
          />
          <h2
            style={{
              position: "absolute",
              color: "white",
              bottom: "0vh",
              textShadow: "1px black",
              marginLeft: "1vw",
            }}
          >
            {title}
          </h2>
        </CardActionArea>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        maxWidth="xl"
      >
        <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {content}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
