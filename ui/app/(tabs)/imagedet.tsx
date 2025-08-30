import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetectedIngredientsScreen() {
  const [ingredients, setIngredients] = useState([
    { name: "Macaroni", selected: true },
    { name: "Tomato", selected: true },
    { name: "Potato", selected: true },
    { name: "Carrot", selected: true },
    { name: "Chicken", selected: true },
    { name: "Eggs", selected: true },
    { name: "Onion", selected: false },
  ]);

  const [newIngredient, setNewIngredient] = useState("");

  const toggleIngredient = (index:number) => {
    const updated = [...ingredients];
    updated[index].selected = !updated[index].selected;
    setIngredients(updated);
  };

  const addIngredient = () => {
    if (newIngredient.trim() !== "") {
      setIngredients([...ingredients, { name: newIngredient.trim(), selected: true }]);
      setNewIngredient("");
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      {/* Header */}
      {/* <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#055A4B" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity> */}
      
      <View style={styles.logobox}>
        <View style={styles.logoRow}>
          <Text style={styles.headerLineGreen}>Ingredients</Text>
          <Text style={styles.headerLineOrange}>Detected!</Text>
        </View>
      </View>



      {/* Ingredients List */}
      <View style={styles.container}>
        <Text style={styles.helperText}>
          Select the ingredients you want to include or add new ones below:
        </Text>

        {/* Scrollable Ingredient List */}
        <ScrollView style={styles.ingredientsScroll}>
        <View style={styles.optionRow}>
          {ingredients.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                item.selected && styles.optionButtonSelected,
                { flexDirection: "row", alignItems: "center" }
              ]}
              onPress={() => toggleIngredient(index)}>
              {item.selected && (
              <Ionicons
                name="checkmark"
                size={16}
                color="black"
                style={{ marginRight: 4 }}/>
              )}
              <Text style={[styles.optionText,item.selected && styles.optionTextSelected]}numberOfLines={1}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        </ScrollView>

        {/* Fixed Add Ingredient */}
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

  {/* Generate Button */}
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
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: { 
    flex: 1, 
    backgroundColor: "#fff", 
    padding: 20 
  },
  backButton: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 10 
  },
  backText: { 
    marginLeft: 5, 
    color: "#055A4B", 
    fontSize: 18, 
    fontWeight: "500" },
  logobox: {
    width: '100%',
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  logoRow: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  headerLineGreen: {
    fontSize: 55, // smaller to fit inside
    fontWeight: "700",
    color: "#055A4B",
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
  headerLineOrange: {
    fontSize: 55,
    fontWeight: "700",
    color: "#FB5C07",
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
  helperText: {
    fontSize: 14,
    color: "#555",
    marginTop:10,
    marginBottom: 30,
    textAlign: "center", // or "left" if you prefer
    fontStyle: "italic",
  },
  
  optionRow: {
    flexDirection: "row",
    flexWrap: "wrap", // allows multiple rows
    gap: 10,
  },
  
  optionButton: {
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "dotted",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    maxWidth: "100%", // prevent overflow
  },
  
  optionButtonSelected: {
    backgroundColor: "#eee",
    paddingRight: 14, // extra space when selected
  },
  
  optionText: {
    fontSize: 16,
    color: "#000",
  },
  
  optionTextSelected: {
    fontWeight: "bold",
  },
  addContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop:40,
    marginBottom:60,
    justifyContent: "space-between",
  },
  input: { 
    flex: 1, 
    paddingVertical: 8, 
    fontSize: 16 
  },
  generateText: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "700", 
    marginTop: 5 
  },
  ingredientsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  ingredientsScroll: {
    flex: 1, // take up remaining space
    paddingBottom:100,
  },
  
  ingredientButton: {
    
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: "#000",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
    alignItems: "center", // Center text horizontally
  },
  
  ingredientButtonSelected: {
    backgroundColor: "#f0f0f0",
  },
  
  ingredientText: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
  
  ingredientTextSelected: {
    fontWeight: "bold",
  },
  generateWrapper: {
    alignItems: "center",
    marginTop: 15,
  },
  
  generateButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#f56113",
    justifyContent: "center",
    alignItems: "center",
  },
  
  generateLabel: {
    marginTop: 6,
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    fontFamily: "Poppins",
  },
  
  
  
  
});
