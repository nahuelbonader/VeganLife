import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Panel from "../components/CommercePanel";

const CommercePanel = ({ navigation, route }) => {
  const { products } = useSelector((state) => state.productsReducer);
  const { stores } = useSelector((state) => state.storesReducer);
  const [commerce] = stores.filter((s) => s._id == route.params.storeId);
  const myProducts = products.filter((el) => el.store._id == commerce._id);

  return <Panel commerce={commerce} products={myProducts} />;
};

export default CommercePanel;
