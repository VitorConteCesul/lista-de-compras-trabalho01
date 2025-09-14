import { Alert, FlatList, Text, TextInput, TouchableOpacity, View, Image,} from "react-native";
import { style } from "./styles";
import { useState } from "react";
import { Product } from "../../components/Product";

type ProductType = {
  name: string;
  finalized: boolean;
};

export function Home() {
  const [produts, setProducts] = useState<ProductType[]>([]);
  const [productName, setProductName] = useState("");
  const productFinalizedCount = produts.reduce((counter, product) => {
    return counter + (product.finalized ? 1 : 0);
  }, 0);

  function handleAddProduct() {
    if (produts.some((p) => p.name === productName)) {
      return Alert.alert(
        "Produto já cadastrado",
        "Já existe um produto na lista com esse nome."
      );
    }

    setProducts([...produts, { name: productName, finalized: false }]);
    setProductName("");
  }
  function handleOnToggle(name: string) {
    setProducts((prev) => {
      const updated = prev.map((item) =>
        item.name === name ? { ...item, finalized: !item.finalized } : item
      );

      updated.sort((a, b) => {
        if (a.finalized === b.finalized) return 0;
        return a.finalized ? 1 : -1;
      });

      return updated;
    });
  }

  function handleProductRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o produto ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setProducts(produts.filter((product) => product.name !== name)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Lista de Compras</Text>
      </View>

      <View style={style.form}>
        <TextInput
          style={style.input}
          placeholder="Adicione um novo produto"
          placeholderTextColor="#808080"
          value={productName}
          onChangeText={setProductName}
        />
        <TouchableOpacity style={style.button} onPress={handleAddProduct}>
          <Image source={require("../../../assets/plus.png")} />
        </TouchableOpacity>
      </View>

      <View style={style.label}>
        <View style={style.textLabel}>
          <Text style={style.textProduct}>Produtos</Text>
          <View style={style.sumTotal}>
            <Text>{produts.length}</Text>
          </View>
        </View>

        <View style={style.textLabel}>
          <Text style={style.textFinished}>Finalizados</Text>
          <View style={style.sumTotal}>
            <Text>{productFinalizedCount}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={produts}
        keyExtractor={(item) => item.name}
        contentContainerStyle={style.list}
        renderItem={({ item }) => (
          <Product
            name={item.name}
            finalized={item.finalized}
            onRemove={() => handleProductRemove(item.name)}
            onToggle={() => handleOnToggle(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={style.listEmpyt}>
            <View style={style.listImg}>
              <Image source={require("../../../assets/shopping_list.png")} />
            </View>
            <Text style={style.textBold}> Você ainda não tem produtos na lista de compra </Text>
            <Text style={style.textGray}> Adicione produtos e organize sua lista de compras </Text>
          </View>
        )}
      />
    </View>
  );
}
