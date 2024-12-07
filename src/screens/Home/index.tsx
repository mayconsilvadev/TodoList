import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import  logoPng  from "../../assets/logo.png";
import { styles } from './styles';
import { theme } from '../../styles/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons'



export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoPng}/>

      <View style={styles.home}>
        <TextInput 
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor={theme.gray[300]}     
        />

        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons 
            name="plus-circle-outline" 
            size={16} 
            color={theme.gray[100]}/>
        </TouchableOpacity>

      </View>

      
    </View>
  

  );

};
