import React, { useState } from 'react';
import Item from './Item';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredItems = items.filter(item =>
    selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div>
      <select onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <ul className="Items">  {/* Ensure the ul has a className of "Items" */}
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
