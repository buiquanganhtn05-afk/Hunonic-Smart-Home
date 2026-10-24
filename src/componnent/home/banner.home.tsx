import * as React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import {
    Carousel,
    Pagination,
    type CarouselRef,
} from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;


const data = [
    require("@/assets/banner/bn1.jpg"),
    require("@/assets/banner/bn2.jpg"),
    require("@/assets/banner/bn3.jpg"),

]

const slider = [
    { id: 1, source: data[0] },
    { id: 2, source: data[1] },
    { id: 3, source: data[2] }

]

const BannerHome = () => {
    const ref = React.useRef<CarouselRef>(null);
    const progress = useSharedValue(0);
    const width = Dimensions.get("window").width;


    return (
        <View>
            <Carousel
                ref={ref}
                data={slider}
                progress={progress}
                style={{
                    width: width,
                    height: width / 4,
                }}
                renderItem={({ item, index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            overflow: "hidden"
                        }}
                    >
                        <Image source={item.source} style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: 'cover'
                        }}
                        />

                    </View>
                )}
            />

            <Pagination
                count={slider.length}
                progress={progress}
                containerStyle={{
                    gap: 8,
                    justifyContent: "center",
                    marginTop: 12,
                }}
                dotStyle={{
                    width: 5,
                    height: 5,
                    backgroundColor: "rgba(0,0,0,0.2)",
                    borderRadius: 50,
                }}
                activeDotStyle={{
                    width: 5,
                    height: 5,
                    backgroundColor: "#0F172A",
                    borderRadius: 50,
                }}
                onPress={(index) => {
                    ref.current?.scrollTo({
                        index,
                    });
                }}
                getItemAccessibilityLabel={(index, count) =>
                    `Featured item ${index + 1} of ${count}`
                }
            />
        </View>
    );
};

export default BannerHome;