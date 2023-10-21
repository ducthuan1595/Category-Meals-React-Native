import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, View, ViewBase } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";

function Categories({ navigation }) {
  const renderCategoryItem = (item) => {
    const pressHandle = () => {
      navigation.navigate("MealOverview", {
        categoryId: item.id,
      });
    };

    return (
      <CategoryGridTitle
        title={item.title}
        color={item.color}
        onPress={pressHandle}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => renderCategoryItem(item)}
      keyExtractor={(item) => item.id}
      numColumns={2}
    ></FlatList>
  );
}

export default Categories;
