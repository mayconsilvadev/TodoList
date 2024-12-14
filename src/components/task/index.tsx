import { View, TouchableOpacity, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './styles'
import { theme } from '../../styles/theme'
import { TaskDTO } from '../../dtos/TaskDTO'

type TaskProps = TaskDTO & {
    onTaskDone: (id: string) => void
    onTaskDeleted: (id: string) => void
}

export function Task({ id, title, isCompleted, onTaskDone, onTaskDeleted } : TaskProps){
    return(
        <View style={styles.taskContainer}>
            <TouchableOpacity onPress={() => onTaskDone(id)}>
                <MaterialCommunityIcons 
                name={isCompleted ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"}
                size={20}
                color={isCompleted ? theme.purple[200] : theme.blue[100]}/>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={isCompleted ? styles.textDone : styles.textCreated}>
                    {title}
                </Text>
            </View>
            <TouchableOpacity onPress={() => onTaskDeleted(id)}>
                <MaterialCommunityIcons 
                name="trash-can-outline"
                size={20}
                color={theme.gray[300]}/>
            </TouchableOpacity>
        </View>
    )
}