
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/util/constant";

export default function ProfileInput({ value, onPress, iconName, disabled }: {
  value: string;
  onPress: () => void;
  iconName: keyof typeof Ionicons.glyphMap;
  disabled?: boolean;
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={disabled}>
      <Text style={[styles.text, disabled && { color: COLORS.DISABLED_TEXT }]}>{value}</Text>
      <Ionicons name={iconName} size={20} color={COLORS.ITEM_TEXT} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.ITEM_BACKGROUND,
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: COLORS.ITEM_TEXT,
    fontSize: 16,
  },
});
