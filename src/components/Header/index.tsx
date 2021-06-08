import React from "react";

import Container from "../../UI/Container";
import Logo from "../../UI/Logo";

import { HeaderWrapp } from "./styles";

const Header = () => {
  return (
    <HeaderWrapp>
      <Container>
        <Logo />
      </Container>
    </HeaderWrapp>
  );
};

export default Header;
