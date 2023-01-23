import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem (props) {
    return (
        <TouchableOpacity onPress={() => {props.deleteHandler(props.item.key)}}>
            <Text style={styles.item} >{props.item.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#777',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18,
    }
})