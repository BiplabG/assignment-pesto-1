import { useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";

function App() {
  const [selectedItems, setSelectedItems] = useState({});
  const calculateTotalAmount = () => {
    let totalAmount = 0;
    Object.keys(selectedItems).forEach(
      (product_id) =>
        (totalAmount +=
          selectedItems[product_id].price * selectedItems[product_id].count)
    );
    console.log(totalAmount);
    return totalAmount;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header amount={calculateTotalAmount()} />
        <ProductList
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      </header>
    </div>
  );
}

export default App;
