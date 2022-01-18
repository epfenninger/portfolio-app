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

export default function PortfolioCard({
  title,
  content,
  altText,
  imgSrc,
  textColor,
  skills,
  contentPicture,
  iFrameVideo,
  iFrameWidth,
  iFrameHeight,
  iFrameAllow,
  imgFit,
}) {
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

  let topElement = "";

  if (iFrameVideo !== undefined) {
    topElement = (
      <iframe
        width={iFrameWidth}
        height={iFrameHeight}
        src={iFrameVideo}
        allow={iFrameAllow}
        allowFullScreen
        style={{ display: "flex", margin: "auto" }}
      />
    );
  }

  if (contentPicture !== undefined) {
    topElement = (
      <img
        src={contentPicture}
        style={{ display: "flex", margin: "auto" }}
        width="1000px"
      />
    );
  }

  return (
    <div>
      <Card>
        <CardActionArea onClick={handleClickOpen("paper")}>
          <h2
            style={{
              position: "absolute",
              color: textColor,
              top: "0vh",
              textShadow: "1px black",
              marginLeft: "1vw",
              fontSize: "1em",
            }}
          >
            {skills}
          </h2>
          <CardMedia
            style={{
              objectFit: imgFit,
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
              color: textColor,
              bottom: "-1vh",
              textShadow: "3px black",
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
          {topElement}
          <h2 style={{ whiteSpace: "pre-line" }}>{content}</h2>
        </DialogContent>
      </Dialog>
    </div>
  );
}
