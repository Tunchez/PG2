import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountInfo from "../screens/Account/AccountInfo";
import ChangeName from "../screens/Account/ChangeName";
import colors from "../styles/colors";
import ChangeEmail from "../screens/Account/ChangeEmail";
import ChangeUsername from "../screens/Account/ChangeUsername";
import ChangePassword from "../screens/Account/ChangePassword";
import Addresses from "../screens/Account/Addresses";
import AddAddress from "../screens/Account/AddAddress";

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.fontLight,
        headerStyle: {
          backgroundColor: colors.bgDark,
        },
        cardStyle: {
          backgroundColor: colors.bgLight,
        },
      }}
    >
      <Stack.Screen
        name="accounts"
        component={AccountInfo}
        options={{ title: "Cuenta", headerShown: false }}
      />
      <Stack.Screen
        name="change-name"
        component={ChangeName}
        options={{ title: "Cambiar datos" }}
      />
      <Stack.Screen
        name="change-email"
        component={ChangeEmail}
        options={{ title: "Cambiar email" }}
      />
      <Stack.Screen
        name="change-username"
        component={ChangeUsername}
        options={{ title: "Cambiar username" }}
      />
      <Stack.Screen
        name="change-password"
        component={ChangePassword}
        options={{ title: "Cambiar contraseña" }}
      />
      <Stack.Screen
        name="addresses"
        component={Addresses}
        options={{ title: "Mis direcciones" }}
      />
      <Stack.Screen
        name="add-address"
        component={AddAddress}
        options={{ title: "Nueva dirección" }}
      />
    </Stack.Navigator>
  );
}
