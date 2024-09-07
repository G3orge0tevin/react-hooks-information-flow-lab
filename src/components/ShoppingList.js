import React, { useState } from "react";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span className="category">{item.category}</span>
            <button className="add">Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
