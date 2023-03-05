import { FlatList, Text, View } from "react-native";
import { EmptyTasks } from "../EmptyTasks";
import { FormInput } from "../FormInput";
import { Task } from "../Task";

import { styles } from "./styles";

const TASKS = [
  {
    id: '1',
    task: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
    isCompleted: true,
  },
  {
    id: '2',
    task: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
    isCompleted: false,
  },
  {
    id: '3',
    task: "Integer urna interdum massa libero auctor neque turpis turpis semper.",
    isCompleted: true,
  }
]

export function Content() {
  return (
    <>
      <FormInput />
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
        
        data={TASKS}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <Task id={item.id} isCompleted={item.isCompleted} task={item.task}/>
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