import { Link } from "expo-router"
import { Button, Text, View } from "react-native"

const LikeDetails = () => {
    return (
        <View>
            <Text>
                Like Details
            </Text>
            <Link href={"/"} asChild>
                <Button title="Home" />
            </Link>
        </View>
    )
}
export default LikeDetails