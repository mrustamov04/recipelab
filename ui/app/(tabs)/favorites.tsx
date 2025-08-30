import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'; // if not already imported


export default function RecipesScreen() {
  const recipes = [
    {
      name: 'Omelet',
      time: '5–10 MIN',
      difficulty: 'Easy',
      color: '#0A6C59',
      image: require('../../assets/images/recipes/omelet.png'),
    },
    {
      name: 'Chicken Steak',
      time: '15–20 MIN',
      difficulty: 'Medium',
      color: '#FB5C07',
      image: require('../../assets/images/recipes/chickensteak.png'),
    },
    {
      name: 'Plov',
      time: '15–20 MIN',
      difficulty: 'Medium',
      color: '#FB5C07',
      image: require('../../assets/images/recipes/plov.png'),
    },
  ];
  const [showFilter, setShowFilter] = useState(false);
  const [basedOnIngredients, setBasedOnIngredients] = useState(false);
  
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const toggleDifficulty = (level:string) => {
    setSelectedDifficulties((prev) => (
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    ));
  };
  const [longerTimeEnabled, setLongerTimeEnabled] = useState(false);
  const [shorterTimeEnabled, setShorterTimeEnabled] = useState(false);
  const [longerThan, setLongerThan] = useState('');
  const [shorterThan, setShorterThan] = useState('');
  const [moreCalEnabled, setMoreCalEnabled] = useState(false);
  const [lessCalEnabled, setLessCalEnabled] = useState(false);
  const [moreThan, setMoreThan] = useState('');
  const [lessThan, setLessThan] = useState('');


  


  return (
    <SafeAreaView style={styles.background}>
      {/* Header */}
      <View style={styles.logobox}>
        <View style={styles.logoRow}>
          <Text style={styles.logoText}>
            <Text style={styles.all}>Your </Text>
            <Text style={styles.recipes}>Favorites!</Text>
          </Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput placeholder="Search for a Recipe" placeholderTextColor={'gray'} style={styles.input}  />
        </View>
        <TouchableOpacity onPress={() => setShowFilter(!showFilter)} style={styles.filterIconWrapper}>
          <Ionicons name="filter" size={24} color="#FB5C07" />
        </TouchableOpacity>



        {showFilter && (
          <View style={styles.filterBox}>
            <Text style={styles.filterSubtitle}>Filter by:</Text>

            {/* ✅ Based on Ingredients */}
            <TouchableOpacity
              style={[styles.optionButton, basedOnIngredients && styles.optionButtonSelected]}
              onPress={() => setBasedOnIngredients(prev => !prev)}
            >
              <Text style={[styles.optionText, basedOnIngredients && styles.optionTextSelected]}>
                {basedOnIngredients ? '✓ ' : ''}Based on your ingredients
              </Text>
            </TouchableOpacity>

            {/* ✅ Difficulty */}
            <Text style={styles.filterSubtitle}>Difficulty</Text>
            <View style={styles.optionRow}>
              {['Easy', 'Medium', 'Hard'].map(level => (
                <TouchableOpacity
                  key={level}
                  style={[
                    styles.optionButton,
                    selectedDifficulties.includes(level) && styles.optionButtonSelected
                  ]}
                  onPress={() => toggleDifficulty(level)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedDifficulties.includes(level) && styles.optionTextSelected
                    ]}
                  >
                    {selectedDifficulties.includes(level) ? '✓ ' : ''}{level}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* ✅ Time */}
            <Text style={styles.filterSubtitle}>Time</Text>

            <View style={styles.optionRow}>
              <TouchableOpacity
                style={[styles.optionButton, longerTimeEnabled && styles.optionButtonSelected]}
                onPress={() => setLongerTimeEnabled(!longerTimeEnabled)}
              >
                <Text style={[styles.optionText, longerTimeEnabled && styles.optionTextSelected]}>
                  {longerTimeEnabled ? '✓ ' : ''}Longer than
                </Text>
              </TouchableOpacity>
              {longerTimeEnabled && (
                <TextInput
                  style={styles.timeInput}
                  placeholder="in min"
                  keyboardType="numeric"
                  value={longerThan}
                  onChangeText={setLongerThan}
                />
              )}
            </View>

            <View style={styles.optionRow}>
              <TouchableOpacity
                style={[styles.optionButton, shorterTimeEnabled && styles.optionButtonSelected]}
                onPress={() => setShorterTimeEnabled(!shorterTimeEnabled)}
              >
                <Text style={[styles.optionText, shorterTimeEnabled && styles.optionTextSelected]}>
                  {shorterTimeEnabled ? '✓ ' : ''}Shorter than
                </Text>
              </TouchableOpacity>
              {shorterTimeEnabled && (
                <TextInput
                  style={styles.timeInput}
                  placeholder="in min"
                  keyboardType="numeric"
                  value={shorterThan}
                  onChangeText={setShorterThan}
                />
              )}
            </View>
            <Text style={styles.filterSubtitle}>Calories</Text>

            <View style={styles.optionRow}>
              <TouchableOpacity
                style={[styles.optionButton, moreCalEnabled && styles.optionButtonSelected]}
                onPress={() => setMoreCalEnabled(!moreCalEnabled)}
              >
                <Text style={[styles.optionText, moreCalEnabled && styles.optionTextSelected]}>
                  {moreCalEnabled ? '✓ ' : ''}More than
                </Text>
              </TouchableOpacity>
              {moreCalEnabled && (
                <TextInput
                  style={styles.timeInput}
                  placeholder="in min"
                  keyboardType="numeric"
                  value={moreThan}
                  onChangeText={setLongerThan}
                />
              )}
            </View>

            <View style={styles.optionRow}>
              <TouchableOpacity
                style={[styles.optionButton, lessCalEnabled && styles.optionButtonSelected]}
                onPress={() => setLessCalEnabled(!lessCalEnabled)}
              >
                <Text style={[styles.optionText, lessCalEnabled && styles.optionTextSelected]}>
                  {lessCalEnabled ? '✓ ' : ''}Shorter than
                </Text>
              </TouchableOpacity>
              {lessCalEnabled && (
                <TextInput
                  style={styles.timeInput}
                  placeholder="in min"
                  keyboardType="numeric"
                  value={lessThan}
                  onChangeText={setShorterThan}
                />
              )}
            </View>
              <View style={styles.filterButtons}>
              <TouchableOpacity style={[styles.actionButton, styles.clearButton]} onPress={() => {
                // Reset all filter states
                setBasedOnIngredients(false);
                setSelectedDifficulties([]);
                setLongerTimeEnabled(false);
                setShorterTimeEnabled(false);
                setLongerThan('');
                setShorterThan('');
                setMoreCalEnabled(false);
                setLessCalEnabled(false);
                setMoreThan('');
                setLessThan('');
              }}>
                <Text style={styles.actionButtonText}>Clear</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.actionButton, styles.applyButton]} onPress={() => setShowFilter(false)}>
                <Text style={styles.actionButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>

          </View>
        )}

        {/* Scrollable Recipe List */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.gridContainer}>
            {recipes.map((recipe, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.recipeCardGrid, { borderColor: recipe.color }]}
                onPress={() => console.log('Navigate to:', recipe.name)}
              >
                <Image source={recipe.image} style={styles.imageGrid} />
                <Text style={styles.title}>{recipe.name}</Text>
                <Text style={styles.sub}>{recipe.difficulty} • {recipe.time}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Load More Button */}
          <TouchableOpacity style={styles.loadMore}>
            <Text style={styles.loadText}>Load more recipes...</Text>
          </TouchableOpacity>
        </ScrollView>
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
    position:'relative',
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  logobox: {
    width: '100%',
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 15,
    marginLeft:8,
  },
  logoText: {
    fontSize: 50,
    fontWeight: '700',
    fontFamily: 'Poppins-SemiBold',
  },
  all: {
    color: '#055A4B',
  },
  recipes: {
    color: '#FB5C07',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins',
  },
  gridContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  
  recipeCardGrid: {
    width: '48%', // 2 cards per row
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
  },
  
  imageGrid: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  
  scrollContent: {
    paddingBottom: 10,
  },
  recipeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Poppins-SemiBold',
  },
  sub: {
    fontSize: 13,
    color: '#777',
    fontFamily: 'Poppins',
  },
  loadMore: {
    alignItems: 'center',
    marginTop: -50,
  },
  loadText: {
    color: '#FB5C07',
    fontSize: 16,
    fontWeight: '600',
  },

  filterArea:{
    marginTop:30,
    marginLeft:20,
  },
  filterSubTitle: {
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 10,
  },
  filterIconWrapper: {
    position: 'absolute',
    top: 33, // adjust this based on where your searchBar is located
    right: 30,
    zIndex: 20,
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 20,
  },
  
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  
  checkedBox: {
    backgroundColor: '#fff',
  },
  
  checkmark: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  
  difficultyRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 6,
    marginBottom: 12,
  },
  
  checkbox1: {
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#000',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  
  checkboxChecked: {
    backgroundColor: '#f0f0f0',
  },
  
  checkboxLabel: {
    color: '#000',
  },
  
  checkboxLabelChecked: {
    fontWeight: 'bold',
  },
  
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  
  checkbox2: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    marginRight: 10,
  },
  
  checkboxText: {
    color: '#999',
  },
  
  activeText: {
    color: '#000',
    fontWeight: 'bold',
  },
  
  
  filterButton: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 5,
  },
  filterButtonSelected: {
    backgroundColor: "#ddd",
  },
  filterButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  filterBox: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 340,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    elevation: 5,
    zIndex: 10, // Ensures it appears above other components
  },
  
  filterSubtitle: {
    fontWeight: '600',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 8,
  },
  
  optionRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
    flexWrap: 'wrap', // Allows wrapping if buttons exceed width
  },
  
  optionButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'dotted',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  
  optionButtonSelected: {
    backgroundColor: '#eee',
  },
  
  optionText: {
    color: '#000',
  },
  
  optionTextSelected: {
    fontWeight: 'bold',
  },
  
  timeInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    width: 80,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  
  actionButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 6,
    alignItems: 'center',
  },
  
  clearButton: {
    backgroundColor: '#055A4B', // Dark green
  },
  
  applyButton: {
    backgroundColor: '#FB5C07', // Orange
  },
  
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  
});
