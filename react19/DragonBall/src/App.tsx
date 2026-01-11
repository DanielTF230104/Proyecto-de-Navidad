import './App.css'

import { Header } from './app/layout/Header';
import { Nav } from './app/layout/Nav';
import { Main } from './app/layout/Main';
import { Footer } from './app/layout/Footer';

const title = '010c-Plantilla+HTML5+Estilos+Routing';

function App() {
  return (
    <>
      {title}
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App
