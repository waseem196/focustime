import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Focus from './src/features/Focus';
import { colors} from "./src/utils/color"

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input}>
        <Focus />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  input: {
    flex: 0.4,
    padding : 25
  },
});
