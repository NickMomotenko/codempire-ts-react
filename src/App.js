import React from "react";

import styled from "styled-components";

import { useData } from "./hooks/data";

import Header from "./components/Header";

import Comment from "./components/Comment";
import Container from "./UI/Container";
import Item from "./UI/Item";
import List from "./UI/List";
import Main from "./UI/Main";
import Title from "./UI/Title";

export const AppWrapp = styled.div``;

const App = () => {
  const { data, categories, activeCategorie, changeActiveCategorie, joke } =
    useData();

  return (
    <div>
      <Header />
      <Main>
        <Container>
          <Title title="Categories" />
          <List as="ul">
            {categories?.map((item, index) => (
              <Item
                key={index}
                name={item}
                as="li"
                active={activeCategorie === item ? true : false}
                onClick={() => changeActiveCategorie(item)}
              />
            ))}
          </List>
          <Comment text={activeCategorie ? joke?.value : data?.value} />
        </Container>
      </Main>
    </div>
  );
};

export default App;
