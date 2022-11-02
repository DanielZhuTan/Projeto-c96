import React, { Component } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import PesquisaDog from "../screens/PesquisaDog";
import AtividadesDog from "../screens/AtividadesDog";

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component{
  render(){
    return(
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen}/>
        <Tab.Screen name="PesquisaDog" component={PesquisaDog}/>
        <Tab.Screen name="AtividadesDog" component={AtividadesDog}/>
      </Tab.Navigator>
    )
  }
}
