import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styles } from "../assets/styles/allstyles";
import { useForm, Controller } from "react-hook-form";

export default function HomeScreen({ navigation, route }) {
  //Formulario que será controlado por react-hook-form
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      idemploye: "",
      fullname: "",
      email: "",
      url: "",
      age: "",
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <View style={styles.container}>
      {/* <Text>Bienvenido usuario {route.params.email} </Text> */}
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 12,
          minLength: 4,
          pattern: /^[0-9]+$/,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Identificación empleado"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="idemploye"
      />

      {errors.idemploye?.type === "pattern" && (
        <Text style={{ color: "red" }}>
          La identificación debe ser numérica
        </Text>
      )}

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[a-zA-Z]{2}[\sa-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, // Esto validará letras (mayúsculas y minúsculas) y espacios
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nombre completo"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullname"
      />
      {errors.fullname?.type === "required" && (
        <Text style={{ color: "red" }}>El nombre completo es obligatorio</Text>
      )}
      {errors.fullname?.type === "pattern" && (
        <Text style={{ color: "red" }}>
          El nombre solo debe contener letras y espacios
        </Text>
      )}

      {errors.idemploye?.type === "required" && (
        <Text style={{ color: "red" }}>La identificación es obligatoria</Text>
      )}
      {errors.idemploye?.type === "maxLength" && (
        <Text style={{ color: "red" }}>
          La identificación debe tener máximo 12 caracteres
        </Text>
      )}
      {errors.idemploye?.type === "minLength" && (
        <Text style={{ color: "red" }}>
          La identificación debe tener minimo 4 caracteres
        </Text>
      )}
      {errors.idemploye?.type === "pattern" && (
        <Text style={{ color: "red" }}>
          La identificación debe ser numérica
        </Text>
      )}

      <Button
        style={{ marginTop: 20, backgroundColor: "orange" }}
        icon="content-save-check-outline"
        mode="outlined"
        onPress={handleSubmit(onSubmit)}
      >
        Enviar
      </Button>
      <Button
        style={{ marginTop: 20, backgroundColor: "powderblue" }}
        icon="backspace"
        mode="outlined"
        onPress={reset}
      >
        Limpiar datos
      </Button>
    </View>
  );
}
