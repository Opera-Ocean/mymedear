import { StyleSheet } from "react-native";

import { Spaces } from "../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Spaces.base_width,
        height: Spaces.medium_height_space * 2.28,
        marginVertical: Spaces.base_height * 4
    },

    innerContainer: {
        marginVertical: Spaces.base_height * 4
    },

    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around"
    },

    column: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        paddingTop: Spaces.base_height,
        padding: Spaces.medium_width_space / 2
    },

    startContainer: {
        flex: 1,
        flexDirection: "column",
        alignContent: "flex-start",
        padding: Spaces.base_width * 5
    },

    endContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
    },

    innerRow: {
        flexDirection: "row",
        marginBottom: Spaces.base_height * 2
    },

    centeredItem: {
        alignSelf: "center"
    },
    
    status: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default styles;
