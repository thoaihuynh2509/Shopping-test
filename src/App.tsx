import React from "react";

import ProductCard from "./components/ProductCard";
import RelatedProductList from "./components/RelatedProductList";
import data from "./data.json";


function App() {
  return (
    <div className="App">
      <ProductCard
        id={data.id}
        name={data.name}
        image={data.image}
        discountPercent={data.discountPercent}
        price={data.price}
        seller={data.seller}
      />
      <RelatedProductList relatedProducts={data.relatedProducts} />
    </div>
  );
}

export default App;
