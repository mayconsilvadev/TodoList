import { useRef, useState } from 'react'
import { View, Text, FlatList, Alert, TextInput } from 'react-native'
import { styles } from './styles'
import { Task } from '../components/task'
import { TaskDTO } from '../dtos/TaskDTO'
import { Empty } from '../components/empty'
import { Home } from '../components/Home'
import { uuid } from '../utils/uuid'

export function HomeScreens(){
    const [tasks, setTasks] = useState<TaskDTO[]>([])
    const [newTask, seteNewTask] = useState('')
    const newTaskInputRef = useRef<TextInput>(null)

    function handleTaskAdd(){
      if(newTask !== '' && newTask.length >= 5) {
          setTasks((tasks) => [...tasks, 
          {id: uuid() , isCompleted: false, title: newTask.trim() }, 
        ]);
        seteNewTask('');

        newTaskInputRef.current?.blur()
      }
        
        }

    function handleTaskDone(id: string){
        setTasks((task) => 
            task.map((task) => 
                {task.id === id ? (task.isCompleted = !task.isCompleted) : null 
                    return task}),)
    }
    function handleTaskDeleted(id: string){
        Alert.alert('Excluir Tarefa', 'Deseja escluir essa tarefa?', [
            {
                text: 'Sim',
                style: 'default',
                onPress: () => setTasks((task) => tasks.filter((task) => task.id !== id ))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
        
    }

    const totalTasksCreated = tasks.length
    const totalTasksCompleted = tasks.filter(
        ({isCompleted}) => isCompleted).length
    
    return(
        <View style={styles.container}>
            <Home 
             inputRef={newTaskInputRef}
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
                            {totalTasksCreated}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.tasksDone}>
                            Concluidas
                        </Text>
                    </View>
                    <View style={styles.taskscontainer}>
                        <Text style={styles.counterText}>
                            {totalTasksCompleted}
                        </Text>
                    </View>
                
            </View>

            <FlatList 
               data={tasks}
               keyExtractor={(tasks) => tasks.id}
               renderItem={({ item }) => ( 
               <Task 
               key={item.id}
               onTaskDone={() => handleTaskDone(item.id)}
               onTaskDeleted={() => handleTaskDeleted(item.id)}
               {...item}
               />
             )}
             ListEmptyComponent={<Empty/>}
            />
        </View>
    )
}