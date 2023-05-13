import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text>Estamos en la FAVORITES</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})