import React from "react";
import styles from "../styles/Pagination.module.css";

interface PaginationItemProps {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode; // Adicionado o tipo para a propriedade children
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  disabled,
  onClick,
  children,
}) => {
  return (
    <button
      className={styles.fp_btn__arrow}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PaginationItem;
