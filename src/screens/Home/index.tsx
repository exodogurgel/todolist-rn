import { View } from 'react-native'
import { Content } from './components/Content'
import { Header } from './components/Header'

import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  )
}