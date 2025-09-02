import { Text, View } from "react-native";
import { style } from "./styles";

export function Home() {
  return(
    <View style={style.container}>
      <Text style={style.title}>Lista de Compras</Text>
    </View>
  )
}