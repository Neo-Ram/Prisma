
import Styles from './Sidebar.module.css';
import SidebarButton from './SidebarButton';

// Defino las secciones con títulos y botones
const sections = [
  {
    title: "IA Assistant",
    buttons: ["Custom Colors"]
  },
  {
    title: "Form controls",
    buttons: ["Input", "Button", "Textarea", "Checkbox", "Radiogroup", "Select", "Toggle", "Slider"] 
  },
  {
    title: "Navigation",
    buttons: ["Breadcrumb", "Pagination"]
  },
  {
    title: "Feedback",
    buttons: ["Alert", "Spinner", "Tooltip"]
  }
];

// Recibo onSelect y activePage como props para comunicar el botón seleccionado
const Sidebar = ({ onSelect, activePage }: { onSelect: (label: string) => void; activePage: string }) => {
  return (
    <aside className={Styles.sidebar}>
      {sections.map((section) => (
        <div key={section.title}>
          <div className={Styles.sectionTitle}>{section.title}</div>
          {[...section.buttons].sort((a, b) => a.localeCompare(b)).map((label) => (
            <SidebarButton
              key={label}
              active={activePage === label}
              onClick={() => onSelect(label)}
            >
              {label}
            </SidebarButton>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;