import React from "react";

import { ItemWrapp } from "./styles";
import { ItemProps } from "./interface";

const Item: React.FC<ItemProps> = ({ name, active, onClick, ...rest }) => {
  return (
    <ItemWrapp active={active} onClick={onClick} {...rest}>
      {name}
    </ItemWrapp>
  );
};

export default Item;
