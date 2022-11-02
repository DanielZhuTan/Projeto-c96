import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      nomeDog: "",
      raçaDog: "",
      idadeDog: "",
      vacinasDog: "",
      dropdownHeight: 40,
      
    };
  }

  

  render() {
    return (
      <KeyboardAvoidingView>
       <SafeAreaView style={styles.droidSafeArea}>
        <View style={styles.container}>
          <Text style={styles.textTitle}>Perfil do Dog</Text>
        </View>

         <View style={styles.inputContainer}>
           <TextInput 
              style={styles.textinput}
              onChargeText={text => this.setState({nomeDog: text})}
              placeholder={"Nome do seu Dog"} 
              placeholderTextColor={"#FFFFFF"} 
              autoFocus
           />
            
           <TextInput
              style={[styles.textinput,{marginTop: 20}]}
              onChargeText={text => this.setState({raçaDog: text})}
              placeholder={"Raça do seu Dog"} 
              placeholderTextColor={"#FFFFFF"} 
              autoFocus
            />
          
           <TextInput
              style={[styles.textinput,{marginTop: 20}]}
              onChargeText={number => this.setState({idadeDog: number})}
              placeholder={"Idade do seu Dog"} 
              placeholderTextColor={"#FFFFFF"} 
              autoFocus
            />

            <DropDownPicker
               dropDownStyle={{marginTop: 20}}
               items={[
                { label: "Em Dia", value: "Em Dia" },
                { label: "Pendente", value: "Pendente" },
              ]}
              containerStyle={{
                height: 40,
                borderRadius: RFValue(20),
                marginBottom: RFValue(20),
                marginHorizontal: RFValue(10)
              }}
              onOpen={() => {
                this.setState({ dropdownHeight: 80 });
              }}
              onClose={() => {
                this.setState({ dropdownHeight: 40 });
              }}
            />

            <TouchableOpacity
             style={[styles.button, { marginTop: 20}]}
             onPress={() => this.handleLogin(email,password)}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
       </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    flex: 0.4,
    justifyContent: "center",
  },
  textinput: { 
    width: "75%", 
    height: 55, 
    padding: 10, 
    borderColor: "#FFFFFF", 
    borderWidth: 4, 
    borderRadius: 10, 
    fontSize: 18, 
    color: "#FFFFFF",
    backgroundColor: "#5653D4" 
  }, 
  button: { 
    width: "43%", 
    height: 55, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#F48D20",
    borderRadius: 15
  },
  buttonText: { 
    fontSize: 24, 
    color: "#FFFFFF", 
  } 
});