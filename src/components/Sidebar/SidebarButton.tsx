import Styles from './SidebarButton.module.css';
type Props = { children: React.ReactNode }

const SidebarButton = (props: Props) => {
  return (
    <button className={Styles.btn}>{props.children}</button>
  )
}

export default SidebarButton