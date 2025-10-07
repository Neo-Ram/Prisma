import { MantineProvider } from '@mantine/core';
import { useState } from 'react';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import PrincipalPage from "./pages/PrincipalPage";
import ComponentsPage from './pages/All_components/ComponentsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'components':
        return <ComponentsPage />;
      case 'color-blindness':
        return <div><h1>Color Blindness Simulator</h1><p>Página en construcción...</p></div>;
      // 🔥 AQUÍ AGREGAS NUEVAS PÁGINAS:
      // case 'nueva-pagina':
      //   return <NuevaPaginaComponent />;
      // case 'otra-pagina':
      //   return <OtraPaginaComponent />;
      default:
        return <PrincipalPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <MantineProvider>
      <HeaderMenu onNavigate={setCurrentPage} />
      {renderPage()}
    </MantineProvider>
  );
}

export default App;