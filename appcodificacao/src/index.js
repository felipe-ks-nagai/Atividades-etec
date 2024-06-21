import { useContext, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Product from './produto';
import { CartContext } from './cartContext';



import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Icon,
  Image
} from 'react-native';


export default function Home() {
  const { cart, addItemCart } = useContext(CartContext)
  const [produto, setProduto] = useState('');
  const navigation = useNavigation();
  const [products, setProdutcs] = useState([
    {
      id: '1',
      name: 'Notebook Asus Vivobook 5',
      price: '1619.00',
      desconto: 14,
      img: 'https://imgs.casasbahia.com.br/55065776/1g.jpg',
      processador: 'Intel Pentium Gold',
      armazenamento: '128gb SSD',
      placavideo: 'intel UHD Graphics',
      ram: '4gb'
    },
    {
      id: '2',
      name: 'Notebook ASUS X1502ZA',
      price: 2294.23,
      desconto: 10,
      img: 'https://imgs.casasbahia.com.br/1563551764/1xg.jpg',
      processador: 'Intel Core i5 12450H 2 GHz',
      armazenamento: '256gb SSD',
      placavideo: 'Intel UHD Graphics',
      ram: '8gb'
    },
    {
      id: '3',
      name: 'Pc Gamer',
      price: '3299.00',
      desconto: 22,
      img: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/368157/Pc-Gamer-F-cil-Intel-Core-I5-10400f-16GB-DDR4-GTX-1660-Super-6GB-SSD-960GB-Windows-10-Trial-Fonte-750W_1713268111_p.jpg',
      processador: 'Intel Core I5-10400f',
      armazenamento: '960GB SSD',
      placavideo: 'GTX 1660',
      ram: '16gb DDR4'
    },
    {
      id: '4',
      name: 'Computador gamer 3green',
      price: '1169.10',
      desconto: 18,
      img: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/509569/Computador-Gamer-Completo-3green-Intel-Core-I5-8Gb-SSD-256Gb-Windows-10-Kit-Gamer-Com-Headset-Monitor-20-_1715777575_p.jpg',
      processador: 'Intel Core I5-2400',
      armazenamento: '256gb SSD',
      placavideo: 'Intel UHD Graphics',
      ram: '8gb DDR4',
    },
    {
      id: '5',
      name: 'Pc Gamer Completo 3green Fps',
      price: 2271.59,
      desconto: '',
      img: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/467281/Pc-Gamer-Completo-3green-Fps-Intel-Core-I7-16GB-RAM-SSD-512GB-Placa-De-V-deo-Geforce-GTX-4GB-Monitor-24-Polegadas-FULL-HD-75hz-Fonte-500w-3gf-062_1685646500_p.jpg',
      processador: 'Intel Core I7-3770',
      armazenamento: '512 SSD',
      placavideo: 'GTX 750',
      ram: '16gb ddr4',
    },
    {
      id: '6',
      name: 'Pc Gamer Completo 3green Force',
      price: 2335.06,
      de: 9,
      img: 'https://images.kabum.com.br/produtos/fotos/sync_mirakl/497336/Pc-Gamer-Completo-3green-Force-AMD-Ryzen-5-5600g-16GB-DDR4-Gr-ficos-Radeon-Vega-7-SSD-512GB-Fonte-500W-Monitor-21-5-FHD-75Hz-3f-014_1706708298_p.jpg',
      processador: 'AMD Ryzen 5-5600g',
      armazenamento: '512gb SSD',
      placavideo: 'Radeon Vega 7',
      ram: '16gb ddr4'
    }
  ])



  function handleAddCart(item) {
    addItemCart(item)
  }
  
  /*function handleAddItem() {
    setProdutcs([...products, { produto, coisa }])
  }*/
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Computadores</Text>

        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate("Cart")}>
          <View style={styles.dot}>
            <Text style={styles.dotText}>{cart?.length}</Text>
          </View>
          <Feather name='shopping-cart' size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.input}>
            <Image
          source={{uri:'https://cdn-icons-png.flaticon.com/512/992/992651.png'}} 
          style={styles.ImageStyle}
            />
            <TextInput
            placeholder="Adicionar produto"
            value={produto}
            onChangeText={texto => setProduto(texto)}
            style={styles.textoInput}
            />
          </View>
          <View style={{marginLeft: 25, marginTop: 1.6}}>
            <TouchableOpacity title="Adicionar" style={styles.botaoadicionar}>
              <Text style={styles.textobotaoadicionar}>  Adicionar produto  </Text>
            </TouchableOpacity>
          </View>
        </View>
        


      </ScrollView>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Product data={item} addToCart={() => handleAddCart(item)} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    paddingEnd: 14,
    paddingStart: 14,
  },
  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
    marginRight: 7
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 7
  },
  dot: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    left: -4
  },
  dotText: {
    fontSize: 12,
    color: '#fff'
  },
  scroll: {
    marginBottom: 20,
    height: 35,
  },
  input: {
    marginLeft: 33,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 30,
    borderRadius: 5,
 },
 ImageStyle: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  botaoadicionar: {
    backgroundColor: '#0d6efd',
    borderColor: 'black',
    borderRadius: 5,
    padding: 2
  },
  textobotaoadicionar: {
    fontsize: 5, 
    margin: 2,
    color: '#fff'
  },
  textoInput: {
    marginLeft: 1,
    flex: 1,
    marginBottom: 0.5,
    width: 135,
  }
})