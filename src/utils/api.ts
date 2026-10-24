import axios from "@/utils/axios.customize";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Header } from "expo-router/build/react-navigation";
import { env, title } from "node:process";
import { Platform } from "react-native";
import { date } from "yup";

export const registerAPI = (name: string, email: string, password: string) => {
    const url = `/api/v1/auth/register`;
    return axios.post<IBackendRes<IRegister>>(url, { name, email, password })
}

export const VerifyApiCode = (email: string, code: string) => {
    const url = '/api/v1/auth/verify-code';
    return axios.post<IBackendRes<IRegister>>(url, { email, code })
}

export const ResendApiCode = (email: string) => {
    const url = '/api/v1/auth/verify-email';
    return axios.post<IBackendRes<IRegister>>(url, { email })
}

export const loginAPI = (email: string, password: string) => {
    const url = `/api/v1/auth/login`;
    return axios.post<IBackendRes<IUserLogin>>(url, { username: email, password })
}

export const getAccountAPI = () => {
    const url = `/api/v1/auth/account`;
    return axios.get<IBackendRes<IUserLogin>>(url)
}


export const getTopRestaurant = (ref: string) => {
    const url = `/api/v1/restaurants/${ref}`;
    return axios.post<IBackendRes<ITopRestaurant[]>>(url, {}, {
        headers: {
            delay: 3000
        }
    })
}



export const printAsyncStorage = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();

        const asyncStorage: Record<string, string | null> = {};

        for (const key of keys) {
            const value = await AsyncStorage.getItem(key);
            asyncStorage[key] = value;
        }

        console.log(JSON.stringify(asyncStorage, null, 2));
    } catch (error) {
        console.log(error)
    }

}

export const getURLBaseBackend = () => {
    const backend = Platform.OS === "android"
        ? process.env.EXPO_PUBLIC_ANDROID_API_URL
        : process.env.EXPO_PUBLIC_IOS_API_URL;
    return backend;

}


export const getRestaurantById = (id: string) => {
    const url = `/api/v1/restaurants/${id}`;
    return axios.get<IBackendRes<IRestaurant>>(url);
}


export const processDataRestaurantMenu = (restaurant: IRestaurant | null) => {
    if (!restaurant) return [];
    return restaurant?.menu?.map((menu, index) => {
        return {
            index,
            key: menu._id,
            title: menu.title,
            data: menu.menuItem
        }
    })

}

export const currencyFormatter = (value: any) => {
    const options = {
        significantDigits: 2,
        thousandsSeparator: '.',
        decimalSeparator: ',',
        symbol: 'đ'
    }

    if (typeof value !== 'number') value = 0.0
    value = value.toFixed(options.significantDigits)

    const [currency, decimal] = value.split('.')
    return `${currency.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        options.thousandsSeparator
    )} ${options.symbol}`
}

