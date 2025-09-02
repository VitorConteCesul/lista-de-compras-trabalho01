import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";

export function Home() {

  function handleAddProduct(){

  }
  
  return (
    <View style={style.container}>
      <Text style={style.title}>Lista de Compras</Text>
{/* 
      <View style={style.form}>
        <TextInput style={style.input}>
          placeholder="Adicione um novo produto"
        </TextInput>
      </View> */}


    <TouchableOpacity style={style.button} onPress={handleAddProduct}>
      <image style={style.imgButton}
    </TouchableOpacity>

    </View>
  )
}