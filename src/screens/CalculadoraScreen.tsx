/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import {BontonCal} from '../components/BontonCal';
import {styles} from '../theme/appTheme';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  } = useCalculadora();
  return (
    <View style={styles.calContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeño}>{numeroAnterior} </Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BontonCal texto="C" color="#9B9B9B" accion={limpiar} />
        <BontonCal texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BontonCal texto="del" color="#9B9B9B" accion={btnDelete} />
        <BontonCal texto="/" color="#FF9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BontonCal texto="7" accion={armarNumero} />
        <BontonCal texto="8" accion={armarNumero} />
        <BontonCal texto="9" accion={armarNumero} />
        <BontonCal texto="x" color="#FF9427" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BontonCal texto="4" accion={armarNumero} />
        <BontonCal texto="5" accion={armarNumero} />
        <BontonCal texto="6" accion={armarNumero} />
        <BontonCal texto="-" color="#FF9427" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BontonCal texto="1" accion={armarNumero} />
        <BontonCal texto="2" accion={armarNumero} />
        <BontonCal texto="3" accion={armarNumero} />
        <BontonCal texto="+" color="#FF9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BontonCal texto="0" ancho accion={armarNumero} />
        <BontonCal texto="." accion={armarNumero} />
        <BontonCal texto="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};
