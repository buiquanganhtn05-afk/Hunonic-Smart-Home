
import { useNavigation } from "expo-router";
import { Button, Text, View } from "react-native"

const Like = () => {
    const navigation: any = useNavigation();
    return (
        <View>
            <Text>
                Like
            </Text>
            <Button
                onPress={() => navigation.navigate("LikeDetail")}
                title="like details" />
        </View>
    )
}

export default Like