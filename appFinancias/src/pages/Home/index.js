import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

const list = [
  {
    id: 1,
    label: 'Boleto Pedro',
    value: '324,68',
    date: '12/06/2025',
    type: 0
  },
  {
    id: 2,
    label: 'Boleto Pedro',
    value: '324,68',
    date: '12/06/2025',
    type: 0
  },
  {
    id: 3,
    label: 'Pix Pedro',
    value: '2222,68',
    date: '12/06/2025',
    type: 1
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Yasmin Victoria"/>
        <Balance saldo="98.000,00" gastos="430,98" />
        <Text style={styles.title}>Últimas movimentações</Text>
        <FlatList 
          style={styles.list} 
          data={list}
          keyExtractor={ (item) => String(item.id) }
          showsVerticalScrollIndicator={false}
          renderItem={ ({item}) => <Movements data={item} /> }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
