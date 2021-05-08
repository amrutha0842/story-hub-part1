import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.allText}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <Text style={styles.displayText}>Once upon a time, King Akbar lost a ring that was precious to him. This ring was a gift from his father .He was sad to lose it. Akbar summoned Birbal and requested him to find the ring. The court was full of courtiers. Birbal announced, “My great king, the ring is right here in the courtroom, and the one who has the ring has a straw stuck in his beard.” Everyone started looking at each other, and one of the courtiers started touching his beard to find the straw. Birbal called the guards and asked them to search the suspect. On searching the suspect, the ring was retrieved. Akbar was amazed at how Birbal managed to find the ring. Birbal said, “The one who is guilty will always feel scared”.
        </Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: '#ef7b64',
    flex: 1,
    fontFamily: 'comic sans ms',
  },
  header: {
    backgroundColor: 'pink',
    border: 'dashed',
    
  },
  headerText: {
    fontFamily: 'britannic',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  displayText: {
    fontFamily: 'britannic',
    fontSize: 20,
    padding: 15,
  },
});
