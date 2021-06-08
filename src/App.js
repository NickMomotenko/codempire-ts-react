import React from "react";

import {AppWrapp } from './AppStyles'

import { useData } from "./hooks/data";

import Header from "./components/Header";
import Comment from "./components/Comment";

import Container from "./UI/Container";
import Item from "./UI/Item";
import List from "./UI/List";
import Main from "./UI/Main";
import Title from "./UI/Title";

const App = () => {
  const { data, categories, activeCategorie, changeActiveCategorie, joke } =
    useData();

  return (
    <AppWrapp>
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
    </AppWrapp>
  );
};

export default App;
