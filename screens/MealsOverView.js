import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import MealItem from "../components/MealItem";

function MealsOverView({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displayMeals = MEALS.filter((m) => {
    return m.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((c) => c.id === categoryId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const renderMeal = ({ item }) => {
    return (
      <MealItem
        id={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
}

export default MealsOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
