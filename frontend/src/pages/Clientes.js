import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  TextField,
  IconButton,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  InputAdornment,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import CustomModal from '../components/CustomModal';

const Clientes = () => {
  // Estados
  const [open, setOpen] = useState(false);
  const [contacts, setContacts] = useState([{ nombre: '', email: '', telefono: '', cargo: '' }]);
  const [clientes, setClientes] = useState([
    {
      nombre: 'Tech Solutions S.A.',
      direccion: 'Av. Innovación 123',
      taxId: 'RFC123456789',
      representante: 'Juan Pérez',
      contactos: [],
      documentos: [],
    },
  ]);
  const [documentos, setDocumentos] = useState([]);
  const [search, setSearch] = useState('');

  // Funciones para manejar el modal
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Manejo de contactos
  const handleContactChange = (index, field, value) => {
    const newContacts = [...contacts];
    newContacts[index][field] = value;
    setContacts(newContacts);
  };

  const addContact = () =>
    setContacts([...contacts, { nombre: '', email: '', telefono: '', cargo: '' }]);

  const removeContact = (index) =>
    setContacts(contacts.filter((_, i) => i !== index));

  // Manejo de documentos
  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files).map((file) => ({
      name: file.name,
      size: `${(file.size / 1024).toFixed(2)} KB`,
    }));
    setDocumentos([...documentos, ...newFiles]);
  };

  const removeDocumento = (index) => {
    setDocumentos(documentos.filter((_, i) => i !== index));
  };

  // Filtrado de clientes
  const filteredClientes = clientes.filter((cliente) =>
    cliente.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      {/* Título y botón */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Clientes Registrados
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          CLIENTE NUEVO
        </Button>
      </Box>

      {/* Barra de búsqueda */}
      <Box mb={3}>
        <TextField
          fullWidth
          label="Buscar Cliente"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Lista de clientes filtrados */}
      <List>
        {filteredClientes.map((cliente, index) => (
          <ListItem key={index} sx={{ borderBottom: '1px solid #ccc' }}>
            <ListItemText
              primary={cliente.nombre}
              secondary={`Dirección: ${cliente.direccion} | Tax ID: ${cliente.taxId} | Representante: ${cliente.representante}`}
            />
            {cliente.documentos.length > 0 && (
              <ListItemSecondaryAction>
                <IconButton edge="end" color="primary">
                  <UploadFileIcon />
                </IconButton>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        ))}
      </List>

      {/* Modal para registrar cliente nuevo */}
      <CustomModal
        open={open}
        handleClose={handleClose}
        title="Registrar Cliente Nuevo"
        onConfirm={() => {
          setClientes([
            ...clientes,
            {
              nombre: 'Nuevo Cliente',
              direccion: '',
              taxId: '',
              representante: '',
              contactos: [...contacts],
              documentos: [...documentos],
            },
          ]);
          handleClose();
          setContacts([{ nombre: '', email: '', telefono: '', cargo: '' }]);
          setDocumentos([]);
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Nombre de Cliente" variant="outlined" required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Dirección" variant="outlined" required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Tax ID / RFC" variant="outlined" required />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Representante de Cliente (Usuario Interno)"
              variant="outlined"
              required
            />
          </Grid>

          {/* Contactos */}
          <Grid item xs={12}>
            <Typography variant="h6">Contacto Empresa</Typography>
          </Grid>
          {contacts.map((contact, index) => (
            <Grid container spacing={2} key={index} alignItems="center">
              <Grid item xs={11}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Nombre"
                      variant="outlined"
                      value={contact.nombre}
                      onChange={(e) => handleContactChange(index, 'nombre', e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      value={contact.email}
                      onChange={(e) => handleContactChange(index, 'email', e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Teléfono"
                      variant="outlined"
                      value={contact.telefono}
                      onChange={(e) => handleContactChange(index, 'telefono', e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Cargo"
                      variant="outlined"
                      value={contact.cargo}
                      onChange={(e) => handleContactChange(index, 'cargo', e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={1}>
                {index > 0 && (
                  <IconButton color="secondary" onClick={() => removeContact(index)}>
                    <RemoveIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button variant="outlined" color="primary" onClick={addContact} startIcon={<AddIcon />}>
              Agregar Contacto
            </Button>
          </Grid>

          {/* Documentos */}
          <Grid item xs={12}>
            <Typography variant="h6">Documentación</Typography>
            <Button
              variant="outlined"
              component="label"
              startIcon={<UploadFileIcon />}
              sx={{ mt: 2 }}
            >
              Subir Documentos
              <input type="file" hidden multiple onChange={handleFileUpload} />
            </Button>
            <List>
              {documentos.map((doc, index) => (
                <ListItem key={index}>
                  <ListItemText primary={doc.name} secondary={doc.size} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" onClick={() => removeDocumento(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </CustomModal>
    </Container>
  );
};

export default Clientes;
