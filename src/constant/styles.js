import { StyleSheet } from "react-native";
import { COLOR } from "./Colors";

const MainStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: COLOR.light.background,
        paddingVertical: 28
    },
    MainTitleStle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLOR.light.mainText,
    },
    SubTextStyle: {
        fontSize: 12,
        color: COLOR.light.subText
    }
})

export default MainStyles