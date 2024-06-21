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
  Image,
  Alert
} from 'react-native';
import React, { useRef, useState } from 'react';

import Home from './index';


export default function Login(){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuarios, setUsuarios] = useState([
      {
        emails: 'ze@gmail.com',
        senhas: '323232'
      },
      {
        emails: 'lala@gmail.com',
        senhas: 'cricri5123'
      },
      {
        emails: 'kombi@hotmail.com',
        senhas: 'hilux4567'
      }
  ])

  const confirmUser = (array, value1, value2) => {
    if(!senha.trim() || !email.trim()){
      Alert.alert("Email e senha obrigatórios")
      window.alert("Email e senha são obrigatórios")
      setEmail('');
      setSenha('');
    }
    else{
      
    }
    
  }


  return(
        <View style={styles.container}>
          <Text style={styles.texttitulo}>Tela de login</Text>
          <TextInput 
          placeholder="Email"
          value={email}
          style={styles.textinputemail}
          onChangeText={texto => setEmail(texto)}
          />
          <TextInput 
          placeholder= "Senha"
          value={senha}
          style={styles.textinputsenha}
          secureTextEntry = {true}
          onChangeText={texto => setSenha(texto)}
          />
          <TouchableOpacity
          style={styles.botaologar}
          onPress={confirmUser()}> Entrar </TouchableOpacity>
        </View>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  texttitulo: { 
    fontSize: 40,
    color: '#164892',
    
  },
  textinputsenha:{
    fontSize: 25,
    width: 160,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: ''
  },
  textinputemail:{
    fontSize: 22,
    width: 160,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: ''
  },
  botaologar: {
    marginTop: 15,
    backgroundColor: '#0d6efd',
    borderColor: 'black',
    borderRadius: 5,
    padding: 2,
    color: 'white',
    fontSize: 30,
  },
})