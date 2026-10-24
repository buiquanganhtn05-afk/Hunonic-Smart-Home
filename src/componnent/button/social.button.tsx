import { Image, StyleSheet, View } from "react-native"
import TextBetweenLine from "./text.between.line"
import ShareButton from "./share.button"
import fbLogo from '@/assets/auth/facebook.png';
import googleLogo from '@/assets/auth/google.png';
import { title } from "node:process";

const styles = StyleSheet.create({
    welcomeBtn: {
        gap: 30
    }
})
interface IProp {
    titleSocial: string
}
const SocialButton = (props: IProp) => {
    const { titleSocial } = props
    return (
        <View style={styles.welcomeBtn}>
            <TextBetweenLine title={titleSocial} textColor="black" ></TextBetweenLine>
            <View style={{
                justifyContent: "center",
                flexDirection: "row",
                gap: 30
            }}>

                <ShareButton
                    title="FaceBook"
                    onPress={() => { alert("me") }}
                    textStyle={{ textTransform: "uppercase" }}
                    buttonStyle={{ backgroundColor: "#fff", justifyContent: "center", borderRadius: 30 }}
                    icon={<Image source={fbLogo} />}
                />

                <ShareButton
                    title="Google"
                    onPress={() => { alert("me") }}
                    textStyle={{ textTransform: "uppercase" }}
                    buttonStyle={{ backgroundColor: "#fff", justifyContent: "center", borderRadius: 30 }}
                    icon={<Image source={googleLogo} />}
                />


            </View>
        </View>
    )
}

export default SocialButton