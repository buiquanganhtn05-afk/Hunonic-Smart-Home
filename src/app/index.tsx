import { router, SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import { getAccountAPI } from "@/utils/api";
import { useCurrentApp } from "@/context/app.context";
import AsyncStorage from "@react-native-async-storage/async-storage";



SplashScreen.preventAutoHideAsync();
const RootPage = () => {

    const { setAppState } = useCurrentApp();
    // const [state, setState] = useState<any>();
    const [error, setError] = useState<Error | null>(null);



    useEffect(() => {
        const prepare = async () => {
            try {
                const res = await getAccountAPI();
                if (res.data) {
                    setAppState({
                        user: res.data.user,
                        access_token: await AsyncStorage.getItem("access_token")
                    })
                    router.replace("/(tabs)")
                } else {
                    router.replace("/(auth)/welcome")
                }
            } catch (error) {
                setError(new Error("Unable to connect to the backend!"));
                // console.log("Don't connect to API Backend", error);
                // router.replace("/(auth)/welcome");
            }
            finally {
                await SplashScreen.hideAsync()
            }
        }
        prepare()
    }, []);
    if (error) {
        throw error;
    }
    return null;
}

export default RootPage