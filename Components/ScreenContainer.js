import {
  Keyboard,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";

export default function SaveAreaContainer({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.view}>
          <ImageBackground
            source={require("../Images/ImageBackground.jpg")}
            resizeMode="cover"
            style={styles.image}
          >
            {children}
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#fff",
    width: "100%",
  },
  view: {
    height: "100%",
    paddingTop: 32,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
