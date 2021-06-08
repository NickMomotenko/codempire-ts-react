import React from "react";
import { useData } from "../../hooks/data";

import Container from "../../UI/Container";
import Logo from "../../UI/Logo";

import { HeaderWrapp } from "./styles";

const Header = () => {
  const { data } = useData();

  return (
    <HeaderWrapp>
      <Container>
        <Logo />
      </Container>
    </HeaderWrapp>
  );
};

export default Header;
