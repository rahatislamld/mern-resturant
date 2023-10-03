import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const MyModal = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-description" variant="body2">
            {content}
          </Typography>
          <Button color="primary" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModal;
