import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button, TouchableOpacity, Alert, Pressable, Image, Modal } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Home from './Home';
import Listagem from './Listagem';

const FlatListBasics = () => {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [regiao, setRegiao] = useState('');
  const [imagem, setImagem] = useState('');
  const [lista, setLista] = useState([
    { nome: 'Pera', peso: '100g', preco: '19,90', categoria: 'fruta', regiao: 'brasil' }
  ]);
  const handleAddItem = () => {
    if (!nome.trim() || !peso.trim() || !preco.trim() || !categoria.trim() || !regiao.trim()) {
      Alert.alert('preencha todos os campos');
      setNome('');
      setPeso('');
      setPreco('');
      setCategoria('');
      setRegiao('');
  return;
}
    else{
    setLista([...lista, { nome, peso, preco, categoria, regiao }]);
    setNome('');
    setPeso('');
    setPreco('');
    setCategoria('');
    setRegiao('');
    }
  };

  const deletaCoisa = nome => {
    console.log('fdfdfdfdfdf');
    setLista(valordelete => {
      return valordelete.filter(item => lista.nome !== nome)
    })
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={nome}
        onChangeText={texto => setNome(texto)}
      />
      <TextInput
        placeholder="Peso"
        style={styles.input}
        value={peso}
        onChangeText={texto => setPeso(texto)}
      />
      <TextInput
        placeholder="Preço"
        style={styles.input}
        value={preco}
        onChangeText={texto => setPreco(texto)}
      />
      <TextInput
        placeholder="Categoria"
        style={styles.input}
        value={categoria}
        onChangeText={texto => setCategoria(texto)}
      />
      <TextInput
        placeholder="Região"
        style={styles.input}
        value={regiao}
        onChangeText={texto => setRegiao(texto)}
      />


      <TouchableOpacity title="Adicionar" onPress={handleAddItem} style={styles.button}>
      <Text style={styles.textbutton}>Adicionar item</Text>
      </TouchableOpacity>
      <Listagem  lista = {lista} setLista = {setLista}/>

    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#A61820',
    padding: 3,
    borderWidth: 2,
    borderColor: '#222',
  },
  textbutton: {
    color:'#F4F803',
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default FlatListBasics;