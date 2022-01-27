import { useState } from "react";
import "./ProductCard.css";

function ProductCard({
  name,
  description,
  image_url,
  price,
  product_id,
  selectedItems,
  setSelectedItems,
}) {
  const [addToCartButton, setAddToCartButton] = useState(true);

  const addItemToCart = () => {
    let selectedItemsCopy = JSON.parse(JSON.stringify(selectedItems));
    if (!Object.keys(selectedItems).includes(product_id)) {
      selectedItemsCopy[product_id] = {
        name,
        price,
        count: 1,
      };
      setSelectedItems(selectedItemsCopy);
      setAddToCartButton(false);
    } else {
      selectedItemsCopy[product_id] = {
        name,
        price,
        count: selectedItems[product_id].count + 1,
      };
      setSelectedItems(selectedItemsCopy);
    }
  };

  const removeItemFromCart = () => {
    let selectedItemsCopy = JSON.parse(JSON.stringify(selectedItems));
    if (!Object.keys(selectedItems).includes(product_id)) {
      console.log("Product not in the cart.");
    } else {
      if (selectedItems[product_id].count === 1) {
        setAddToCartButton(true);
        delete selectedItemsCopy[product_id];
      } else {
        selectedItemsCopy[product_id] = {
          name,
          price,
          count: selectedItems[product_id].count - 1,
        };
      }
      setSelectedItems(selectedItemsCopy);
    }
  };

  return (
    <div className="product-card">
      <p className="product-price">Rs. {price}</p>
      <img src={image_url} alt={description} style={{ width: "100%" }} />
      <div className="product-details">
        <h3>{name}</h3>
        <em>{description}</em>
      </div>
      <div className="product-button">
        {addToCartButton ? (
          <button type="button" onClick={addItemToCart}>
            Add to cart
          </button>
        ) : (
          <div className="cart-actions">
            <button type="button" onClick={removeItemFromCart}>
              -
            </button>
            <p className="cart-item-count">{selectedItems[product_id].count}</p>
            <button type="button" onClick={addItemToCart}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
