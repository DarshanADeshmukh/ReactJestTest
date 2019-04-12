import React,{Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Home extends Component<Props>{

  constructor(props){
    super(props);
    this.state = {
      data:'result',
      header:'',
    }
  }

  render(){
    return(
      <View style = {styles.container}>
      <Text style = {styles.textStyle}> Home Screen </Text>
      </View>
    )
  }
  sum(a,b){
    return a + b;
  }
  substract(a,b){
    return a -b;
  }
  multiply(a,b){
    return a * b;
  }
  division(a,b){
    return a / b;
  }
  changeComponentState(x){
    this.setState({data:x * 6});
  }
  changeComponentStateHeader(name){
    this.setState({header:name});
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  textStyle:{
    fontSize:30,
    color:'black',
  },

});
