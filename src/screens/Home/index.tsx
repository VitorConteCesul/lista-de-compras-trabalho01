import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { useState } from "react";
import { Product } from "../../components/product";

export function Home() {

  const [produts, setProducts] = useState<string[]>([]);
  const [productName, setProductName] = useState(" ");

  function handleAddProduct() {
    if (produts.includes(productName)) {
      return
      Alert.alert("Produto já cadastrado", "Já existe um produto na lista com esse nome.");
    }

    setProducts([...produts, productName])
    setProductName("")
  }

  function handleProductRemove(name: String) {
    Alert.alert("Remover", `Deseja remover o produto ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setProducts(produts.filter(product => product !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Lista de Compras</Text>
      </View>
      <View style={style.form}>
        <TextInput style={style.input}
          placeholder="Adicione um novo produto"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={style.button} onPress={handleAddProduct}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>

      <View style={style.label}>
        <View style={style.textLabel}>
          <Text style={style.textProduct}>Produtos</Text>
          <View style={style.sumTotal}>
            <Text>0</Text>
          </View>
        </View>

        <View style={style.textLabel}>
          <Text style={style.textFinished}>Finalizados</Text>
          <View style={style.sumTotal}>
            <Text>0</Text>
          </View>
        </View>
      </View>

      <View style={style.list}>
        <FlatList
          data={produts}
          keyExtractor={(item) => item}
          contentContainerStyle={style.list}
          renderItem={({ item }) => (
          <Product name={item} onRemove={() => handleProductRemove(item)}/>
          )}
          
          ListEmptyComponent={() => (
          <Text style={style.listEmpytText}>
            Você ainda não tem produtos na lista de compra
            Adicione produtos e organize sua lista de compras
          </Text>
        )}
        />
      </View>
    </View>


    
  )
}