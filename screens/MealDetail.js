import React, { useEffect, useLayoutEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealsDetail from "../components/MealsDetail";
import IconButton from "../components/IconButton";

function MealDetail({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((m) => m.id === mealId);

  const headerButton = () => {
    console.log("tap");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton onPress={headerButton} icon={"star"} color={"blue"} />
        );
      },
    });
  }, [navigation, headerButton]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
      </View>
      <MealsDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text style={styles.subtitle}>Ingredients</Text>
      {selectedMeal.ingredients.map((i) => {
        return (
          <View key={i} style={styles.listItem}>
            <Text style={{ textAlign: "center" }}>{i}</Text>
          </View>
        );
      })}
      <Text style={styles.subtitle}>Steps</Text>

      {selectedMeal.steps.map((i) => {
        return (
          <View key={i} style={styles.listItem}>
            <Text style={styles.itemText}>{i}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

export default MealDetail;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 22,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 4,
    padding: 6,
    textAlign: "center",
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    textAlign: "left",
  },
});
