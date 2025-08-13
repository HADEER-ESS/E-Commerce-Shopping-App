import { Dimensions, StyleSheet } from "react-native";
import { ThemeType } from "./Colors";

export const createGlobalStyle = (theme: ThemeType) => {
    return StyleSheet.create({
        screenContainer: {
            flex: 1,
            backgroundColor: theme.white,
            paddingVertical: 28
        },
        MainTitleStle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: theme.black,
        },
        SubTextStyle: {
            fontSize: 12,
            color: theme.secondry
        }
    })
}

export const width = Dimensions.get('screen').width