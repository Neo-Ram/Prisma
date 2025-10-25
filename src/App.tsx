import { MantineProvider } from '@mantine/core';
import { useState } from 'react';
import { HeaderMenu } from './components/HeaderMenu/HeaderMenu';
import PrincipalPage from "./pages/PrincipalPage";
import ComponentsPage from './pages/All_components/ComponentsPage';
import ColorBlindnessPage from './pages/ColorBlindlessPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'components':
        return <ComponentsPage />;
      case 'color-blindness':
        return <ColorBlindnessPage />;
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