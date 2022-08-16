import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Array - Exemplo</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            O valor 
            <Text style={{ fontWeight: 'bold' }}> tamanho </Text>
            define a quantidade de elementos do 
            <Text style={{ fontWeight: 'bold' }}> array</Text>
        </Paragraph>

        <Text style={{ marginTop: 10, color: '#008800', fontStyle: 'italic'}}>//Array capaz de armazenar 60 valores inteiros</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> notas_alunos[<Text style={{ color: '#0000FF' }}>60</Text>];</Text>


        <Text style={{ marginTop: 10, color: '#008800', fontStyle: 'italic'}}>//Array capaz de armazenar 200 valores do tipo float</Text>
        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>float</Text> numeros[<Text style={{ color: '#0000FF' }}>200</Text>];</Text>
    </Page>
  );
};

export default Aula01_02;
