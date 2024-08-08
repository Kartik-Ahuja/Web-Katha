import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

//   const handleWhatsAppClick = () => {
//     const { name, email, mobile, message } = formData;

//     const url =
//       "https://wa.me/918696607292?text=" +
//       `*Name :* ${name}%0a` +
//       `*Email :* ${email}%0a` +
//       `*Mobile :* ${mobile}%0a` +
//       `*Message :* ${message}`;

//     window.open(url, "_blank").focus();
//   };

  const handleClearForm = () => {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <div>
      <Button onClick={handleClickOpen} style={{color:"white" , fontWeight:"600"}}>Let's do this</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        
      >
      <form action="https://formspree.io/f/xnqeqnke"
        method="POST">
        <DialogTitle>Let's Start With US</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Us Know About Your Requirements And Provide The Following
            Details. We Will Get Back To You With An Idea.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={formData.name}
            onChange={handleInputChange}
          />

          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            name="email"
            fullWidth
            variant="standard"
            value={formData.email}
            onChange={handleInputChange}
          />

          <TextField
            autoFocus
            margin="dense"
            id="mobile"
            label="Mobile No"
            name="tel"
            type="tel"
            fullWidth
            variant="standard"
            value={formData.mobile}
            onChange={handleInputChange}
          />

          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="How can we help you?"
            name="message"
            type="text"
            fullWidth
            variant="standard"
            value={formData.message}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClearForm}> Clear All </Button>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </form>
      </Dialog>
    </div>
  );
}
