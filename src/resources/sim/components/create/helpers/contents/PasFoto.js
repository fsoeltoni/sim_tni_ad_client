import React, { forwardRef } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Slide
} from "@material-ui/core";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PasFoto = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Aktifkan Kamera
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Simpan Foto
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PasFoto;
