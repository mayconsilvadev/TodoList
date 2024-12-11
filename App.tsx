import { View, StyleSheet, StatusBar } from 'react-native';
import { Home } from './src/components/Home';
import { theme } from './src/styles/theme';
import { HomeScreens } from './src/screens';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';





export default function App() {
  const [fontsLoaded] = useFonts({
    interRegular: Inter_400Regular, 
    interBold: Inter_700Bold,
  });

 

  return (
    <View style={style.container}>
      <StatusBar 
      barStyle='light-content'
      backgroundColor='transparent'
      translucent
      /> 


      
      <HomeScreens/>
    </View>
  );
}


const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: theme.gray[600],
    
  }
})