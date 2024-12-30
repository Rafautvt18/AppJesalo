import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography, IconButton } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import EditIcon from "@mui/icons-material/Edit";


const Misiones = () => {
  const [openForm, setOpenForm] = useState(false);
  const [missions, setMissions] = useState([
    {
      id: 1,
      name: "Entrega de carga",
      startDate: "2024-11-20",
      endDate: "2024-11-22",
      status: "En Proceso",
      cost: 1000,
      profit: 500,
    },
  ]);

  const [currentMission, setCurrentMission] = useState(null);

  const handleOpenForm = (mission = null) => {
    setCurrentMission(mission);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const handleSaveMission = (missionData) => {
    if (currentMission) {
      // Update existing mission
      setMissions((prev) =>
        prev.map((mission) =>
          mission.id === currentMission.id ? { ...mission, ...missionData } : mission
        )
      );
    } else {
      // Add new mission
      setMissions((prev) => [
        ...prev,
        { id: prev.length + 1, ...missionData },
      ]);
    }
    setOpenForm(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Listado de Misiones
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenForm()}
      >
        Nueva Misión
      </Button>

      <Table style={{ marginTop: "20px" }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Fecha de Inicio</TableCell>
            <TableCell>Fecha de Fin</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Costos Totales</TableCell>
            <TableCell>Ganancias</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {missions.map((mission) => (
            <TableRow key={mission.id}>
              <TableCell>{mission.id}</TableCell>
              <TableCell>{mission.name}</TableCell>
              <TableCell>{mission.startDate}</TableCell>
              <TableCell>{mission.endDate}</TableCell>
              <TableCell>{mission.status}</TableCell>
              <TableCell>${mission.cost}</TableCell>
              <TableCell>${mission.profit}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleOpenForm(mission)}>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <MissionForm
        open={openForm}
        onClose={handleCloseForm}
        onSave={handleSaveMission}
        mission={currentMission}
      />
    </div>
  );
};

const MissionForm = ({ open, onClose, onSave, mission }) => {
  const [formData, setFormData] = useState(
    mission || {
      name: "",
      startDate: "",
      endDate: "",
      status: "En Proceso",
      cost: 0,
      profit: 0,
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{mission ? "Editar Misión" : "Nueva Misión"}</DialogTitle>
      <DialogContent style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <TextField
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Fecha de Inicio"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Fecha de Fin"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          type="date"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Estado"
          name="status"
          value={formData.status}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Costos Totales"
          name="cost"
          value={formData.cost}
          onChange={handleChange}
          type="number"
          fullWidth
        />
        <TextField
          label="Ganancias"
          name="profit"
          value={formData.profit}
          onChange={handleChange}
          type="number"
          fullWidth
        />
        <Button
          startIcon={<UploadFileIcon />}
          variant="contained"
          component="label"
        >
          Cargar Documentación
          <input type="file" hidden />
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Guardar
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Misiones;
