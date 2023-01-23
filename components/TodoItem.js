import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function TodoItem (props) {
    return (
        <TouchableOpacity onPress={() => {props.deleteHandler(props.item.key)}}>
            <View style={styles.item} >
                <AntDesign name="delete" size={18} color="black" />
                <Text style={styles.itemText}>{props.item.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#777',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18,
    },
    itemText: {
        marginLeft: 4
    }
})