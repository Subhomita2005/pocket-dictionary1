import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export default class App extends React.Component {
  constructor(){
    super()
    this.state ={
      text:"",
      displayText:""
    }
  }
  render() {
    return (
      <View style={styles.container}>
     <Header backgroundColor ={"#bfff00"} centerComponent={{text:"Pocket Dictionary", style:{color:"#504ed3", fontSize:20}}}>

     </Header>
     <TextInput onChangeText={(text)=>{this.setState({
       text: text
     })}} value={this.state.text} style={styles.inputBox}></TextInput>
     <TouchableOpacity style={styles.goButton} onPress={()=>{this.setState({
       displayText: this.state.text
     })}}> <Text style={styles.buttonText}>Search</Text></TouchableOpacity>
     <Text style={styles.displayText}>{this.state.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#504ed3',
  },
  inputBox:{
    marginTop:100, width:200, alignSelf:"center",height:40, textAlign:"center", borderWidth:4
  },
  goButton:{width:100, height:55,alignSelf:"center", padding:10, margin:10, backgroundColor:"#0dd5e8", borderRadius:15},
  buttonText:{textAlign:"center", fontSize:25, fontWeight:"bold"},
  displayText:{textAlign:"center", fontSize:30}
  
});
