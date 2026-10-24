import { currencyFormatter } from "@/utils/api"
import { APP_COLOR } from "@/utils/contain"
import { FontAwesome } from "@expo/vector-icons"
import { Color } from "expo-router"
import { Alert, Pressable, Text, View } from "react-native"

const StickyFooter = () => {
    return (
        <View style={{
            width: "100%",
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            zIndex: 11,
            flexDirection: "row",
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flex: 1,
                borderTopWidth: 1,
                borderTopColor: APP_COLOR.GREY,

            }}>
                <View style={{ padding: 10 }}>
                    <View style={{
                        position: "absolute",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 16,
                        height: 16,
                        top: 5,
                        right: 10,
                        borderRadius: 16 / 2,
                        backgroundColor: APP_COLOR.ORANGE,
                    }}>
                        <Text style={{ color: "white", fontSize: 9 }}>
                            10
                        </Text>
                    </View>
                    <Pressable onPress={() => alert("Da mua hang")}>
                        <FontAwesome name="shopping-basket" size={30} color={APP_COLOR.ORANGE} />
                    </Pressable>
                </View>
                <View style={{ paddingRight: 10 }}>
                    <Text style={{
                        color: APP_COLOR.ORANGE,
                        fontSize: 18
                    }}>
                        {currencyFormatter(140000)}
                    </Text>
                </View>
            </View>
            <View style={{
                width: 100,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: APP_COLOR.ORANGE
            }}>
                <Text
                    onPress={() => alert("Giao Hang")}
                    style={{ color: "white" }}>
                    Delivery
                </Text>
            </View>
        </View>
    )
}

export default StickyFooter