import { Text, View } from "react-native";
import { FormInput } from "../FormInput";

import { styles } from "./styles";

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
    </>
  )
}