import { DefaultTheme, type ErrorBoundaryProps, Stack, ThemeProvider } from "expo-router"
import { Pressable, Text, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaView } from "react-native-safe-area-context";
import AppProvider from "../context/app.context";



export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    padding: 16,
                }}
            >
                <Text style={{ fontSize: 20, color: "red" }}>
                    Something went wrong
                </Text>

                <Text style={{ marginVertical: 12 }}>
                    {error.message}
                </Text>

                <Pressable style={{ backgroundColor: "blue", alignItems: "center" }} onPress={retry}>
                    <Text style={{ color: "white" }}>
                        Try again
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );

}

const RootLayout = () => {
    const navTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'transparent',
        }
    };
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <RootSiblingParent>
                <AppProvider>
                    {/* <SafeAreaView style={{ flex: 1 }}> */}
                    <ThemeProvider value={navTheme}>
                        <Stack screenOptions={{
                            headerStyle: {
                                backgroundColor: '#f5411e',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: "bold"
                            }
                        }
                        }>
                            <Stack.Screen name="index"
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen name="(auth)/login"
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen name="(auth)/signup"
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen name="(auth)/verify"
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen name="(auth)/welcome"
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen name="(tabs)"
                                options={{ headerShown: false }} />

                            <Stack.Screen name="product/[id]"
                                options={{ headerShown: false }} />

                        </Stack>

                    </ThemeProvider>
                    {/* </SafeAreaView> */}
                </AppProvider>
            </RootSiblingParent>
        </GestureHandlerRootView >
    )
}
export default RootLayout