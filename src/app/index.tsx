import { View, Text, StyleSheet } from 'react-native';

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
  },
});
export default Index;
