import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "./screens/Categories";
import MealsOverView from "./screens/MealsOverView";
import MealDetail from "./screens/MealDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              title: "All Category",
              headerStyle: {
                backgroundColor: "green",
              },
              headerTintColor: "white", // text color
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          />
          <Stack.Screen
            name="MealOverview"
            component={MealsOverView}
            // options={({ route, navigation }) => {
            //   const categoryId = route.params.categoryId;
            //   return {
            //     title: categoryId,
            //   };
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
