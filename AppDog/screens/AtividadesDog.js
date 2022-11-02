import React, { Component } from "react";
import {
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  CheckBox,
} from "react-native";

export default class AtividadesDog extends Component {
  constructor(){
    super();
    this.state={
      checked: false,
    }
  }

  check(){

  }

  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
          <View style={styles.upperContainer}>
            <Text style={styles.textTitle}>Atividades Diárias</Text>
          </View>
            <View>
              <CheckBox
                center
                title='Passeio com cachorro de manhã e da tarde'
                checked={this.state.checked}
             />

              <CheckBox
                center
                title='Adestramento com cachorro'
                checked={this.state.checked}
             />

              <CheckBox
                center
                title='Medicação de carrapatos'
                checked={this.state.checked}
             />
            </View>

          <View style={styles.imageContainer}>
            <Image style={styles.imageIcon}></Image>
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover", 
    justifyContent: "center" 
  },
  upperContainer: { 
    flex: 0.3, 
    justifyContent: "center", 
  }, 
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 0.8,
    justifyContent: "center",
  },
  imageIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  checkContainer: {
    flex: 0.45,
    justifyContent: "center",
  }
});