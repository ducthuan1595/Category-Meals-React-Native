import React from "react";
import { Text, StyleSheet, View } from "react-native";
import MealList from "../components/mealList/MealList";
import { FavoriteState } from "../store/context/favorites";
import { MEALS } from "../data/dummy-data";

function Favorites() {
  const { ids } = FavoriteState();
  const favoriteMeals = MEALS.filter((m) => ids.includes(m.id));
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }
  return <MealList items={favoriteMeals} />;
}

export default Favorites;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
