import { useState, useEffect } from "react";

const categoriesUrl = `https://api.chucknorris.io/jokes/categories`;
const randomDataUrl = `https://api.chucknorris.io/jokes/random`;

interface data {
  icon_url?: string;
}

export const useData = () => {
  const [data, setData] = useState<data>();
  const [categories, setCategories] = useState<string[]>();
  const [activeCategorie, setActiveCategorie] = useState<string>();
  const [joke, setJoke] = useState<{}>("");

  const fetchedData = (url: string, func: (data: any) => void) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        func(data);
      });
  };

  useEffect(() => {
    fetchedData(categoriesUrl, setCategories);
  }, []);

  useEffect(() => {
    if (!activeCategorie) {
      fetchedData(randomDataUrl, setData);
    } else {
      fetchedData(
        `https://api.chucknorris.io/jokes/random?category=${activeCategorie}`,
        setJoke
      );
    }
  }, [activeCategorie]);

  const changeActiveCategorie = (categorie: string) => {
    setActiveCategorie(categorie);
  };

  return { data, categories, activeCategorie, changeActiveCategorie, joke };
};
