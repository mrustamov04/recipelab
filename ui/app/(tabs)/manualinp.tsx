import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ManualInputScreen() {
  const [ingredients, setIngredients] = useState<string[]>([
    "Macaroni",
    "Beef",
    "Cheese",
    "Eggs",
    "Potato",
    "Garlic",
  ]);
  const [newIngredient, setNewIngredient] = useState("");

  const addIngredient = () => {
    if (newIngredient.trim() !== "") {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient("");
    }
  };

  const deleteIngredient = (index: number) => {
    const updated = [...ingredients];
    updated.splice(index, 1);
    setIngredients(updated);
  };

  return (
    <SafeAreaView style={styles.background}>
      {/* Header */}
      <View style={styles.logobox}>
        <View style={styles.logoRow}>
          <Text style={styles.headerLineGreen}>Input</Text>
          <Text style={styles.headerLineOrange}>Manually!</Text>
        </View>
      </View>

      <View style={styles.container}>
        {/* Add Ingredient Input */}
        <View style={styles.addContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add ingredients"
            value={newIngredient}
            onChangeText={setNewIngredient}
          />
          <TouchableOpacity onPress={addIngredient}>
            <Ionicons name="add-circle" size={30} color="#FB5C07" />
          </TouchableOpacity>
        </View>

        {/* Ingredient List */}
        <ScrollView style={styles.ingredientsScroll}>
          <View style={styles.optionRow}>
            {ingredients.map((item, index) => (
              <View key={index} style={styles.optionButton}>
                <Text style={styles.optionText}>{item}</Text>
                <TouchableOpacity onPress={() => deleteIngredient(index)}>
                  <Ionicons name="trash-outline" size={18} color="black" style={{ marginLeft: 6 }} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Generate Recipes Button */}
        <View style={styles.generateWrapper}>
          <TouchableOpacity style={styles.generateButton}>
            <MaterialCommunityIcons name="chef-hat" size={50} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.generateLabel}>Generate Recipes</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: "#fff" },
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  logobox: {
    width: "100%",
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  logoRow: { flexDirection: "column", justifyContent: "center", alignItems: "center", flex: 1 },
  headerLineGreen: {
    fontSize: 50,
    fontWeight: "700",
    color: "#055A4B",
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
  headerLineOrange: {
    fontSize: 50,
    fontWeight: "700",
    color: "#FB5C07",
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
  addContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 20,
    justifyContent: "space-between",
  },
  input: { flex: 1, paddingVertical: 8, fontSize: 16 },
  optionRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "dotted",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  optionText: { fontSize: 16, color: "#000" },
  ingredientsScroll: { flex: 1, paddingBottom: 100 },
  generateWrapper: { alignItems: "center", marginTop: 15 },
  generateButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#f56113",
    justifyContent: "center",
    alignItems: "center",
  },
  generateLabel: { marginTop: 6, fontSize: 14, color: "#333", fontWeight: "500" },
});
