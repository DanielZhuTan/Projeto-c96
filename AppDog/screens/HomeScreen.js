import React, { Component } from "react";
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ImageBackground
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const ImageDog = require("../assets/imagemDog.png");
const BackgroundDog = require("../assets/backgroundDog.png");

export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <ImageBackground source={BackgroundDog} style={styles.bgImage}>
          <View style={styles.upperContainer}>
            <Text style={styles.textTitle}>App Dog</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={ImageDog} style={styles.imageIcon}></Image>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textDog}>...</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    )
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
    flex: 0.55,
    justifyContent: "center",
  },
  imageIcon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  textContainer: {
    flex: 0.7,
    justifyContent: "center",
  },
  textDog: {
    fontSize: 14,
    textAlign: 'center',
  },
});