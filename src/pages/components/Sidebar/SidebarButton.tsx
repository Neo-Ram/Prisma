import Styles from './SidebarButton.module.css';
import React from 'react';

type Props = {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
};

const SidebarButton = ({ children, active, onClick }: Props) => {
  return (
    <button
      className={active ? `${Styles.btn} ${Styles.active}` : Styles.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SidebarButton;