import LoadingOverlay from "@/componnent/loading/overlay"
import { ResendApiCode, VerifyApiCode } from "@/utils/api"
import { APP_COLOR } from "@/utils/contain"
import { router, useLocalSearchParams } from "expo-router"
import { register } from "node:module"
import { useEffect, useRef, useState } from "react"
import { Keyboard, StyleSheet, Text, View } from "react-native"
import OTPTextView from "react-native-otp-textinput"
import Toast from "react-native-root-toast"


const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 20

    },
    heading: {
        fontSize: 25,
        fontWeight: "600",
        marginVertical: 20

    }

})
const VerifyPage = () => {
    const [isSummit, setIsSubmit] = useState<boolean>(false);
    const otpRef = useRef<OTPTextView>(null);
    const [code, setCode] = useState<string>("");
    const { email, isLogin } = useLocalSearchParams();

    const verifyCode = async () => {
        Keyboard.dismiss();
        setIsSubmit(true);
        const res = await VerifyApiCode(email as string, code);
        setIsSubmit(false);
        otpRef?.current?.clear();
        if (res.data) {
            Toast.show("Verify code successfully", {
                duration: Toast.durations.LONG,
                textColor: "white",
                backgroundColor: APP_COLOR.ORANGE,
                opacity: 1
            })
            if (isLogin) {
                router.replace("/(tabs)")
            }
            else {
                router.replace("/(auth)/login")
            }
        }
        else {
            Toast.show(res.message as string, {
                duration: Toast.durations.LONG,
                textColor: "white",
                backgroundColor: APP_COLOR.ORANGE,
                opacity: 1
            })
        }
    }
    const handleResendCode = async () => {
        otpRef?.current?.clear();
        const res = await ResendApiCode(email as string, code);
        const messageResend = res.data ? "Resend code successfully" : res.message;
        if (res.data) {
            Toast.show(messageResend as string, {
                duration: Toast.durations.LONG,
                textColor: "white",
                backgroundColor: APP_COLOR.ORANGE,
                opacity: 1
            })

        }
    }

    useEffect(() => {
        if (code && code.length === 6) {
            verifyCode();
        }
    }, [code])

    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.heading}>Verify Account</Text>
                    <Text style={{ marginVertical: 10 }}>Please enter the verification code that was sent to nguyendat@gmail.com</Text>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <OTPTextView
                        ref={otpRef}
                        handleTextChange={setCode}
                        autoFocus
                        inputCount={6}
                        inputCellLength={1}
                        tintColor={APP_COLOR.ORANGE}
                        textInputStyle={{
                            borderWidth: 1,
                            borderColor: APP_COLOR.GREY,
                            borderBottomWidth: 1,
                            borderRadius: 5,
                            // @ts-ignore:next-line
                            color: APP_COLOR.ORANGE
                        }
                        }
                    />
                </View>
                <View style={{ flexDirection: "row", marginVertical: 10 }}>
                    <Text>Did not receive the verification code </Text>
                    <Text
                        onPress={handleResendCode}
                        style={{ textDecorationLine: "underline" }}>Resend</Text>
                </View>
            </View>
            {isSummit && <LoadingOverlay />}
        </>
    )
}
export default VerifyPage