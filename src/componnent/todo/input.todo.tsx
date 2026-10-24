import { useState } from "react"
import { Alert, Button, StyleSheet, TextInput, View } from "react-native"
import MineButton from "../button/mine.button";

const styles = StyleSheet.create({
    todoInput: {
        borderColor: 'violet',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    }
})

interface IProps {
    addToDo: (value: string) => void
}

const InputTodo = (props: IProps) => {
    const { addToDo } = props

    const [name, setName] = useState<string>("")

    const handleAddNewTodo = () => {
        if (!name) {
            Alert.alert("Empty input todo!", "Please empty title todo", [
                // {
                //     text: 'Cancel',
                //     onPress: () => console.log('Cancel pressed'),
                //     style: 'cancel',
                // },

                {
                    text: 'OK', onPress: () => console.log('OK Pressed')
                }

            ]);
            return;
        }
        addToDo(name);
        setName("");
    }


    return (
        <>
            <View style={{ marginBottom: 20 }}>
                <TextInput
                    onChangeText={value => setName(value)}
                    value={name}
                    autoCapitalize='none'
                    autoCorrect={false}
                    multiline={true}
                    style={styles.todoInput}
                />
            </View>
            <MineButton
                title="Add new"
                onPress={handleAddNewTodo}
            />
        </>
    )

}

export default InputTodo