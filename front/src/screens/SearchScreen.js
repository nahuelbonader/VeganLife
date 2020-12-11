import React, { useState } from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import User from "../components/UserCardSearcher";
import Recipe from "../components/RecipeCardSearcher";
import Store from "../components/StoreCardSearcher";
import Tabs from "../components/Tabs";
import styles from "../styles/searchScreen";

const Search = () => {
  const tabs = {
    recipes: "Recetas",
    users: "Usuarios",
    products: "Productos",
    stores: "Comercios",
  };

  const { search } = useSelector((state) => state.searchReducer);
  const { recipes } = useSelector((state) => state.recipesReducer);
  const { users } = useSelector((state) => state.usersReducer);
  const { stores } = useSelector((state) => state.storesReducer);

  const [tabSelected, setTabSelected] = useState(tabs.recipes);

  const filteredRecipes = recipes.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );
  const filteredStores = stores.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const data = {
    [tabs.recipes]: filteredRecipes,
    [tabs.users]: filteredUsers,
    // [tabs["p"]]: filteredProducts,
    [tabs.stores]: filteredStores,
  };

  const renderItem = (item) => {
    switch (tabSelected) {
      case tabs.recipes:
        return <Recipe recipe={item} />;
      case tabs.users:
        return <User user={item} />;
      case tabs.stores:
        return <Store item={item} />;
      // case tabs["p"]:
      // return <Product item={item} />;
    }
  };

  return (
    <View style={styles.view}>
      <Tabs
        tabs={Object.values(tabs)}
        tabSelected={tabSelected}
        setTabSelected={setTabSelected}
      />
      <SafeAreaView style={styles.results}>
        <FlatList
          style={styles.list}
          keyExtractor={(content) => content._id}
          data={data[tabSelected]}
          renderItem={({ item }) => renderItem(item)}
        />
      </SafeAreaView>
    </View>
  );
};

export default Search;
