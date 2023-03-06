import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { EmptyTasks } from "../../../../components/EmptyTasks";
import { FormInput } from "../../../../components/FormInput";
import { Task } from "../../../../components/Task";

import { styles } from "./styles";

interface Task {
  id: string
  task: string
  isCompleted: boolean
}

export function Content() {
  const [tasks, setTasks] = useState<Task[]>([])

  function addNewTask(task: Task) {
    setTasks(state => [...state, task])
  }

  function toggleCheckedTask(id: string) {
    const checkedTask = tasks.map(task => task.id === id ? {
      ...task,
      isCompleted: !task.isCompleted
    }: task)

    setTasks(checkedTask)
  }

  return (
    <>
      <FormInput onAddNewTask={addNewTask}/>
      <View style={styles.container}>
        <View style={styles.tasksInfo}>
          <Text style={[styles.textInfo, {color: '#4EA8DE'}]}>
            Criadas
          </Text>
          <Text style={styles.counterInfo}>0</Text>
        </View>

        <View style={styles.tasksInfo}>
          <Text style={[styles.textInfo, {color: '#8284FA'}]}>
            Concluídas
          </Text>
          <Text style={styles.counterInfo}>0</Text>
        </View>
      </View>

      <FlatList 
        style={styles.tasksList}
        
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Task 
              task={item}
              onToggleCheckedTask={toggleCheckedTask}
            />
          )
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <EmptyTasks />
          )
        }}
      />
    </>
  )
}