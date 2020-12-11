import React, { useState } from "react";
import { useSelector } from "react-redux";
import SingleProduct from "../components/SingleProduct";

const SingleProductScreen = ({ route }) => {
  const { productId } = route.params;
  const { products } = useSelector((state) => state.productsReducer);
  const [product] = products.filter((p) => p._id == productId);
  const [cantidad, setCantidad] = useState(0);

  return (
    <SingleProduct
      product={product}
      cantidad={cantidad}
      handleAdd={() =>
        cantidad < product.stock ? setCantidad(cantidad + 1) : null
      }
      handleLess={() => (cantidad > 0 ? setCantidad(cantidad - 1) : null)}
    />
  );
};

export default SingleProductScreen;
