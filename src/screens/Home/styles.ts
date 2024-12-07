import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.gray[700],
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 173,
    position: 'relative',
  },
  home: {
    position: 'absolute',
    bottom: -54 / 2,
    height: 54,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '75%',
    height: 54,
    padding: 16,
    backgroundColor: theme.gray[500],
    margin: 7,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.gray[700],
    fontSize: 16,
    fontFamily: 'Inter-Regular', 
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 5,
    backgroundColor: theme.blue[200], 
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
