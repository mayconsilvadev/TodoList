import { StyleSheet} from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
    taskContainer: {
        width: '90%',
        height: 64,
        backgroundColor: theme.gray[500],
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        marginLeft: 24,
        marginRight: 20,
        marginBottom: 1,
        paddingHorizontal: 12,
        paddingVertical: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.gray[400]
    },
    textContainer:{
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    textDone:{
        fontSize: theme.font_size.md,
        color: theme.gray[300],
        textDecorationLine: 'line-through',
    },
    textCreated:{
        fontSize: theme.font_size.md,
        color: theme.gray[100],
        textDecorationLine: 'none',
    }
})