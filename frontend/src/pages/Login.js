import React from 'react';
import JesaloImage from '../assets/jesalo.png';
import './Login.css'; // Archivo CSS externo
import { Email, Lock } from '@mui/icons-material'; // Importa los íconos de Material Icons




const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Lado izquierdo: Imagen */}
        <div className="login-image">
          <img src={JesaloImage} alt="Jesalo" />
        </div>

        {/* Lado derecho: Formulario de inicio de sesión */}
        <div className="login-form">
          <h2>Iniciar Sesión</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <div className="input-icon-group">
                <Email className="input-icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Ingrese su correo electrónico"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <div className="input-icon-group">
                <Lock className="input-icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Ingrese su contraseña"
                />
              </div>
            </div>
            <button type="submit" className="btn-primary">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
