import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  header: {
    backgroundColor: '#7A4A9E',
    height: 173,
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: 'center',
    // borderColor: '#ca1a1a',
    // borderStyle: 'solid',
    // borderWidth: 1
  },
  title: {
    color: '#F2F2F2',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 25.2,
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#31C667",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    position: "relative",
    top: -25,
    width: '100%',
    flexDirection: "row",
    paddingRight: 24,
    paddingLeft: 24,
    gap: 4
  },
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: '#808080',
    borderWidth: 0.5
  },
  label: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 24,
    marginRight: 24,
    paddingBottom: 20,
    borderColor: '#D9D9D9',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    // borderColor: '#ca1a1a',
    // borderStyle: 'solid',
    // borderWidth: 1
  },
  textLabel: {
    flexDirection: 'row'
  },
  textProduct: {
    color: '#31C667',
    paddingRight: 8
  },
  textFinished: {
    color: '#7A4A9E',
    paddingRight: 8
  },
  sumTotal:{
    padding: 2,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 999,
    backgroundColor: '#D9D9D9'
  },

  list:{
    flexGrow: 1,
    justifyContent: 'center'

  },
  listEmpytText:{
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 19,
    textAlign: 'center'
  }


});