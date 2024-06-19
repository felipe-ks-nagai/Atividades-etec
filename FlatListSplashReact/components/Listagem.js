import { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, Pressable, Modal, StyleSheet } from 'react-native';

const Listagem = ({ lista, setLista }) => {
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [visualizarModal, setVisualizarModal] = useState(false);

  const verItem = (item) => {
    setItemSelecionado(item);
    setVisualizarModal(true);
  };

  const deletaCoisa = (nome) => {
    setLista((valordelete) => valordelete.filter((item) => item.nome !== nome));
  };

  return (
    <View>
      <Text style={styles.text}>Clique em um alimento para ver o peso, o preço, sua categoria e a região</Text>
      <View>
        {lista.map((item) => (
          <View key={item.nome} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity 
              onPress={() => verItem(item)}
              style={styles.item}
            >
              <Text style={styles.itemText}>{item.nome}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => deletaCoisa(item.nome)}
              style={styles.itemdel}
            >
              <Text style={styles.itemtextdel}>Deletar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visualizarModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setVisualizarModal(!visualizarModal);
        }}
      >
        {itemSelecionado && (
          <View style={styles.detail}>
            <Text style={styles.textModal}>
              {`Nome: ${itemSelecionado.nome}
Peso: ${itemSelecionado.peso}
Preço: ${itemSelecionado.preco}
Categoria: ${itemSelecionado.categoria}
Região: ${itemSelecionado.regiao}`}
            </Text>
            <Pressable
              onPress={() => setVisualizarModal(false)}
              style={styles.item}
            >
              <Text style={styles.textStyle}>Voltar</Text>
            </Pressable>
          </View>
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#B3381E',
    borderRadius: 5,
    borderColor: '#fff',
    width: 200,
  },
  itemdel: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#EFE812',
    borderRadius: 5,
    borderColor: '#fff',
    width: 100,
  },
  itemText: {
    fontSize: 18,
    color: '#EFE812',
    textAlign: 'center',
  },
  itemtextdel: {
    fontSize: 18,
    color: '#B3381E',
    textAlign: 'center',
  },
  detail: {
    padding: 70,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  text: {
    color: '#438491',
    padding: 6,
    fontFamily: 'Serif',
    fontSize: 25,
  },
  textModal: {
    fontSize: 20,
    textAlign: 'center',
  },
  textStyle: {
    fontSize: 18,
    color: '#EFE812',
    textAlign: 'center',
  },
});

export default Listagem;