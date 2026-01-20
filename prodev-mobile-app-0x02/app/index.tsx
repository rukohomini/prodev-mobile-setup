import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={require("../assets/images/background-image.png")}
          style={styles.background}
        >
          <View style={styles.container}>
            {/* Company Logo */}
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
            />

            {/* Text Elements */}
            <Text style={styles.textLarge}>
              Find your favorite place here
            </Text>
            <Text style={styles.textSmall}>
              The best prices for over 2
            </Text>
            <Text style={styles.textSmall}>
              million properties worldwide
            </Text>

            {/* Button Group */}
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Join Now</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>Sign In</Text>
              </TouchableOpacity>
            </View>

            {/* Navigation Prompt */}
            <Text style={styles.promptText}>
              Continue as a guest
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  background: {
    width: width,
    height: height,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 20,
  },
  textLarge: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
  textSmall: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
  buttonGroup: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  primaryButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 10,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  secondaryButtonText: {
    color: "#000",
    fontSize: 16,
  },
  promptText: {
    marginTop: 20,
    fontSize: 14,
    color: "#000",
  },
});
