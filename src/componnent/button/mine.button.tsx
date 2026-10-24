import { Pressable, StyleSheet, Text, View } from "react-native"
import Foundation from '@expo/vector-icons/Foundation';


const styles = StyleSheet.create({
    btnContainer: {
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 20,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: 'lightgreen'


    },
    text: {
        fontSize: 20,
    }
})
interface IProps {
    title: string
    onPress: () => void
}
const MineButton = (props: IProps) => {
    const { title, onPress } = props
    return (
        <Pressable
            style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                alignSelf: 'flex-start',
            })}

            onPress={onPress}>
            <View style={styles.btnContainer}>
                <Foundation name="plus" size={35} color="blue" />
                <Text style={styles.text}>{title}</Text>
            </View>

        </Pressable>
    )
}

export default MineButton