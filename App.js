import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { RegistrationScreen } from "./Components/RegistrationScreen";
import { LoginScreen } from "./Components/LoginScreen"

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("./Images/ImageBackground.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <RegistrationScreen />
          {/* <LoginScreen /> */}
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: "#fff",
    width: '100%'
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
