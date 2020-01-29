import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 0.9,
        alignItems: 'center',
    },
    input: {
        alignItems: 'center',
        height: 50,
        width: 250,
        flexDirection: 'column',
        marginBottom: 10
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonsContainer: {
        width: 300,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'space-between'

    },
    button: {
        width: 130,
    },
    inputLabel: {
        fontSize: 2
    }
})