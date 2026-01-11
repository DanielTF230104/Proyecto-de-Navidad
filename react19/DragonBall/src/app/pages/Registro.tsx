import { useState } from 'react';

export function Registro() {
  const [nombre, setNombre] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function registrar() {
    console.log(nombre, username, password);
    // NO hay backend real
  }

  return (
    <div className="container-fluid py-3 px-4">
      <h5>Registro</h5>

      <div className="row">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            className="form-control"
            placeholder="Nombre"
          />
        </div>

        <div className="col-md-4 mb-2">
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="form-control"
            placeholder="Usuario"
          />
        </div>

        <div className="col-md-4 mb-2">
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="form-control"
            placeholder="Contraseña"
          />
        </div>

        <div className="col-12">
          <button
            type="button"
            className="btn btn-success"
            onClick={registrar}
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}
