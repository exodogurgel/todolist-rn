import { Text, View } from 'react-native'
import { FormInput } from '../../components/FormInput'
import { Header } from '../../components/Header'

import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <FormInput />
      <Text>Home</Text>
    </View>
  )
}