import { View, Image, Text } from "react-native";

import { styles } from "./styles";

import clipboardImg from "../../assets/clipboard.png"

export function EmptyTasks() {
  return (
    <View style={styles.container}>
      <Image source={clipboardImg}/>
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}