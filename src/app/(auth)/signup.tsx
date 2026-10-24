import ShareButton from "@/componnent/button/share.button"
import SocialButton from "@/componnent/button/social.button"
import ShareInput from "@/componnent/input/share.input"
import { registerAPI } from "@/utils/api"
import { APP_COLOR } from "@/utils/contain"
import { SignUpSchema } from "@/utils/validate.schema"
import axios from "axios"
import { Link, router } from "expo-router"
import { Formik } from "formik"
import path from "node:path"
import { useEffect, useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import Toast from "react-native-root-toast"
import { SafeAreaView } from "react-native-safe-area-context"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        marginHorizontal: 20
    },

})
const SignUp = () => {
    useEffect(() => {
        const fetchAPI = async () => {

            const res = await axios.get(process.env.EXPO_PUBLIC_API_URL!);
        }
        fetchAPI()
    }, [])

    const handleSignUp = async (name: string, email: string, password: string) => {
        try {
            const res = await registerAPI(name, email, password)

            if (res.data) {
                router.replace({
                    pathname: "/(auth)/verify",
                    params: { email: email }
                })
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

                })
            }
        } catch (error) {
            console.log("Check error:", error)
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Formik
                validationSchema={SignUpSchema}
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => handleSignUp(values.name, values.email, values.password)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <View style={styles.container}>
                        <View>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: 600,
                                marginVertical: 30
                            }}>Register</Text>
                        </View>
                        <ShareInput title="Name"
                            placeholder="Your name"
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            error={errors.name}
                        />

                        <ShareInput title="Email"
                            keyboardType="email-address"
                            placeholder="Your email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            error={errors.email}
                        />


                        <ShareInput title="Password"
                            secureTextEntry={true}
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            error={errors.password}
                        />


                        <ShareButton
                            title="Register"
                            onPress={handleSubmit as any}
                            textStyle={{ textTransform: "uppercase", color: "white" }}
                            buttonStyle={{
                                backgroundColor: APP_COLOR.ORANGE,
                                justifyContent: "center",
                                borderRadius: 30,
                                marginHorizontal: 50,
                                paddingVertical: 10,
                            }}
                            pressStyle={{ alignSelf: 'stretch' }}
                        />
                        <SocialButton titleSocial="Sign in with" />
                        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 15, gap: 5 }}>
                            <Text style={{ textAlign: "center", color: 'black' }}>Already have an account?</Text>
                            <Link href={"/(auth)/login"}>
                                <Text style={{ textDecorationLine: 'underline', textDecorationColor: '#000000', color: "#000000" }}>Login</Text>
                            </Link>
                        </View>
                    </View>
                )}
            </Formik>
        </SafeAreaView >
    )
}

export default SignUp