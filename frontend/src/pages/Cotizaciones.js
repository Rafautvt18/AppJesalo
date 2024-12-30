import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Cotizaciones = () => {
  const [cotizaciones, setCotizaciones] = useState([]);
  const [open, setOpen] = useState(false);

  // Form state
  const [form, setForm] = useState({
    cliente: '',
    tipoServicio: '',
    salida: '',
    llegada: '',
    direccionRecoleccion: '',
    direccionEntrega: '',
    detallesCarga: '',
  });

  // Open/close modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setForm({
      cliente: '',
      tipoServicio: '',
      salida: '',
      llegada: '',
      direccionRecoleccion: '',
      direccionEntrega: '',
      detallesCarga: '',
    });
  };

  // Handle form change
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Add new cotización
  const handleRegister = () => {
    setCotizaciones([...cotizaciones, { ...form, status: 'Pendiente' }]);
    handleClose();
  };

  // Confirm cotización
  const handleConfirm = (index) => {
    const updatedCotizaciones = [...cotizaciones];
    updatedCotizaciones[index].status = 'Misión';
    setCotizaciones(updatedCotizaciones);
  };

  return (
    <Container>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Cotizaciones
        </Typography>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleOpen}>
          Cotización Nueva
        </Button>
      </Box>

      {/* Cotizaciones List */}
      <Grid container spacing={3}>
        {cotizaciones.map((cotizacion, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Cliente: {cotizacion.cliente}
                </Typography>
                <Typography variant="body2">Tipo de Servicio: {cotizacion.tipoServicio}</Typography>
                <Typography variant="body2">Salida: {cotizacion.salida}</Typography>
                <Typography variant="body2">Llegada: {cotizacion.llegada}</Typography>
                <Typography variant="body2">Dirección Recolección: {cotizacion.direccionRecoleccion}</Typography>
                <Typography variant="body2">Dirección Entrega: {cotizacion.direccionEntrega}</Typography>
                <Typography variant="body2">Detalles Carga: {cotizacion.detallesCarga}</Typography>
                <Typography variant="body2" sx={{ mt: 1, fontWeight: 'bold', color: 'secondary.main' }}>
                  Estado: {cotizacion.status}
                </Typography>
                {cotizacion.status === 'Pendiente' && (
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<CheckCircleIcon />}
                    sx={{ mt: 2 }}
                    onClick={() => handleConfirm(index)}
                  >
                    Confirmar Cotización
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for new cotización */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Registrar Cotización Nueva
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Grid container spacing={2}>
              {/* Form fields */}
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Cliente</InputLabel>
                  <Select
                    value={form.cliente}
                    onChange={(e) => handleChange('cliente', e.target.value)}
                  >
                    <MenuItem value="Tech Solutions">Tech Solutions</MenuItem>
                    <MenuItem value="Innovate Logistics">Innovate Logistics</MenuItem>
                    <MenuItem value="Transporte Global">Transporte Global</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Tipo de Servicio</InputLabel>
                  <Select
                    value={form.tipoServicio}
                    onChange={(e) => handleChange('tipoServicio', e.target.value)}
                  >
                    <MenuItem value="OBC">OBC</MenuItem>
                    <MenuItem value="HOT SHOT">HOT SHOT</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Salida"
                  variant="outlined"
                  value={form.salida}
                  onChange={(e) => handleChange('salida', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Llegada"
                  variant="outlined"
                  value={form.llegada}
                  onChange={(e) => handleChange('llegada', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Dirección de Recolección"
                  variant="outlined"
                  value={form.direccionRecoleccion}
                  onChange={(e) => handleChange('direccionRecoleccion', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Dirección de Entrega"
                  variant="outlined"
                  value={form.direccionEntrega}
                  onChange={(e) => handleChange('direccionEntrega', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Detalles de la Carga"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={form.detallesCarga}
                  onChange={(e) => handleChange('detallesCarga', e.target.value)}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancelar
          </Button>
          <Button onClick={handleRegister} color="primary" variant="contained">
            Registrar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Cotizaciones;
