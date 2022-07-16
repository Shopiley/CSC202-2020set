import React, {useState} from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
    //console.log(task);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]; //gets everything in task items and stores in itemsCopy
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  const writeTask = (blah) => {
    return setTask(blah)
  }

  return (
    <View style={styles.container}>
      {/*Today's task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go  */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => completeTask(index) }>
                  <Task key={index} text={item} />
                </TouchableOpacity>
              )             
            })
          }
          {/* <Task text={"Task 1"} />
          <Task text={"Task 2"} /> */}
        </View>
      </View>

      {/*Write a task section */}
      <KeyboardAvoidingView
        behaviour={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write a task"} value= {task} onChangeText= {writeTask} />
        <TouchableOpacity onPress = {() => handleAddTask()} >
          <View style= {styles.addWrapper}>
            <Text style = {styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: "#FFF",
  borderRadius: 60,
  borderColor: "#C0C0C0",
  borderWidth: 1,
  width: 250
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: "#FFF",
  borderRadius: 60,
  justifyContent:"center",
  alignItems: "center",
  borderColor: "#C0C0C0",
  borderWidth: 1,
},
addText: {
  color: "purple"
}
});