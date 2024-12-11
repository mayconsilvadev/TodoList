import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import  logoPng  from "../../assets/logo.png";
import { styles } from './styles';
import { theme } from '../../styles/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons'

type HeaderProps = {
  task: string
  onChangeText: (task: string) => void
  onPress: () => void
}

export function Home({task, onChangeText, onPress}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Image source={logoPng}/>

      <View style={styles.home}>
        <TextInput 
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor={theme.gray[300]} 
          value={task}
          onChangeText={onChangeText}    
        />

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <MaterialCommunityIcons 
            name="plus-circle-outline" 
            size={16} 
            color={theme.gray[100]}/>
        </TouchableOpacity>

      </View>

      
    </View>
  

  );

};
