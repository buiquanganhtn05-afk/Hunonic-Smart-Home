import { APP_COLOR } from "@/utils/contain"
import { useState } from "react"
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from "react-native"
import Entypo from '@expo/vector-icons/Entypo';


const styles = StyleSheet.create({
    inputGroup: {
        padding: 5,
        gap: 10

    },
    text: {
        fontSize: 18,

    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 7,
        paddingVertical: 10,
        borderRadius: 10,

    },
    eye: {
        position: "absolute",
        right: 15,
    }
})

interface IProps {
    title?: string,
    keyboardType?: KeyboardTypeOptions
    secureTextEntry?: boolean
    placeholder?: string
    value: any
    setValue?: (value: any) => void
    onChangeText?: any
    onBlur?: any
    error?: any

}
const ShareInput = (props: IProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
    const { title, placeholder, keyboardType, secureTextEntry = false, value, setValue, onChangeText, onBlur, error } = props;
    return (
        <View style={styles.inputGroup}>
            {title && <Text style={styles.text}>{title}</Text>}
            <View style={{ justifyContent: "center" }}>
                <TextInput
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    onFocus={() => setIsFocus(true)}
                    onBlur={(event) => { if (onBlur) onBlur(event), setIsFocus(false) }}
                    keyboardType={keyboardType}
                    style={[styles.input, { borderColor: isFocus ? APP_COLOR.ORANGE : APP_COLOR.GREY }]}
                    secureTextEntry={secureTextEntry && !isShowPassword}
                />
                {error && <Text style={{ color: 'red', marginTop: 5 }} >{error}</Text>}
                {
                    secureTextEntry &&
                    <Entypo

                        style={styles.eye}
                        name={isShowPassword ? "eye" : "eye-with-line"}
                        size={15} color="black"
                        onPress={() => setIsShowPassword(!isShowPassword)}
                    />
                }
            </View>
        </View>

    )
}

export default ShareInput