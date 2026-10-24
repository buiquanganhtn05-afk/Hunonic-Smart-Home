import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { APP_COLOR } from "utils/contain";
import ShareButton from "@/componnent/button/share.button";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import BGSignIn from '@/assets/auth/welcome-background.png';
import fbLogo from '@/assets/auth/facebook.png';
import googleLogo from '@/assets/auth/google.png';
import { LinearGradient } from "expo-linear-gradient";
import TextBetweenLine from "@/componnent/button/text.between.line";
import { Link, Redirect, router } from "expo-router";
import { useEffect } from "react";
import { getAccountAPI, printAsyncStorage } from "@/utils/api";
import { useCurrentApp } from "@/context/app.context";
// import User from "./(user)/user";
import { access } from "fs";
import AsyncStorage from "@react-native-async-storage/async-storage";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    welcomeText: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20
    },
    welcomeBtn: {
        flex: 0.4,
        gap: 20
    },
    heading: {
        fontSize: 40,
        fontWeight: "600",
        color: "#505050"
    },

    body: {
        fontSize: 30,
        color: APP_COLOR.ORANGE,
        marginVertical: 10
    },
    footer: {
        color: "#505050"

    },
})

const WelcomePage = () => {
    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={BGSignIn}
        >
            <LinearGradient
                style={{ flex: 1 }}
                colors={['transparent', '#191B2F']}
                locations={[0.2, 0.8]}


            >
                <View style={styles.container}>
                    <View style={styles.welcomeText}>
                        <Text style={styles.heading}>
                            Welcome to
                        </Text>
                        <Text style={styles.body}>
                            BumBumFood - Delicious
                        </Text>
                        <Text style={styles.footer}>
                            Your favourite foods delivered fast at your door.
                        </Text>
                    </View>

                    <View style={styles.welcomeBtn}>
                        <TextBetweenLine title="Sign in with" ></TextBetweenLine>
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
                        <View>
                            <ShareButton
                                title="Start with your email"
                                onPress={() => { router.navigate("/(auth)/login") }}
                                textStyle={{ textTransform: "none", color: "white" }}
                                buttonStyle={{
                                    backgroundColor: "#2c2c2c",
                                    justifyContent: "center",
                                    borderRadius: 30,
                                    marginHorizontal: 50,
                                    paddingVertical: 10,
                                    borderColor: '#505050',
                                    borderWidth: 1
                                }}
                                pressStyle={{ alignSelf: 'stretch' }}
                            />
                            <View style={{ flexDirection: "row", justifyContent: "center", gap: 10, marginVertical: 10 }}>
                                <Text style={{ textAlign: "center", color: 'white' }}>Already have an account?</Text>
                                <Link href={"/(auth)/signup"}>
                                    <Text style={{ textDecorationLine: 'underline', textDecorationColor: '#fff', color: '#fff' }}>Register</Text>
                                </Link>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    )
}

export default WelcomePage