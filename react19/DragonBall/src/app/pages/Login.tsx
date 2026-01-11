import { useState } from 'react';

export function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [loginIncorrecto, setLoginIncorrecto] = useState(false);

  function hacerLogin() {
    // NO implementamos auth real
    // Solo simulamos el flujo
    console.log(usuario, password);

    if (usuario && password) {
      setLoginIncorrecto(false);
    } else {
      setLoginIncorrecto(true);
    }
  }

  return (
    <div className="container-fluid py-3 px-4">
      <h5>Login</h5>

      <div className="row">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            value={usuario}
            onChange={e => setUsuario(e.target.value)}
            className="form-control"
            placeholder="Usuario"
          />
        </div>

        <div className="col-md-6 mb-2">
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
            className="btn btn-primary"
            onClick={hacerLogin}
          >
            Entrar
          </button>
        </div>

        {loginIncorrecto && (
          <div className="col-12 mt-2 text-danger">
            Login incorrecto
          </div>
        )}
      </div>
    </div>
  );
}
