import React from "react";

import { ListWrapp } from "./styles";
import { ListProps } from "./interface";

const List: React.FC<ListProps> = ({ children, ...rest }) => {
  return <ListWrapp {...rest}>{children}</ListWrapp>;
};

export default List;
