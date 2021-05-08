import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity, ToastAndroid, KeyboardAvoidingView} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../Config';

export default class App extends React.Component {

  constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = ()=>{
        db.collection("Story").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
       //ToastAndroid.show("Your story has been submitted.");
    }

  render() {
    return (
      <KeyboardAvoidingView style={styles.allText} behavior = "padding" enabled>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.titleBox}
          placeholder="Title of the story"
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Author of the story"
        />

        <TextInput 
                    placeholder="WRITE STORY"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>

        <TouchableOpacity style={styles.submitButton} onPress = {this.submitStory}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: 'lightgreen',
    flex: 1,
  },
  header: {
    backgroundColor: 'blue',
    border: 'dashed',
  },
  headerText: {
    fontFamily: 'Eras Bold ITC',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  titleBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  authorBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
    border: 'dashed',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      margin: 10,
      backgroundColor : 'white',
      fontFamily : 'Eras Bold ITC',
      borderRadius : 15
  },
  submitButton: {
    backgroundColor: 'blue',
    width: '50%',
    height: 40,
    border: 'dashed',
    marginTop: 10,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    fontFamily: 'britannic',
    textAlign: 'center',
    fontSize: 25,
  },
});