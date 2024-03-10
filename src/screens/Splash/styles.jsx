import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff', // Arka plan rengi
  },
  linear: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 1200,
  },
  circle: {
    width: 1200,
    height: 1200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoMain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoMainText: {
    fontSize: 30,
    color: '#000',
  },
});
