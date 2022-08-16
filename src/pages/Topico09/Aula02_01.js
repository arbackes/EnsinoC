import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_01 = () => {
  return (
    <Page nextRoute='Aula02_02'>
        <Title style={Styles.title}>Acessando os elementos de um Array</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>
            Em um 
            <Text style={{ fontWeight: 'bold' }}> array </Text>
            seus elementos são acessados especificando o índice desejado entre os
            <Text style={{ fontWeight: 'bold' }}> colchetes [ ].</Text>
        </Paragraph>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:</Text>

        <Text style={{ marginTop: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> notas[<Text style={{ color: '#0000FF' }}>5</Text>];</Text>
        <Text>
            notas[<Text style={{ color: '#0000FF' }}>0</Text>] = <Text style={{ color: '#0000FF' }}>3</Text>;
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>  // Acessando o indice 0 e atribuindo o valor 3</Text>
        </Text>
        <Text>
            notas[<Text style={{ color: '#0000FF' }}>1</Text>] = <Text style={{ color: '#0000FF' }}>7</Text>;
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>  // Acessando o indice 1 e atribuindo o valor 7</Text>
        </Text>
        <Text>
            notas[<Text style={{ color: '#0000FF' }}>2</Text>] = <Text style={{ color: '#0000FF' }}>5</Text>;
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>  // Acessando o indice 2 e atribuindo o valor 5</Text>
        </Text>
        <Text>
            notas[<Text style={{ color: '#0000FF' }}>3</Text>] = <Text style={{ color: '#0000FF' }}>8</Text>;
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>  // Acessando o indice 3 e atribuindo o valor 8</Text>
        </Text>
        <Text>
            notas[<Text style={{ color: '#0000FF' }}>4</Text>] = <Text style={{ color: '#0000FF' }}>5</Text>;
            <Text style={{ color: '#008800', fontStyle: 'italic'}}>  // Acessando o indice 4 e atribuindo o valor 5</Text>
        </Text>
    </Page>
  );
};

export default Aula02_01;
