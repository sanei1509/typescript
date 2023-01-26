import React from "react";

interface Props {
  nombre: string;
  onClick: () => void;

  // que es el children?
  //
  // children es una propiedad especial que se puede usar para pasar elementos
  // hijos directamente a los componentes de React. Esto es útil para componentes
  // como los que representan "cajas" (boxes), como los cuadros de diálogo, los
  // paneles y los menús.
  //
  // https://es.reactjs.org/docs/jsx-in-depth.html#children-in-jsx
  children: string;
}

// FORMA UNO
export const Bienvenida = ({ nombre, onClick, children }: Props) => {
  return (
    <div>
      <h2>Bienvenido a mi camino por typescript {nombre}</h2>
      <button onClick={onClick}>Clickeame</button>
      {children}
    </div>
  );
};

// FORMA DOS
export const Bienvenida2: React.FC<Props> = ({ nombre }) => {
  return (
    <div>
      <h2>Bienvenido a mi camino por typescript {nombre}</h2>
    </div>
  );
};
