import { APP_COLOR } from "@/utils/contain"
import { Tabs } from "expo-router"
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const TabLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: APP_COLOR.ORANGE,
            tabBarInactiveTintColor: APP_COLOR.GREY,
            tabBarLabelStyle: { paddingBottom: 3 }
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "home",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused
                            ? "home-sharp"
                            : "home-outline"
                        } size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen name="order"
                options={{
                    title: "Order",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused
                            ? "restaurant-sharp"
                            : "restaurant-outline"
                        } size={size} color={color} />
                    )
                }}
            />

            <Tabs.Screen name="favorite"
                options={{
                    title: "Favorite",
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialIcons name={
                            focused
                                ? "favorite"
                                : "favorite-outline"
                        } size={size} color={color}
                        />
                    )
                }}
            />

            <Tabs.Screen name="notification"
                options={{
                    title: "Notification",
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialIcons name={
                            focused
                                ? "notifications"
                                : "notifications-none"
                        } size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen name="account"
                options={{
                    title: "Me",
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialIcons name={
                            focused
                                ? "person"
                                : "person-outline"
                        } size={size} color={color} />

                    )
                }} />
        </Tabs>
    )
}
export default TabLayout