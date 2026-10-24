import ShareButton from "@/componnent/button/share.button"
import SocialButton from "@/componnent/button/social.button"
import ShareInput from "@/componnent/input/share.input"
import { useCurrentApp } from "@/context/app.context"
import { loginAPI } from "@/utils/api"
import { APP_COLOR } from "@/utils/contain"
import { LoginSchema } from "@/utils/validate.schema"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Link, router } from "expo-router"
import { Formik } from "formik"
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Toast from "react-native-root-toast"
import { SafeAreaView } from "react-native-safe-area-context"

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        marginHorizontal: 20

    }
})

const LoginPage = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const { setAppState } = useCurrentApp();
    const handleLogin = async (email: string, password: string) => {
        try {
            setLoading(true)
            const res = await loginAPI(email, password)
            setLoading(false)
            if (res.data) {
                const accessToken = res.data.access_token;
                console.log("Access Token:", accessToken);

                if (!accessToken) {
                    throw new Error("Login thành công nhưng API không trả về accessToken");
                }

                await AsyncStorage.setItem("access_token", accessToken);

                setAppState(res.data);

                router.replace("/(tabs)");
            }
            else {
                const messageData = Array.isArray(res.message)
                    ? res.message[0]
                    : res.message;

                Toast.show(messageData, {
                    duration: Toast.durations.LONG,
                    textColor: "white",
                    backgroundColor: APP_COLOR.ORANGE,
                    opacity: 1

                });

                if (res.statusCode === 400) {
                    router.replace({
                        pathname: "/(auth)/verify",
                        params: {
                            email: email,
                            isLogin: 1
                        }
                    })
                }
            }
        } catch (error) {
            console.log("error:", error);
            Toast.show("Đăng nhập thất bại", {
                duration: Toast.durations.LONG,
                textColor: "white",
                backgroundColor: "red",
            });

        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <Formik
                validationSchema={LoginSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={values => handleLogin(values.email, values.password)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <View style={style.container}>
                        <View>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: "600",
                                marginVertical: 30
                            }}>Login
                            </Text>
                        </View>
                        <ShareInput
                            title="Email"
                            placeholder="Your email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            error={errors.email}
                        />

                        <ShareInput
                            title="Password"
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            error={errors.password}

                        />
                        <View style={{
                            alignItems: "center",
                            marginVertical: 20
                        }}>
                            <Text style={{
                                color: APP_COLOR.ORANGE,
                                fontWeight: 600
                            }}>Forgot Password?</Text>
                        </View>
                        <View style={{ marginVertical: 10 }}></View>
                        <ShareButton
                            onPress={handleSubmit as any}
                            loading={loading}
                            title="Login"
                            textStyle={{
                                textTransform: "uppercase",
                                color: "white",
                                paddingVertical: 5
                            }}
                            buttonStyle={{
                                backgroundColor: APP_COLOR.ORANGE,
                                justifyContent: "center",
                                borderRadius: 30,
                                marginHorizontal: 50,
                                marginVertical: 10,
                                paddingVertical: 15,
                            }}
                            pressStyle={{ alignSelf: "stretch" }}
                        />
                        <View style={{ flexDirection: "row", justifyContent: "center", gap: 5, marginBottom: 30 }}>
                            <Text>Don't have an account?</Text>
                            <Link href="/(auth)/signup">
                                <Text style={{ color: APP_COLOR.ORANGE }}>Sign Up</Text>
                            </Link>

                        </View>
                        <SocialButton titleSocial="Sign in with" />

                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}
export default LoginPage