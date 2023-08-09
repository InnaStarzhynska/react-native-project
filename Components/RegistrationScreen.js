import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable
} from "react-native";

export default function RegistrationScreen() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [onFocusLogin, setFocusLogin] = useState(false);
  const [onFocusEmail, setFocusEmail] = useState(false);
  const [onFocusPassword, setFocusPassword] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const isDisabled = !login || !email || !password;
  const handleSubmit = () => {
    const userRegisterInfo = { login, email, password };
    console.log(userRegisterInfo);
    setLogin('');
    setEmail('');
    setPassword('') 
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.keyboard}
        keyboardVerticalOffset={Platform.select({
          ios: () => 0,
          android: () => 230,
        })()}
      >
        <View style={styles.wrapper}>
          <Image style={styles.image} resizeMode="contain" />
          <TouchableOpacity style={styles.btnAdd}>
            <Text style={styles.btnAddIcon}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <Text style={styles.title} textAlign="center">
            Реєстрація
          </Text>
          <TextInput
            value={login}
            style={{
              ...styles.input,
              borderColor: onFocusLogin ? "#FF6C00" : "#000",
            }}
            placeholder="Логін"
            onFocus={() => {
              setFocusLogin(true);
            }}
            onBlur={() => {
              setFocusLogin(false);
            }}
             onChangeText={setLogin}
          />
          <TextInput
            value={email}
            style={{
              ...styles.input,
              borderColor: onFocusEmail ? "#FF6C00" : "#000",
            }}
            keyboardType="email-address"
            placeholder="Адреса електронної пошти"
            onFocus={() => {
              setFocusEmail(true);
            }}
            onBlur={() => {
              setFocusEmail(false);
            }}
             onChangeText={setEmail}
          />
          <TextInput
            value={password}
            style={{
              ...styles.lastInput,
              borderColor: onFocusPassword ? "#FF6C00" : "#000",
            }}
            secureTextEntry={passwordShown ? true : false}
            placeholder="Пароль"
            onFocus={() => {
              setFocusPassword(true);
            }}
            onBlur={() => {
              setFocusPassword(false);
            }}
             onChangeText={setPassword}
          />
          <Pressable disabled={isDisabled} style={{ ...styles.button, backgroundColor: isDisabled ? "#D3D3D3" : "#FF6C00" } } activeOpacity={0.3} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </Pressable>
          <TouchableOpacity>
            <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnPassword}>
            <Text
              style={styles.btnText}
              onPress={() => setPasswordShown(!passwordShown)}
            >
              {" "}
              {!passwordShown ? "Приховати" : "Показати"}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 66,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "flex-end",
  },
  wrapper: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 120,
  },
  image: {
    marginTop: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
  },
  btnAdd: {
    marginLeft: "100%",
    transform: [{ translateX: -12.5 }, { translateY: -40 }],
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
  },
  btnAddIcon: {
    color: "#FF6C00",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    alignItems: "stretch",
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 33,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  lastInput: {
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    padding: 10,
    marginBottom: 43,
    fontSize: 16,
  },
  button: {
    display: "flex",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 400,
  },
  linkText: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
  },
  btnPassword: {
    position: "absolute",
    top: 220,
    right: 16,
  },
  btnText: {
    color: "#1B4371",
    fontSize: 16,
  },
});
