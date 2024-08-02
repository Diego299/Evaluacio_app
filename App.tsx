import React from 'react';
import { View, StyleSheet } from 'react-native';
import ArregloSeparado from './ArregloSeparado';
import PrimeraInterfaz from './Interfaces/PrimeraInterfaz';
import SegundaInterfaz from './Interfaces/SegundaInterfaz';
import TerceraInterfaz from './Interfaces/TerceraInterfaz';
import CuartaInterfaz from './Interfaces/CuartaInterfaz';
import QuintaInterfaz from './Interfaces/QuintaInterfaz';
import SextaInterfaz from './Interfaces/SextaInterfaz';
import SextimaInterfaz from './Interfaces/SextimaInterfaz';
import OctavaInterfaz from './Interfaces/OctavaInterfaz';
import NovenaInterfaz from './Interfaces/NovenaInterfaz';
import DecimaInterfaz from './Interfaces/DecimaInterfaz';


const App = () => {
  return (
    <View style={styles.container}>
      {<ArregloSeparado />}
      {/*<PrimeraInterfaz />*/}
      {/*<SegundaInterfaz />*/}
      {/*<TerceraInterfaz />*/}
      {/*<CuartaInterfaz />*/}
      {/*<QuintaInterfaz />*/}
      {/*<SextaInterfaz />*/}
      {/*<SextimaInterfaz />*/}
      {/*<OctavaInterfaz />*/}
      {/*<NovenaInterfaz />*/}
      {/*<DecimaInterfaz />*/}


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1A2E3E',
  },
});

export default App;
