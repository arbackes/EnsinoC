import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_02 = () => {
  return (
      <Page nextRoute='Menu'>
          <Title style={Styles.title}>Comando switch - Exemplo</Title>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph style={{marginBottom: 10 }}>Faça um programa que informa se o número digitado é igual a 1, 2 ou 3.</Paragraph>
          <Paragraph>Caso contrário, informe que o número é diferente.</Paragraph>

          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main {'{'}</Text>
          <Text style={{ marginLeft: 10, marginTop: 10, marginBottom: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> num;</Text>
          <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Digite um numero:"</Text>);</Text>
          <Text style={{ marginLeft: 10 }}>scanf(<Text style={{ color: '#0000FF' }}>"%d"</Text>, &num);</Text>
          <Text style={{ marginLeft: 10, marginTop: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>switch</Text>(num){'{'}</Text>
          <Text style={{ marginLeft: 20 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>case</Text><Text style={{ color: '#0000FF' }}> 1</Text>:</Text>
          <Text style={{ marginLeft: 30 }}>printf(<Text style={{ color: '#0000FF' }}>"Numero eh 1"</Text>);</Text>
          <Text style={{ marginLeft: 30, color: '#000080', fontWeight: 'bold' }}>break;</Text>
          <Text style={{ marginLeft: 20 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>case</Text><Text style={{ color: '#0000FF' }}> 2</Text>:</Text>
          <Text style={{ marginLeft: 30 }}>printf(<Text style={{ color: '#0000FF' }}>"Numero eh 2"</Text>);</Text>
          <Text style={{ marginLeft: 30, color: '#000080', fontWeight: 'bold' }}>break;</Text>
          <Text style={{ marginLeft: 20 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>case</Text><Text style={{ color: '#0000FF' }}> 3</Text>:</Text>
          <Text style={{ marginLeft: 30 }}>printf(<Text style={{ color: '#0000FF' }}>"Numero eh 3"</Text>);</Text>
          <Text style={{ marginLeft: 30, color: '#000080', fontWeight: 'bold' }}>break;</Text>
          <Text style={{ marginLeft: 20 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>default:</Text></Text>
          <Text style={{ marginLeft: 30 }}>printf(<Text style={{ color: '#0000FF' }}>"Outro número"</Text>);</Text>
          <Text style={{ marginLeft: 10 }}>{'}'}</Text>
          <Text style={{ marginLeft: 10, marginTop: 10 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;</Text>
          <Text>{'}'}</Text>

          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph>
              Uma diferença importante entre o comando 
              <Text style={{ fontWeight: 'bold' }}> switch </Text> 
              e 
              <Text style={{ fontWeight: 'bold' }}> if-else </Text> 
              é que o comando 
              <Text style={{ fontWeight: 'bold' }}> switch </Text> 
              não aceita expressões.
          </Paragraph>
          <Paragraph>
              Ou seja, não é possível usar operadores
              <Text style={{ fontWeight: 'bold' }}> lógicos </Text>  
              e 
              <Text style={{ fontWeight: 'bold' }}> relacionais </Text> 
              no comando 
              <Text style={{ fontWeight: 'bold' }}> case</Text>.
              </Paragraph>
      </Page>
  );
};

export default Aula05_02;
