import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TextInput, Avatar, Button } from "react-native-paper";
import { styles } from "../assets/styles/allstyles";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";

export default function LoginScreen({navigation}) {
  const [email, setEmmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [messageColor, setMessageColor] = useState(false);

  //configurar a Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  //método para crear cuenta e iniciar sesión
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Cuenta creada exitosamente");
        setMessageColor(true)
      })
      .catch((error) => {
        setMessage("Error en correo y/o contraseña");
        setMessageColor(false)
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setMessage("")
        setPassword("")
        //setMessageColor(true)
        navigation.navigate("Home",{email:email});
      })
      .catch((error) => {
        setMessage("Error en correo y/o contraseña");
        setMessageColor(false)
      });
  };

  return (
    <View style={styles.container}>
      <Avatar.Image
        style={{ marginBottom: 20 }}
        size={100}
        source={require("../assets/imgs/iniciarsesion.png")}
      />
      <View
        style={{
          borderWidth: 2,
          borderColor: "gray",
          borderRadius: 10,
          padding: 50,
        }}
      >
        <TextInput
          autoFocus
          label="Correo Electrónico"
          left={<TextInput.Icon icon="email" />}
          onChangeText={(email) => setEmmail(email)}
          value={email}
        />
        <TextInput
          style={{ marginTop: 20 }}
          label="Contraseña"
          secureTextEntry={!showPass}
          onChangeText={(password) => setPassword(password)}
          value={password}
          right={
            <TextInput.Icon
              icon={showPass ? "eye" : "eye-off"}
              onPress={() => setShowPass(!showPass)}
            />
          }
        />
        <Button
          style={{ marginTop: 20, backgroundColor: "orange" }}
          icon="login"
          mode="outlined"
          onPress={handleSignIn}
        >
          Iniciar Sesión
        </Button>
        <Button
          style={{ marginTop: 20, backgroundColor: "yellow" }}
          icon="account"
          mode="outlined"
          onPress={handleCreateAccount}
        >
          Crear Cuenta
        </Button>
        <Text style={{color: messageColor ? 'green' : 'red' }}>{message}</Text>

      </View>
    </View>
  );
}
