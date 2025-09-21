import Styles from './Sidebar.module.css';
import SidebarButton from './SidebarButton';
const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
        <SidebarButton>Home</SidebarButton>
        <SidebarButton>Components</SidebarButton>
        <SidebarButton>Documentation</SidebarButton>
        <SidebarButton>GitHub</SidebarButton>
    </div>
  )
}

export default Sidebar