import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const defaultValues = {
  name: "",
  email: "",
  message: "",
};

const REACT_APP_HA_WEBHOOK = process.env.REACT_APP_HA_WEBHOOK;

const Contact = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    handleClickOpen();

    fetch(REACT_APP_HA_WEBHOOK, {
      method: "POST",
      body: JSON.stringify({
        name: formValues.name,
        email: formValues.email,
        message: formValues.message,
      }),
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        rowSpacing={5}
        position="relative"
        top="20vh"
      >
        <Grid item>
          <h1 style={{ fontSize: "2.8vw" }}>
            Let's Connect!
            <span role="img" aria-label="Shaking Hands/Handshake">
              🤝
            </span>
          </h1>
        </Grid>
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            id="age-input"
            name="email"
            label="Email"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            id="message-input"
            name="message"
            label="Message"
            type="text"
            value={formValues.message}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Thanks for reaching out. I'll be in touch soon."}
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Cool!
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <Grid item>
          <a href="http://www.linkedin.com/in/epfenninger">
            <img
              src={require("../images/linkedIn.png")}
              a
              href="www.linkedin.com/in/epfenninger"
              height={"50vh"}
            />
          </a>
        </Grid>
      </Grid>
    </form>
  );
};
export default Contact;
