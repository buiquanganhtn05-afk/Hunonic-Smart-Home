import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native"

interface ITodo {
    id: number;
    title: string;
}

const styles = StyleSheet.create({
    todo: {
        fontSize: 30,
        backgroundColor: 'pink',
        padding: 15,
        marginBottom: 20,
        borderWidth: 1,
    }
})

interface IProps {
    todoList: ITodo[]
    removeToDo: (value: number) => void
}

const ListTodo = (props: IProps) => {
    const { todoList, removeToDo } = props
    return (
        <>
            <FlatList
                data={todoList}
                keyExtractor={item => item.id + ""}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => removeToDo(item.id)}
                        >
                            <Text style={styles.todo}
                            >{item.title}</Text>
                        </TouchableOpacity>

                    )
                }}
                style={{ borderWidth: 1 }}
            />
        </>
    )
}

export default ListTodo