import React from "react";

import { MainWrapp } from "./styles";
import { MainProps } from "./interface";

const Main: React.FC<MainProps> = ({ children }) => {
  return <MainWrapp>{children}</MainWrapp>;
};

export default Main;
