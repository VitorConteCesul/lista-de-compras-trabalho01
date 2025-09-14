import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import * as React from "react";

interface Props {
  name: string;
  finalized: boolean;
  onRemove: () => void;
  onToggle: () => void;
}
export function Product({ name, finalized, onRemove, onToggle }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle} style={styles.checkButton}>
        {finalized ? (
          <Image source={require("../../assets/check.png")} style={styles.checkIcon} />
        ) : (
          <Image source={require("../../assets/circulo.png")} style={styles.checkIcon} />
        )}
      </TouchableOpacity>

      <Text style={[styles.name, finalized && styles.finishedText]} > {name} </Text>

      <TouchableOpacity style={styles.buttonLixeira} onPress={onRemove}>
        <Image
          source={require("../../assets/lixeira.png")}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    marginBottom: 8,
    marginLeft: 24,
    marginRight: 24,
    paddingBottom: 12,
    paddingTop: 12,
    paddingRight: 12,
    borderWidth: 1,
    gap: 8,
    borderColor: '#D9D9D9'
  },
  name: {
    flex: 1,
    fontSize: 14,
    lineHeight: 19.2,
  },
  imageStyle: {
    width: 12.478,
    height: 14
  },
  buttonLixeira: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center"
  },

  checkButton:{
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12
  },
  checkIcon:{
    width: 17.455,
    height: 17.455,

  },
  finishedText:{
    textDecorationLine: 'line-through',
    color: '#808080'
  }
});
