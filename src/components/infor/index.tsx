import { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from './styles'
import { Task } from '../task'
import { TaskDTO } from '../../dtos/TaskDTO'
import { Empty } from '../empty'

export function Infor(){
    const [tasks, setTasks] = useState<TaskDTO[]>([
        

    ]);
    
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

            <FlatList 
               data={tasks}
               keyExtractor={(tasks) => tasks.id!}
               renderItem={({ item }) => ( 
               <Task 
               key={item.id}
               isCompleted={item.isCompleted}
               title={item.title}
               />
             )}
             ListEmptyComponent={<Empty/>}
            />
        </View>
    )
}