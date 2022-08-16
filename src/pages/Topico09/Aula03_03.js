import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_03 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Copiando um Array</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>Como fazemos para copiar todos os elementos de um array para outro?</Paragraph>
        <Paragraph>Para copiarmos os elementos de um array para outro, devemos percorrer a "origem" e para cada posição do array, atribuímos para o novo!</Paragraph>

        <Text style={{ marginTop: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>// Arrays com 2 posições</Text>
        <Text style={{ marginLeft: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>int </Text> 
            i, array1[
            <Text style={{ color: '#0000FF' }}>2</Text>], 
            array2[
            <Text style={{ color: '#0000FF' }}>2</Text>];
        </Text>
        <Text style={{ marginLeft: 10 }}> 
            array1[<Text style={{ color: '#0000FF' }}>0</Text>] = <Text style={{ color: '#0000FF' }}>4</Text>;
        </Text>
        <Text style={{ marginLeft: 10, marginBottom: 10 }}> 
            array1[<Text style={{ color: '#0000FF' }}>1</Text>] = <Text style={{ color: '#0000FF' }}>3</Text>;
        </Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>// Percorremos todas as posições do primeiro array</Text>
        <Text style={{ marginLeft: 10, color: '#008800', fontStyle: 'italic'}}>// Copiamos seus dados para o segundo array!</Text>
        <Text style={{ marginLeft: 10 }}>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>for </Text>(i = <Text style={{ color: '#0000FF' }}>0</Text>; i {'<'} <Text style={{ color: '#0000FF' }}>2</Text>; i++)
        </Text>
        <Text style={{ marginLeft: 20 }}>array2[i] = array1[i]</Text>
        <Text style={{ marginTop: 10, marginLeft: 10}}><Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula03_03;
