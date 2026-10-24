import { createContext, useContext, useState } from "react";


interface AppContextType {
    theme: string,
    setTheme: (value: string) => void;
    appState: IUserLogin | null;
    setAppState: (value: any) => void;
}
const AppContext = createContext<AppContextType | null>(null);

interface IProps {
    children: React.ReactNode
}

export const useCurrentApp = () => {
    const currentTheme = useContext(AppContext)

    if (!currentTheme) {
        throw new Error(
            "useCurrentApp has to be use within <AppContext.Provider>"
        );
    }

    return currentTheme;
}
const AppProvider = (props: IProps) => {
    const [theme, setTheme] = useState<string>("");
    const [appState, setAppState] = useState<IUserLogin | null>(null);

    return (
        <AppContext.Provider value={{ theme, setTheme, appState, setAppState }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;