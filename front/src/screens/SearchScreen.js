import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useSelector } from "react-redux";
import User from "../components/UserCardSearcher";
import Recipe from "../components/RecipeCardSearcher";
import styles from "../styles/searchScreen";

const Search = () => {
  const tabs = {
    recipes: "Recetas",
    users: "Usuarios",
    stores: "Comercios",
    products: "Productos",
  };

  const { search } = useSelector((state) => state.searchReducer);
  const { recipes } = useSelector((state) => state.recipesReducer);
  const { users } = useSelector((state) => state.usersReducer);
  const [tabSelected, setTabSelected] = useState(tabs.recipes);

  const filteredRecipes = recipes.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const data = {
    [tabs.recipes]: filteredRecipes,
    [tabs.users]: filteredUsers,
    // [tabs["s"]]: filteredStores,
    // [tabs["p"]]: filteredProducts,
  };

  const Tab = ({ tab }) => (
    <TouchableOpacity onPress={() => setTabSelected(tab)}>
      <Text
        style={tabSelected == tab ? styles.touchActive : styles.touchInactive}
      >
        {tab}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = (item) => {
    switch (tabSelected) {
      case tabs.recipes:
        return <Recipe recipe={item} />;
      case tabs.users:
        return <User user={item} />;
      // case tabs["p"]:
      // return <Product item={item} />;
      // case tabs["s"]:
      // return <Store item={item} />;
    }
  };

  return (
    <View style={styles.view}>
      <View style={styles.tabsContainer}>
        <Tab tab={tabs.recipes} />
        <Tab tab={tabs.users} />
        <Tab tab={tabs.products} />
        <Tab tab={tabs.stores} />
      </View>
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
