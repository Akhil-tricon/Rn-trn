import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import "../global.css";

export default function Index() {

 const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  function goalInputHandler(enteredText : string) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    // if (enteredGoalText.trim()) {
    //   setCourseGoals((currentCourseGoals) => [
    //     ...currentCourseGoals, enteredGoalText]);
    //   setEnteredGoalText('');
    // }
    console.log("pressed")
  }
  
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="Your course goal" 
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="click" onPress={addGoalHandler}/>
      </View>
      <View style={styles.textContainer}>
        <Text>Hi welcome to home page</Text>
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView style={styles.goalsContainer}>
          {courseGoals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
      <Button title="Todo page" onPress={() => router.push('/Feature')}/>
        <Button title="Movies" onPress={() => router.push('/movies')}/>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    alignContent: 'center',

  },
  textInput: {
    borderWidth: 5,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
    justifyContent: 'center',
    
  },
  goalsContainer: {
    flex: 5,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    gap: 80,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
});

