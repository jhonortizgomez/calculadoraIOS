/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

type colorBoton = '#2D2D2D' | '#9B9B9B' | '#FF9427';

interface Props {
  texto: string;
  color?: colorBoton;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

export const BontonCal = ({
  texto,
  color = '#2D2D2D',
  ancho = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...stylesBoton.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...stylesBoton.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const stylesBoton = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
    color: 'white',
  },
});

// #2D2D2D
// #FF9427
