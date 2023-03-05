import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flexDirection: "row",
    gap: 4,
    marginTop: -27,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 6,
    padding: 16,
    fontSize: 16,
    color: '#F2F2F2',
  },
  button: {
    height: 52,
    width: 52,
    backgroundColor: '#1E6F9F',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  }
})