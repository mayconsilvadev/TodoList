import { Image, Text, View } from 'react-native'
import  clipborard  from '../../assets/clipboard.png'
import { styles } from './styles'

export function Empty(){
    return(
        <View style={styles.emptyContainer}>
            <Image source={clipborard} style={styles.image}/>
            <Text style={styles.fontBold} numberOfLines={1}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.fontRegular} numberOfLines={1}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}