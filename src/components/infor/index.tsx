import { View, Text } from 'react-native'
import { styles } from './styles'

export function Infor(){
    return(
        <View style={styles.container}>
            <View style={styles.infor}>
                    <View style={styles.row}>
                        <Text style={styles.tasksCreated}>
                            Criadas
                        </Text>
                    </View>
                    <View style={styles.taskscontainer}>
                        <Text style={styles.counterText}>
                            0
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.tasksDone}>
                            Concluidas
                        </Text>
                    </View>
                    <View style={styles.taskscontainer}>
                        <Text style={styles.counterText}>
                            0
                        </Text>
                    </View>
                
            </View>
        </View>
    )
}