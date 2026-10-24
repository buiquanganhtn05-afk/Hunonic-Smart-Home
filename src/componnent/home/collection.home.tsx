import { Dimensions, FlatList, Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import demo from "@/assets/splash.png";
import { APP_COLOR } from "@/utils/contain";
import { useEffect, useState } from "react";
import { getTopRestaurant } from "@/utils/api";
import { router } from "expo-router";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

interface IProps {
    name: string,
    description: string,
    refAPI: string

}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    sale: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: APP_COLOR.ORANGE,
        padding: 3,
        borderRadius: 3,
        alignSelf: "flex-start"
    }
})

const { height: sHeight, width: sWidth } = Dimensions.get('window')


const CollectionHome = (props: IProps) => {
    const { name, description, refAPI } = props
    const dataStore = [
        { key: 1, img: demo, name: "store 1" },
        { key: 2, img: demo, name: "store 1" },
        { key: 3, img: demo, name: "store 1" },
        { key: 4, img: demo, name: "store 1" },
        { key: 5, img: demo, name: "store 1" },


    ]

    const [loading, setLoading] = useState(true);

    const [restaurant, setRestaurant] = useState<ITopRestaurant[]>([]);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)
            const res = await getTopRestaurant(refAPI);

            if (res.data) {
                setRestaurant(res.data)
            }
            else {

            }
            setLoading(false)
        }
        fetchData();
    }, [refAPI])


    const backend = Platform.OS === "android"
        ? process.env.EXPO_PUBLIC_ANDROID_API_URL
        : process.env.EXPO_PUBLIC_IOS_API_URL;


    const baseImage = `${backend}/images/restaurant`;
    return (
        <>
            <View style={{ height: 10, backgroundColor: "#e9e9e9" }}></View>
            {loading === false
                ? <View style={styles.container}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text
                            style={{
                                color: APP_COLOR.ORANGE,
                                fontSize: 16,
                                fontWeight: "600"
                            }}>{name}</Text>
                        <Text style={{ color: "#787878" }}>Show All</Text>
                    </View>
                    <View style={{ marginVertical: 5 }}>
                        <Text>{description}</Text>
                    </View>
                    <FlatList
                        data={restaurant}
                        horizontal
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 5 }}
                        renderItem={({ item }) => {
                            return (
                                <Pressable onPress={() => router.navigate({
                                    pathname: "/product/[id]",
                                    params: { id: item._id }
                                })}>

                                    <View style={{ backgroundColor: "#efefef" }}>
                                        <Image
                                            style={{ height: 130, width: 130 }}
                                            source={{ uri: `${baseImage}/${item.image}` }}
                                        />
                                        <View style={{ padding: 5 }}>
                                            <Text
                                                numberOfLines={1}
                                                ellipsizeMode="tail"
                                                style={{ fontWeight: 600, maxWidth: 130 }}>{item.name}</Text>
                                            <View style={styles.sale}>
                                                <Text style={{ color: APP_COLOR.ORANGE }}>Flash Sale</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Pressable>
                            )
                        }}
                    />
                </View>
                : <ContentLoader
                    speed={2}
                    width={sWidth}
                    height={230}
                    // viewBox="0 0 700 150"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    style={{ width: '100%' }}
                >
                    <Rect x="10" y="10" rx="5" ry="5" width={150} height="200" />
                    <Rect x="170" y="10" rx="5" ry="5" width={150} height="200" />
                    <Rect x="330" y="10" rx="5" ry="5" width={150} height="200" />
                </ContentLoader>

            }

        </>
    )
}

export default CollectionHome