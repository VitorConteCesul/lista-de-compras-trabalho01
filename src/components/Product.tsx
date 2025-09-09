import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  name: string,
  onRemove: () => void;
}

export function Product({name, onRemove}: Props){
    return(
        <View style ={styles.container}>
            <Text style={styles.name}>{name} </Text>

            <TouchableOpacity
            style={styles.button} 
            onPress={onRemove}>

              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        marginBottom: 8
    },
    name:{
        flex: 1,
        fontSize: 16,
        lineHeight: 19.2,
        marginLeft: 16,
        marginRight: 16
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    }
})