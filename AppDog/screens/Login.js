import React, {Component} from "react";
import { View,Text,StyleSheet,Image,ImageBackground,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from "react-native";
import firebase from "firebase";

const bgImage = require("../assets/backgroundDog.png");
const appIcon = require("../assets/imagenDog.png");
const appName = require("../assets/titleDog.png");

export default class Login extends React.Component{
  constructor(props){
     super(props);
     this.state = {
        email:"",
        password:""
     };
  }

  handleLogin = (email,password) => {
    firebase
      .auth()
      .singnWithEmailandPassword(email,password)
      .then(() => {
        this.props.nagivation.navigate("BottomTab");
      })
      .catch(error => {
        Alert.alert(error.message);
      })
  }

  render(){
    const {email,password} = this.state;
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ImageBackground source={bgImage} style={styles.bgImage}>
         <View style={styles.upperContainer}>
           <Image source={appIcon} style={styles.appIcon}/>
           <Image source={appName} style={styles.appName}/>
         </View>

         <View style={styles.lowerContainer}>
           <TextInput 
              style={styles.textinput}
              onChargeText={text => this.setState({ email: text})}
              placeholder={"Insira seu Email"} 
              placeholderTextColor={"#FFFFFF"} 
              autoFocus
           />

           <TextInput
              style={[styles.textinput,{marginTop: 20}]}
              onChargeText={text => this.setState({ password: text})}
              placeholder={"Insira seu Senha"} 
              placeholderTextColor={"#FFFFFF"} 
              secureTextEntry
            />

           <TouchableOpacity
             style={[styles.button, { marginTop: 20}]}
             onPress={() => this.handleLogin(email,password)}
            >
                <Text style={styles.buttonText}>Entrar</Text>
           </TouchableOpacity>
         </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
     container: { 
        flex: 1, 
        backgroundColor: "#FFFFFF" 
    }, 
    bgImage: { 
        flex: 1, 
        resizeMode: "cover", 
        justifyContent: "center" 
    }, 
    upperContainer: { 
        flex: 0.5, 
        justifyContent: "center", 
        alignItems: "center" 
    }, 
    appIcon: { 
        width: 280, 
        height: 280, 
        resizeMode: "contain", 
        marginTop: 80 
    }, 
    appName: { 
        width: 180, 
        resizeMode: "contain", 
        marginBottom: 30 
    }, 
    lowerContainer: { 
        flex: 0.5, 
        alignItems: "center" 
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