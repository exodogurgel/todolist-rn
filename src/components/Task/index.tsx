import { TouchableHighlight, View, Text } from "react-native";
import {MaterialCommunityIcons, Feather} from "@expo/vector-icons";

import { styles } from "./styles";
import { useState } from "react";

type Task = {
  id: string
  task: string
  isCompleted: boolean
}

interface TaskProps {
  task: Task
  onToggleCheckedTask: (id: string) => void
}

export function Task({task, onToggleCheckedTask}: TaskProps) {
  const [inCheckHighlight, setInCheckHighlight] = useState(false);
  const [inDanger, setInDanger] = useState(false);
  
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.checkButton}
        underlayColor='transparent'
        onShowUnderlay={() => setInCheckHighlight(true)}
        onHideUnderlay={() => setInCheckHighlight(false)}
        onPress={() => onToggleCheckedTask(task.id)}
      >
        {task.isCompleted ? (
          <MaterialCommunityIcons 
            name='checkbox-marked-circle' 
            size={24} 
            color={inCheckHighlight ? '#8284FA' : '#5E60CE'}
          />
        ): (
          <MaterialCommunityIcons
            name='checkbox-blank-circle-outline' 
            size={24}
            color={inCheckHighlight ? '#1E6F9F' : '#4EA8DE'}
          />
        )}

      </TouchableHighlight>

      <Text style={[
        styles.text,
        task.isCompleted ? ({
          color: '#808080',
          textDecorationLine: 'line-through'
        }): ({
          color: '#f2f2f2',
        })
      ]}>
        {task.task}
      </Text>

      <TouchableHighlight
        style={styles.trashButton}
        onShowUnderlay={() => setInDanger(true)}
        onHideUnderlay={() => setInDanger(false)}
      >
      <Feather 
          name='trash-2' 
          size={20} 
          color={inDanger ? '#E25858' : '#808080'} 
        />
      </TouchableHighlight>
    </View>
  )
}