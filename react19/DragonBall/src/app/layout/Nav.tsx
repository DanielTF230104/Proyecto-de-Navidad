import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav>
      <ul className="navbar d-flex align-items-center">
        <li>
          <a href="https://www.w3schools.com/js/default.asp">w3schools</a>
        </li>
        <li>
          <a href="https://es.javascript.info/js">javascript.info</a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">MDN</a>
        </li>

        <li className="ms-auto"></li>

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/registro">Registro</Link>
        </li>
      </ul>
    </nav>
  );
}
