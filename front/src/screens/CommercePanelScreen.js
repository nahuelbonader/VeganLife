import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Panel from "../components/CommercePanel";

const CommercePanel = ({ navigation, route }) => {
  const { products } = useSelector((state) => state.productsReducer);
  const info = route.params.CommerceInfo;
  const myProducts = products.filter((el) => el.store._id == info._id);
  /*const myProducts = [
  {
        "available": true,
        "active": true,
        "_id": "1",
        "title": "mozzarella vegana",
        "price": 500,
        "image": "https://d26lpennugtm8s.cloudfront.net/stores/055/428/products/mozzza1-583aed6be8492622ef15121925425577-1024-1024.jpg",
        "categoryStore": "quesos",
        "description": "queso vegano",
        "stock": 10,
        "store": "5fd0ed141bc2e41e781be3f7",
        "__v": 0
    },
    {
        "available": true,
        "active": true,
        "_id": "2",
        "title": "Not mayo",
        "price": 300,
        "image": "https://http2.mlstatic.com/D_NQ_NP_927137-MLA43673956614_102020-O.webp",
        "categoryStore": "aderezos",
        "description": "mayonesa vegana",
        "stock": 10,
        "store": "5fd0ed141bc2e41e781be3f7",
        "__v": 0
    },
    {
        "available": true,
        "active": true,
        "_id": "3",
        "title": "Yogurt Vegano",
        "price": 300,
        "image": "https://www.vegamomx.com/uploads/6/5/0/6/65061549/p1070148_2_orig.jpg",
        "categoryStore": "yogurt",
        "description": "Yogurt vegano",
        "stock": 10,
        "store": "5fd0ee691bc2e41e781be417",
        "__v": 0
    },
    {
        "available": true,
        "active": true,
        "_id": "4",
        "title": "mozzarella vegana",
        "price": 500,
        "image": "https://d26lpennugtm8s.cloudfront.net/stores/055/428/products/mozzza1-583aed6be8492622ef15121925425577-1024-1024.jpg",
        "categoryStore": "quesos",
        "description": "queso vegano",
        "stock": 10,
        "store": "5fd0ed141bc2e41e781be3f7",
        "__v": 0
    },
    {
        "available": true,
        "active": true,
        "_id": "5",
        "title": "Not mayo",
        "price": 300,
        "image": "https://http2.mlstatic.com/D_NQ_NP_927137-MLA43673956614_102020-O.webp",
        "categoryStore": "aderezos",
        "description": "mayonesa vegana",
        "stock": 10,
        "store": "5fd0ed141bc2e41e781be3f7",
        "__v": 0
    },
    {
        "available": true,
        "active": true,
        "_id": "6",
        "title": "Yogurt Vegano",
        "price": 300,
        "image": "https://www.vegamomx.com/uploads/6/5/0/6/65061549/p1070148_2_orig.jpg",
        "categoryStore": "yogurt",
        "description": "Yogurt vegano",
        "stock": 10,
        "store": "5fd0ee691bc2e41e781be417",
        "__v": 0
    },
    {
        "available": true,
        "active": true,
        "_id": "7",
        "title": "mozzarella vegana",
        "price": 500,
        "image": "https://d26lpennugtm8s.cloudfront.net/stores/055/428/products/mozzza1-583aed6be8492622ef15121925425577-1024-1024.jpg",
        "categoryStore": "quesos",
        "description": "queso vegano",
        "stock": 10,
        "store": "5fd0ed141bc2e41e781be3f7",
        "__v": 0
    },{
        "available": true,
        "active": true,
        "_id": "8",
        "title": "Yogurt Vegano",
        "price": 300,
        "image": "https://www.vegamomx.com/uploads/6/5/0/6/65061549/p1070148_2_orig.jpg",
        "categoryStore": "yogurt",
        "description": "Yogurt vegano",
        "stock": 10,
        "store": "5fd0ee691bc2e41e781be417",
        "__v": 0
    },
    {
        "available": true,
        "active": true,
        "_id": "9",
        "title": "mozzarella vegana",
        "price": 500,
        "image": "https://d26lpennugtm8s.cloudfront.net/stores/055/428/products/mozzza1-583aed6be8492622ef15121925425577-1024-1024.jpg",
        "categoryStore": "quesos",
        "description": "queso vegano",
        "stock": 10,
        "store": "5fd0ed141bc2e41e781be3f7",
        "__v": 0
    },

]*/
  return <Panel info={info} products={myProducts} />;
};

export default CommercePanel;
