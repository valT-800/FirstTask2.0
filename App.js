import React, { Component} from "react";
import { StyleSheet, Text, TouchableOpacity, Pressable, View} from "react-native";

class App extends Component{
  constructor(){
    super();
    this.state ={
      itemId: 0,
      list: [
        {id: 1, button: "button1", textBox: "text1", pressed: false},
      {id: 2, button: "button2", textBox: "text2", pressed: false},
      {id: 3, button: "button3", textBox: "text3", pressed: false},
      {id: 4, button: "button4", textBox: "text4", pressed: false},
    ]
  }
  }
  updateState = (item) => {
    const items  = this.state.list;
    for (var i = 0, len = items.length; i < len; i++) {
      if(items[i].id === item.id && items[i].pressed === false){
        items[i].pressed=true;
      }
      else if(items[i].id === item.id && items[i].pressed === true){
        items[i].pressed=false;
      }
  }
    // update state
    this.setState({
        list: items,
    });
  }
  updateTextBoxLabel = (item) =>{
    if (item.pressed === false) {
      return styles.textBoxLabel;
    }
    else if(item.pressed === true){
        return styles.selectedLabel;
    }
  }
  render(){
    
    return(
    <View style ={{flex: 1}}>
      <View style={[styles.buttonsContainer, styles.buttonsRow]}>
      {this.state.list.map((item) => (
        <TouchableOpacity
        key={item.button}
        onPress={() => this.updateState(item)}
        style={styles.button}>
        <Text style={styles.buttonLabel}>
          {item.button}
        </Text>
      </TouchableOpacity>
      
      )
      )}
      
      
      </View>
      <View style={[styles.textBoxesContainer]}>
      {this.state.list.map((item) => (
        <View
      key = {item.textBox}
      style={styles.textBox}>
        <Text style={this.updateTextBoxLabel(item)}>
          {item.textBox}
        </Text>
      </View>
      ))}
      </View>
      </View>
    )
}
}
const styles = StyleSheet.create({
  buttonsContainer:{
    flex: 1,
    justifyContent: "center",
    paddingTop: 100,
    backgroundColor: "azure",

  },
  textBoxesContainer:{
    flex: 1,
    justifyContent: "center",
    backgroundColor: "bisque",

  },
  textBox: {
    borderRadius: 4,
    borderWidth: 3,
    borderColor: "grey",
    backgroundColor: "oldlace",
    alignSelf: "center",
    marginBottom: 30,
    minWidth: "40%",
    textAlign: "center",
    width: 60,
    height: 40,
  },
  buttonsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  textBoxesRow:{
    flexDirection: "row",
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "oldlace",
    alignSelf: "center",
    marginHorizontal: "5%",
    marginBottom: 50,
    minWidth: "40%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
    color: "coral",
  },
  textBoxLabel: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
    color: "red",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default App;
