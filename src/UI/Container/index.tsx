import React from "react";

import { ContainerWrapp } from "./styles";
import { ContainerProps } from "./interface";

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerWrapp>{children}</ContainerWrapp>;
};

export default Container;
