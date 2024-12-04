import React, { useState } from 'react';

function Item({ name }) {
  const [inCart, setInCart] = useState(false);

  function handleAddToCart() {
    setInCart(!inCart);
  }

  return (
    <li className={inCart ? 'in-cart' : ''}>
      {name}
      <button
        className={inCart ? 'remove' : 'add'}
        onClick={handleAddToCart}
      >
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
