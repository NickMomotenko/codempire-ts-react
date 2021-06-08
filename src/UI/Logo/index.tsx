import React from "react";
import { useData } from "../../hooks/data";

import { LogoWrapp, LogoIcon, LogoText } from "./styles";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  const { data} = useData();

  return (
    <LogoWrapp href="#">
      <LogoIcon url={data?.icon_url} />
      <LogoText>Chuck Norris</LogoText>
    </LogoWrapp>
  );
};

export default Logo;
