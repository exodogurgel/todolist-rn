import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    padding: 12, 
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,

    elevation: 2,
    shadowColor: '#000',
    marginBottom: 8,
  },
  checkButton: {
    padding: 3,
  },
  text: {
    fontSize: 14,
    flex: 1,
    marginLeft: 8,
    lineHeight: 20
  },
  trashButton: {
    padding: 8,
    borderRadius: 8,
  }
})
