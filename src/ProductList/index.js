import productData from "../data/products.json";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList() {
  return (
    <div className="main">
      <h2>Products</h2>
      <div className="product-list">
        {productData.products.map((product) => (
          <ProductCard
            key={product.product_id}
            name={product.name}
            description={product.description}
            image_url={product.image_url}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
