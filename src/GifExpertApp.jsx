import { useState } from "react";
import { AddCateogry, GifGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["dragonball"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat,'valorant'])
  };

  return (
    <>
      <h1>Buscador de GIF's</h1>
      <AddCateogry onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
