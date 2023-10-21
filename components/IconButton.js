import React from "react";
import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && { opacity: 0.7 }}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;
