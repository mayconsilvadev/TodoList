import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 39,
        paddingHorizontal: 24,
        borderTopColor: theme.gray[300],
        borderBottomColor: theme.gray[600],
        borderLeftColor: theme.gray[600],
        borderRightColor: theme.gray[600],
        borderWidth: 1,
        
    },
    image: {
        marginBottom: 16,
    },
    fontBold: {
        fontFamily: theme.font_family.bold,
        fontSize: theme.font_size.md,
        color: theme.gray[300],
        width: 300,
        textAlign: 'center',
    },
    fontRegular: {
        fontFamily: theme.font_family.regular,
        fontSize: theme.font_size.md,
        color: theme.gray[300],
        width: 300,
        textAlign: 'center',
    }
})
