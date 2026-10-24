import { StyleSheet, Text, View } from "react-native"
import Entypo from '@expo/vector-icons/Entypo';
import { APP_COLOR } from "@/utils/contain";

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        gap: 3
    },
    location: {
        flexDirection: "row",
        alignItems: "flex-end"
    }

})
const HeaderHome = () => {
    return (
        <View style={styles.container}>
            <Text style={{ paddingLeft: 5 }}>Delivery to:</Text>
            <View style={styles.location}>
                <Entypo name="location-pin" size={24} color={APP_COLOR.ORANGE} />
                <Text>
                    1524 Dong Trieu, Quang Ninh
                </Text>
            </View>
        </View>
    )
}
export default HeaderHome