import { Link } from "expo-router"
import { Text, View } from "react-native"

const User = () => {
    return (
        <View>
            <Text>
                User
                Dat luong 200 do la Dep trai co bap
            </Text>
            <Link href={"/"}>Home</Link>
        </View>
    )
}
export default User