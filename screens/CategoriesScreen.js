import React, { useState } from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  const [numColumns, setNumColumns] = useState(2);

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverView", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  const keyExtractor = (item) => item.id + numColumns;

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={keyExtractor}
      renderItem={renderCategoryItem}
      numColumns={numColumns}
      extraData={numColumns}
    />
  );
}
