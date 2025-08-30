import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch } from "react-native";
import { Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Picker } from '@react-native-picker/picker';
export default function ProfileContent() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");
  const [feedback, setFeedback] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.background}>
        {/* Logo Section */}
        <View style={styles.logobox}>
          <View style={styles.logoRow}>
            <Text style={styles.logoText}>
              <Text style={styles.recipe}>Your </Text>
              <Text style={styles.lab}>Profile</Text>
            </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.sectionRow}>
            <Ionicons name="information-circle-outline" size={22} />
            <Text style={styles.sectionTitle}>User Info</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editText}>Edit</Text>
              <Ionicons name="create-outline" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>Name: Mirzo Rustamov</Text>
            <Text style={styles.infoText}>Age: 20</Text>
            <Text style={styles.infoText}>Email: mrustamov@usf.edu</Text>
          </View>

          {/* Settings */}
          <View style={styles.sectionRow}>
            <Ionicons name="settings-outline" size={22} />
            <Text style={styles.sectionTitle}>Settings</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.infoText}>Language: {language}</Text>

            <View style={styles.toggleRow}>
              <Text style={styles.infoText}>Dark Mode:</Text>
              <Switch value={darkMode} onValueChange={setDarkMode} />
            </View>

            <View style={styles.toggleRow}>
              <Text style={styles.infoText}>Notifications:</Text>
              <Switch value={notifications} onValueChange={setNotifications} />
            </View>
          </View>
          <View style={styles.sectionRow}>
            <MaterialCommunityIcons name="pot-steam" size={30} color="#000000" /> // Fork & knife
            <Text style={styles.sectionTitle}>Recipes Cooked: 14</Text>
          </View>
           {/* Feedback */}
          <View style={styles.sectionRow}>
            <Ionicons name="chatbox-outline" size={22} />
            <Text style={styles.sectionTitle}>Leave Feedback</Text>
          </View>

          <View style={styles.feedbackBox}>
            <TextInput
              placeholder="Type your feedback here"
              value={feedback}
              onChangeText={setFeedback}
              style={styles.input}
              multiline
            />
            <TouchableOpacity style={styles.sendButton}>
              <Ionicons name="send-outline" size={20} color="#555" />
            </TouchableOpacity>
          </View>

          {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
          <Ionicons name="log-out-outline" size={20} color="#fff" />
        </TouchableOpacity>
      
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:59,
  },
  container: {
    flex: 1,
    alignSelf:'center',
    width:'80%',
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
    fontSize: 55,
    fontWeight: '700',
    fontFamily: 'Poppins-SemiBold',
  },
  recipe: {
    color: '#055A4B',
  },
  lab: {
    color: '#FB5C07',
  },
  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 6,
  },

  editButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },

  editText: {
    fontSize: 16,
    marginRight: 4,
  },
  info:{
    marginLeft:20,
    marginTop:10,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 2,
  },

  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },

  feedbackBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: "#555",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 8,
  },

  input: { flex: 1, paddingVertical: 6, fontSize: 16 },

  sendButton: { marginLeft: 6 },

  logoutButton: {
    marginTop: 20,
    backgroundColor: "#055A4B",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 8,
  },

  logoutText: { color: "#fff", fontSize: 18, marginRight: 6, fontWeight: "bold" },
  picker: { height: 50, width: 200 },
});
