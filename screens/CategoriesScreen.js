import React, { useState } from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

export default function CategoriesScreen() {
  const [numColumns, setNumColumns] = useState(2);

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
