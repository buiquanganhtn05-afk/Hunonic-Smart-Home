import ShareInput from "@/componnent/input/share.input";
import { useCurrentApp } from "@/context/app.context"
import { url } from "node:inspector";
import { BackHandler, Image, Platform, Text, View } from "react-native"


const AccountPage = () => {
    const { theme, appState } = useCurrentApp();

    const backend = Platform.OS === "android"
        ? process.env.EXPO_PUBLIC_ANDROID_API_URL
        : process.env.EXPO_PUBLIC_IOS_API_URL;

    const baseImage = `${backend}/images/avatar`;

    return (
        <View>
            <View style={{ alignItems: "center", gap: 5 }}>
                <Image
                    style={{ height: 150, width: 150 }}
                    source={{ uri: `${baseImage}/${appState?.user.avatar}` }}
                />
            </View>

            <View style={{ margin: 20, gap: 20 }}>
                <ShareInput
                    title="Name"
                    // placeholder="Your email"
                    // onChangeText={handleChange('email')}
                    // onBlur={handleBlur('email')}
                    value={appState?.user.name}
                // error={errors.email}
                />

            </View>
            <View style={{ margin: 20, gap: 20 }}>
                <ShareInput
                    title="Email"
                    // placeholder="Your email"
                    // onChangeText={handleChange('email')}
                    // onBlur={handleBlur('email')}
                    value={appState?.user.email}
                // error={errors.email}
                />

            </View>
            <View style={{ margin: 20, gap: 20 }}>
                <ShareInput
                    title="Email"
                    // placeholder="Your email"
                    // onChangeText={handleChange('email')}
                    // onBlur={handleBlur('email')}
                    value={appState?.user.phone}
                // error={errors.email}
                />

            </View>


        </View>
    )
}
export default AccountPage