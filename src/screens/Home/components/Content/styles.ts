import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flexDirection: "row",
    justifyContent: "space-between",

    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    paddingBottom: 20,
    marginHorizontal: 24,
  },
  tasksInfo: {
    flexDirection: "row",
    gap: 8,
  },
  textInfo: {
    fontSize: 14,
    fontWeight: "bold",
  },
  counterInfo: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: '#333333',
    fontSize: 12,
    color: '#D9D9D9',
    fontWeight: "bold",
    borderRadius: 10,
    overflow: "hidden",
  },
  tasksList: {
    marginHorizontal: 24,
  }
})