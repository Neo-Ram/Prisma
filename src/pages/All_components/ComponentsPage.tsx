import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Styles from "./ComponentsPage.module.css";
import ButtonPage from "./ButtonPage";
import InputPage from "./InputPage";
import CheckboxPage from "./CheckboxPage";
import RadiogroupPage from "./Radiogroup";
import SelectPage from "./SelectPage";
import SliderPage from "./SliderPage";
import TextareaPage from "./TextareaPage";
import TogglePage from "./TogglePage";
import BreadcrumPage from "./BreadcrumPage";
import PaginationPage from "./PaginationPage";
import AlertPage from "./AlertPage";
import SpinnerPage from "./SpinnerPage";
import TooltipPage from "./TooltipPage";
import CustomColors from "./CustomColors";
// Relaciono los nombres de los botones con los componentes de página
const pageMap: Record<string, React.ReactElement> = {
  "Custom Colors": <CustomColors />,
  Button: <ButtonPage />,
  Checkbox: <CheckboxPage />,
  Input: <InputPage />,
  Radiogroup: <RadiogroupPage />,
  Select: <SelectPage />,
  Slider: <SliderPage />,
  Textarea: <TextareaPage />,
  Toggle: <TogglePage />,
  Breadcrumb: <BreadcrumPage />,
  Pagination: <PaginationPage />,
  Alert: <AlertPage />,
  Spinner: <SpinnerPage />,
  Tooltip: <TooltipPage />,
};

const ComponentsPage = () => {
  // Estado para saber qué página mostrar
  const [activePage, setActivePage] = useState<string>("Button");

  // Paso la función para cambiar la página activa a la Sidebar
  return (
    <div className={Styles.container}>
      <Sidebar onSelect={setActivePage} activePage={activePage} />
      <main className={Styles.mainContent}>{pageMap[activePage]}</main>
    </div>
  );
};

export default ComponentsPage;
