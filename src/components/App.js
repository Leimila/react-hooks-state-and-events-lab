import React, { useState } from 'react';
import '../index.css';  // Use index.css for all styles
import ShoppingList from './ShoppingList';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeToggle() {
    setIsDarkMode(!isDarkMode);
  }

  const items = [
    { id: 1, name: 'Milk', category: 'Dairy' },
    { id: 2, name: 'Bananas', category: 'Produce' },
    { id: 3, name: 'Ice Cream', category: 'Dessert' },
  ];

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="main-container">
        <button onClick={handleDarkModeToggle}>
          Toggle Dark Mode
        </button>
        <ShoppingList items={items} />
      </div>
    </div>
  );
}

export default App;
