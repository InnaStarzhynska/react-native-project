import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { useState } from "react";

export default function CreatePostScreen() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const isDisabled = !title || !location;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Pressable style={styles.buttonAddFoto}>
              <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
            </Pressable>
          </View>
          <Text style={styles.iconText}>Завантажте фото</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            style={styles.input}
            placeholder="Назва..."
          />
          <TextInput
            value={location}
            onChangeText={setLocation}
            style={styles.input}
            placeholder="Місцевість..."
          ></TextInput>
          <Pressable
            disabled={isDisabled}
            style={{
              ...styles.button,
              backgroundColor: isDisabled ? "#D3D3D3" : "#FF6C00",
            }}
          >
            <Text style={styles.buttonText}>Опублікувати</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setTitle("");
              setLocation("");
            }}
            style={styles.remove}
          >
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  iconContainer: {
    height: 240,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    marginTop: 32,
    marginBottom: 8,
  },
  buttonAddFoto: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 50,
    marginLeft: "50%",
    transform: [{ translateX: -30 }, { translateY: 90 }],
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontSize: 16,
    color: "#BDBDBD",
    marginBottom: 32,
  },
  input: {
    fontSize: 16,
    color: "#BDBDBD",
    marginBottom: 32,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  button: {
    display: "flex",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "auto",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 400,
  },
  remove: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 34,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
