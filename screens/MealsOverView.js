import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealList from "../components/mealList/MealList";

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

  return <MealList items={displayMeals} />;
}

export default MealsOverView;
