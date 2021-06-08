import React from "react";

import { TitleWrapp } from "./styles";
import { TitleProps } from "./interface";

const Title: React.FC<TitleProps> = ({ title }) => {
  return <TitleWrapp>{title}</TitleWrapp>;
};

export default Title;
