import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
  Button,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CustomModal = ({
  open,
  handleClose,
  title,
  children,
  onConfirm,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  disableConfirm = false,
}) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <Box sx={{ position: 'relative', padding: '16px' }}>
        <DialogTitle>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            {title}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      </Box>
      <DialogContent>
        <Box sx={{ py: 2 }}>{children}</Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary" variant="outlined">
          {cancelText}
        </Button>
        <Button
          onClick={onConfirm}
          color="primary"
          variant="contained"
          disabled={disableConfirm}
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
