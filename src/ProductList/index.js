import productData from "../data/products.json";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ selectedItems, setSelectedItems }) {
  return (
    <div className="main">
      <div className="product-list">
        {productData.products.map((product) => (
          <ProductCard
            key={product.product_id}
            name={product.name}
            description={product.description}
            image_url={product.image_url}
            price={product.price}
            product_id={product.product_id}
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
