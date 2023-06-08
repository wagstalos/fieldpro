import React from "react";

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
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default PaginationItem;
