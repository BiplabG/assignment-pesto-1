import "./ProductCard.css";

function ProductCard({ name, description, image_url, price }) {
  return (
    <div className="product-card">
      <img src={image_url} alt={description} style={{ width: "100%" }} />
      <div className="product-details">
        <h3>{name}</h3>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default ProductCard;
