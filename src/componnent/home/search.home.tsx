import { StyleSheet, Text, View } from "react-native"
import Feather from '@expo/vector-icons/Feather';
import { APP_COLOR } from "@/utils/contain";

const styles = StyleSheet.create({
    container: {
        backgroundColor: APP_COLOR.GREY,
        gap: 5,
        flexDirection: "row",
        margin: 5,
        paddingHorizontal: 3,
        paddingVertical: 7,
        borderRadius: 3
    }
})
const SearchHome = () => {
    return (
        <View style={styles.container}>
            <Feather name="search" size={24} color="black" />
            <Text style={{ color: "#070707" }}>Hot deals from 0 dong</Text>
        </View>
    )
}

export default SearchHome