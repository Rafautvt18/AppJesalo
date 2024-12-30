import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Estilos usando styled-components
const AdminPanel = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f4f4f9;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Title = styled.h3`
  color: #333;
`;

const Subtitle = styled.h4`
  color: #555;
`;

const Configuraciones = () => {
  const [users, setUsers] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userIdToChangePassword, setUserIdToChangePassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  // Simulación de funciones API
  const fetchUsers = async () => {
    // Simulación de obtención de usuarios desde un servidor
    return [
      { id: 1, name: 'John Doe', email: 'john@example.com', blocked: false },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', blocked: true },
    ];
  };

  const addUser = async (user) => {
    // Simulación de agregar un usuario
    return true; // Simulamos que el usuario fue agregado correctamente
  };

  const updateUserPassword = async (userId, newPassword) => {
    // Simulación de actualización de contraseña de usuario
    return true; // Simulamos que la contraseña fue actualizada correctamente
  };

  const updateUserStatus = async (userId, blockStatus) => {
    // Simulación de cambio de estado del usuario
    return true; // Simulamos que el estado fue actualizado correctamente
  };

  useEffect(() => {
    const loadUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };
    loadUsers();
  }, []);

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (newUserName && newUserEmail && userPassword) {
      const result = await addUser({ name: newUserName, email: newUserEmail, password: userPassword });
      if (result) {
        setMessage('Usuario creado correctamente');
        setNewUserName('');
        setNewUserEmail('');
        setUserPassword('');
      } else {
        setMessage('Error al crear usuario');
      }
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (userIdToChangePassword && newPassword) {
      const result = await updateUserPassword(userIdToChangePassword, newPassword);
      if (result) {
        setMessage('Contraseña actualizada correctamente');
        setNewPassword('');
        setUserIdToChangePassword('');
      } else {
        setMessage('Error al cambiar la contraseña');
      }
    }
  };

  const handleBlockUser = async (userId, blockStatus) => {
    const result = await updateUserStatus(userId, blockStatus);
    if (result) {
      setUsers(users.map((user) =>
        user.id === userId ? { ...user, blocked: blockStatus } : user
      ));
      setMessage(blockStatus ? 'Usuario bloqueado' : 'Usuario desbloqueado');
    } else {
      setMessage('Error al cambiar el estado del usuario');
    }
  };

  return (
    <AdminPanel>
      <Title>Gestión de Usuarios</Title>

      {/* Formulario para dar de alta un nuevo usuario */}
      <div>
        <Subtitle>Agregar Usuario</Subtitle>
        <form onSubmit={handleAddUser}>
          <label>Nombre:</label>
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            required
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
            required
          />
          <br />
          <label>Contraseña:</label>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <br />
          <Button type="submit">Crear Usuario</Button>
        </form>
      </div>

      {/* Formulario para cambiar la contraseña */}
      <div>
        <Subtitle>Cambiar Contraseña</Subtitle>
        <form onSubmit={handleChangePassword}>
          <label>ID del Usuario:</label>
          <input
            type="text"
            value={userIdToChangePassword}
            onChange={(e) => setUserIdToChangePassword(e.target.value)}
            required
          />
          <br />
          <label>Nueva Contraseña:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <br />
          <Button type="submit">Actualizar Contraseña</Button>
        </form>
      </div>

      {/* Tabla de usuarios */}
      <div>
        <Subtitle>Usuarios Registrados</Subtitle>
        <Table>
          <thead>
            <tr>
              <TableHeader>Nombre</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Estado</TableHeader>
              <TableHeader>Acción</TableHeader>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.blocked ? 'Bloqueado' : 'Activo'}</TableCell>
                <TableCell>
                  <Button onClick={() => handleBlockUser(user.id, !user.blocked)}>
                    {user.blocked ? 'Desbloquear' : 'Bloquear'}
                  </Button>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Mensaje de estado */}
      {message && <p>{message}</p>}
    </AdminPanel>
  );
};

export default Configuraciones;
