import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header} >
            <Text style={styles.title}>Todo App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        height: 48,
        paddingTop: 8
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    }
})