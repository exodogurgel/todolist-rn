import { Image, TextInput, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import plusImg from "../../assets/plus.png"

export function FormInput() {
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Adicione uma nova tarefa"
        style={styles.input}
        placeholderTextColor="#808080"
      />
      <TouchableOpacity style={styles.button}>
        <Image source={plusImg}/>
      </TouchableOpacity>
    </View>
  )
}