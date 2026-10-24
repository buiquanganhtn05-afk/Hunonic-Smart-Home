import CustomFlatList from "@/componnent/CustomFlatList/CustomFlatList";
import CollectionHome from "@/componnent/home/collection.home";
import HeaderHome from "@/componnent/home/header.home";
import TopListHome from "@/componnent/home/top.list.home";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";


const data = [
    {
        key: 1,
        name: "Top Quán Rating 5* tuần này",
        description: "Những quán được thực khách yêu thích và đánh giá cao nhất tuần này.",
        refAPI: "top-rating"
    },

    {
        key: 2,
        name: "Quán Mới Lên Sàn",
        description: "Khám phá những quán ăn mới toanh đang chờ bạn trải nghiệm.",
        refAPI: "newcomer"
    },

    {
        key: 3,
        name: "Ăn Thỏa Thích, Freeship 0Đ",
        description: "Đặt món thả ga, tiết kiệm hơn với ưu đãi freeship cực hấp dẫn.",
        refAPI: "top-freeship"
    },

    {
        key: 4,
        name: "Món Ngon Mỗi Ngày",
        description: "Gợi ý những món ăn hấp dẫn cho bữa ăn thêm trọn vị.",
        refAPI: "newcomer"
    },

    {
        key: 5,
        name: "Deal Ngon Hôm Nay",
        description: "Săn ngay ưu đãi hot để thưởng thức món ngon với giá cực hời.",
        refAPI: "top-rating"
    },
]

const HomeTab = () => {
    return (
        <SafeAreaView style={styles.container}>
            <CustomFlatList
                data={data}
                style={styles.list}
                renderItem={({ item }) => <CollectionHome
                    name={item.name}
                    description={item.description}
                    refAPI={item.refAPI}
                />}

                HeaderComponent={<HeaderHome />}
                StickyElementComponent={<View style={styles.sticky} />}
                TopListElementComponent={<TopListHome />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ecf0f1",
        flex: 1,
        justifyContent: "center",
        overflow: "hidden"
    },
    header: {
        height: 100,
        marginBottom: 6,
        width: "100%"
    },
    item: {
        borderColor: "green",
        borderWidth: 1,
        height: 250,
        marginBottom: 10,
        width: "100%"
    },
    list: {
        overflow: "hidden"
    },
    sticky: {
        alignItems: "center",
        height: 100,
        marginBottom: 6,
        width: "100%"
    },
});

export default HomeTab