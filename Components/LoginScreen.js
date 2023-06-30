import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function RegistrationScreen() {
  const [onFocusEmail, setFocusEmail] = useState(false);
  const [onFocusPassword, setFocusPassword] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title} textAlign="center">
          Увійти
        </Text>
        <TextInput
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
        />
        <TextInput
          style={{
            ...styles.lastInput,
            borderColor: onFocusPassword ? "#FF6C00" : "#000",
          }}
          secureTextEntry={passwordShown ? true : false}
          placeholder="Пароль"
          onFocus={() => { setFocusPassword(true) }}
          onBlur={() => {setFocusPassword(false)}}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>
            Немає акаунту? {""}
            <Text style={styles.innerText}>Зареєструватися</Text>{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnPassword}>
          <Text style={styles.btnText} onPress={() => setPasswordShown(!passwordShown)}> {!passwordShown ? 'Приховати' : 'Показати'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 132,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'flex-end',
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
    backgroundColor: "#FF6C00",
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
  innerText: {
    textDecorationLine: "underline",
  },
  btnPassword: {
    position: "absolute",
    top: 152,
    right: 16,
  },
  btnText: {
    color: "#1B4371",
    fontSize: 16,
  },
});