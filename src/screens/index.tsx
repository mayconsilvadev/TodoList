import { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from './styles'
import { Task } from '../components/task'
import { TaskDTO } from '../dtos/TaskDTO'
import { Empty } from '../components/empty'
import { Home } from '../components/Home'
import { uuid } from '../utils/uuid'

export function HomeScreens(){
    const [tasks, setTasks] = useState<TaskDTO[]>([])
    const [newTask, seteNewTask] = useState('')

    function handleTaskAdd(){
      if(newTask !== '' && newTask.length >= 5) {
          setTasks((tasks) => [...tasks, 
          {id: uuid() , isCompleted: false, title: newTask.trim()}])
      }
        
        }

    
    return(
        <View style={styles.container}>
            <Home 
             task={newTask} 
             onChangeText={seteNewTask} 
             onPress={handleTaskAdd}
            />

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