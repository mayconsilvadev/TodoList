import { StyleSheet } from 'react-native'
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 55,
        marginHorizontal: 25,
        marginLeft: 30,
        marginRight: 10
        
    },

    infor: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 50,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },

    tasksCreated: {
        fontFamily: theme.font_family.bold,
        fontSize: theme.font_size.g,
        color: theme.blue[100],
    },

    tasksDone: {
        fontFamily: theme.font_family.bold,
        fontSize: theme.font_size.g,
        color: theme.purple[100],
        marginLeft: 10
    },

    taskscontainer: {
        backgroundColor: theme.gray[400],
        width: 25,
        height: 19,
        borderRadius: 999,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 50
    },

    counterText: {
        color: theme.gray[200],
        fontSize: theme.font_size.md,
        fontFamily: theme.font_family.bold,
        
    },
});

