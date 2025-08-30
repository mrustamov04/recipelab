import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const recipes = [
    {
      name: 'Chicken Soup',
      time: '55–65 MIN',
      difficulty: 'Easy',
      color: '#0A6C59',
      image: require('../../assets/images/recipes/chickensoup.png'),
    },
    {
      name: 'Soup',
      time: '10–15 MIN',
      difficulty: 'Easy',
      color: '#FB5C07',
      image: require('../../assets/images/recipes/soup.png'),
    },
    {
      name: 'Pilaf',
      time: '35–45 MIN',
      difficulty: 'Hard',
      color: '#0A6C59',
      image: require('../../assets/images/recipes/plov.png'),
    },
    {
      name: 'Egg Salad',
      time: '5–10 MIN',
      difficulty: 'Easy',
      color: '#FB5C07',
      image: require('../../assets/images/recipes/soup.png'),
    },
    {
      name: 'Burger',
      time: '20–30 MIN',
      difficulty: 'Medium',
      color: '#0A6C59',
      image: require('../../assets/images/recipes/plov.png'),
    },
  ];

  const greetings = [
    "Hello, Ready for some Cooking?",
    "Let's find recipes with what you have!",
    "Hungry? We've got you covered.",
    "Scan your fridge. Get inspired!",
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const router = useRouter(); 

  useEffect(() => {
    const currentText = greetings[textIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 10);
      return () => clearTimeout(timeout);
    } else {
      const nextTimeout = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % greetings.length);
      }, 2000);
      return () => clearTimeout(nextTimeout);
    }
  }, [charIndex, textIndex]);

  return (
    <SafeAreaView style={styles.background}>
      {/* Logo Section */}
      <View style={styles.logobox}>
        <View style={styles.logoRow}>
          <Image
            source={require('../../assets/images/spoon.png')}
            style={styles.spoon}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>
            <Text style={styles.recipe}>Recipe</Text>
            <Text style={styles.lab}>Lab</Text>
          </Text>
        </View>
      </View>
      <View style={styles.container}>

        {/* Greeting with typing animation */}
        <Text style={styles.greeting}>{displayedText}</Text>

        {/* Upload Area */}
        <TouchableOpacity style={styles.uploadBox} onPress={() => router.push("/imagedet")}>
          <Ionicons name="cloud-upload-outline" size={50} color="#FB5C07" />
          <Text style={styles.uploadTitle}>Upload for magic!!</Text>
          <Text style={styles.uploadDesc}>Take a photo of your fridge or table!</Text>
        </TouchableOpacity>

        {/* OR */}
        <Text style={styles.orText}>OR</Text>

        {/* Manual Input Button */}
        <TouchableOpacity style={styles.manualButton} onPress={() => router.push("/manualinp")}>
          <Text style={styles.manualButtonText}>Input Ingredients Manually</Text>
        </TouchableOpacity>

        {/* Recent Recipes */}
        <Text style={styles.recent}>Recent Recipes:</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ ...styles.recipeScroll, flexGrow: 1 }}
        >
          {recipes.map((recipe, index) => (
            <TouchableOpacity key={index} style={[styles.recipeCard, { borderColor: recipe.color }]}>
              <Image source={recipe.image} style={styles.recipeImage} />
              <Text style={styles.recipeTitle}>{recipe.name}</Text>
              <Text style={styles.recipeSubtitle}>{recipe.difficulty} • {recipe.time}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  logobox: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    marginTop: -10,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 17,
    marginTop: 10,
    marginRight: 10,
  },
  spoon: {
    width: 60,
    height: 60,
    marginRight: 10,
    transform: [{ rotate: '-135deg' }],
  },
  logoText: {
    fontSize: 55,
    fontWeight: '700',
    marginLeft: -25,
    marginTop: 15,
  },
  recipe: {
    color: '#055A4B',
    fontFamily: 'Poppins-SemiBold',
  },
  lab: {
    color: '#FB5C07',
    fontFamily: 'Poppins-SemiBold',
  },
  greeting: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    fontFamily: 'Poppins',
  },
  uploadBox: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#FB5C07',
    borderStyle: 'dashed',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    width: '100%',
    height: 180,
  },
  uploadTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    color: '#333',
  },
  uploadDesc: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 4,
  },
  orText: {
    marginVertical: 10,
    alignSelf: 'center',
    fontSize: 16,
    color: '#000',
  },
  manualButton: {
    alignSelf: 'center',
    backgroundColor: '#055A4B',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    width: '100%',
  },
  manualButtonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
    alignSelf: 'center',
  },
  recent: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 18,
    marginBottom: 18,
    fontFamily: 'Poppins',
    marginLeft: 5,
  },
  recipeScroll: {},
  recipeCard: {
    width: 150,
    height: 180,
    marginRight: 15,
    borderWidth: 3,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 8,
  },
  recipeImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  recipeTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginTop: 17,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  recipeSubtitle: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 2,
    fontFamily: 'Poppins',
  },
});
