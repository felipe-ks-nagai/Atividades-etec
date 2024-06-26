import { useContext, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native'
import { CartContext } from './cartContext'

export default function Cart(){
  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);


  return(
    <View style={stlyes.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => String(item.id) }
        ListEmptyComponent={ () => <Text>Nenhum item no carrinho...</Text>}
        renderItem={ ({ item }) => (
          <CardItem
            data={item}
            addAmount={ () => addItemCart(item) }
            removeAmount={ () => removeItemCart(item) }
          />
        )}
        ListFooterComponent={ () => <Text style={stlyes.total}>Total: R$ {total}</Text> }
      />
    </View>
  )
}

function CardItem({data, addAmount, removeAmount}){
  const [amount, setAmount] = useState(data?.amount)

  function handleIncrease() {
    addAmount();
    setAmount(item => item + 1)
  }

  function handleDecrease() {
    removeAmount();
    if (amount === 0) {
      setAmount(0)
      return;
    }

    setAmount(item => item - 1)
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.img}
          resizeMode="cover"
          source={{ uri: data.img }}
        />
        <View style={styles.viewTitlePrice}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.amountContainer}>
        <TouchableOpacity style={styles.buttonRemove} onPress={handleDecrease}>
          <Text>-</Text>
        </TouchableOpacity>

        <Text style={styles.amount}>{amount}</Text>

        <TouchableOpacity style={styles.buttonAdd} onPress={handleIncrease}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#dfdfdf',
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    borderBottomWidth: 1,
  },
  viewTitlePrice:{
    paddingStart: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  },
  price: {
    fontSize: 16,
  },
  amountContainer: {
    marginTop: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonAdd: {
    backgroundColor: '#5b7',
    padding: 6,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 3
  },
  buttonRemove: {
    backgroundColor: '#d14f',
    padding: 6,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 3
  },
  amount: {
    marginLeft: 14,
    marginRight: 14
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 10
  },
  
})
const stlyes = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FAFAFA',
    paddingStart: 14, 
    paddingEnd: 14,
    paddingTop: 14,
  },
  total:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
  }
})