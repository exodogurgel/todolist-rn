import { Image, TextInput, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import plusImg from "../../assets/plus.png"
import { useState } from "react"

interface Task {
  id: string
  task: string
  isCompleted: boolean
}

interface FormInputProps {
  onAddNewTask: (task: Task) => void
}

export function FormInput({onAddNewTask}: FormInputProps) {
  const [newTask, setNewTask] = useState("")

  function handleNewTask() {
    const task: Task = {
      id: String(new Date().valueOf()),
      task: newTask,
      isCompleted: false,
    }
    
    onAddNewTask(task)
    setNewTask('')
  }
  
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Adicione uma nova tarefa"
        style={styles.input}
        placeholderTextColor="#808080"
        onChangeText={setNewTask}
        value={newTask}
      />
      <TouchableOpacity 
        onPress={handleNewTask}
        style={styles.button}
      >
        <Image source={plusImg}/>
      </TouchableOpacity>
    </View>
  )
}