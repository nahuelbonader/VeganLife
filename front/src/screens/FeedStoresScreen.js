import React, {useEffect} from "react";
import { ScrollView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchStores } from "../store/actions/stores";
import StoreCard from "../components/StoreCard"


const StoreFeed = ({  }) => {
    const dispatch = useDispatch();
    const stores = useSelector((state) => state.storesReducer.stores);

useEffect(() => {
dispatch(fetchStores());
    
}, []);

return (
<ScrollView>
<StoreCard stores={stores} />
</ScrollView>
)}

export default StoreFeed;