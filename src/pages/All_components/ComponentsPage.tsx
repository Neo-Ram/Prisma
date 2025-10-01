
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Styles from "./ComponentsPage.module.css";
import ButtonPage from "./ButtonPage";
import InputPage from "./InputPage";
import SidebarPage from "./SidebarPage";
import HeaderPage from "./HeaderPage";

// Relaciono los nombres de los botones con los componentes de página
const pageMap: Record<string, React.ReactElement> = {
  Button: <ButtonPage />,
  Input: <InputPage />,
  Sidebar: <SidebarPage />,
  Header: <HeaderPage />,
};

const ComponentsPage = () => {
  // Estado para saber qué página mostrar
  const [activePage, setActivePage] = useState<string>("Button");

  // Paso la función para cambiar la página activa a la Sidebar
  return (
    <div className={Styles.container}>
      <Sidebar onSelect={setActivePage} activePage={activePage} />
      <main className={Styles.mainContent}>
        {pageMap[activePage]}
      </main>
    </div>
  );
};

export default ComponentsPage;