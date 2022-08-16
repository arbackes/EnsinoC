import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import { Topico10Image1 } from '../../../images'
import Styles from '../../styles/styles'
import ImageZoom from '../../components/ImageZoom';
import Page from '../../components/Page'

const Aula01_01 = () => {
  return (
    <Page nextRoute='Aula01_02'>
        <Title style={Styles.title}>Strings - Arrays de Caracteres</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
            <Text style={{ fontWeight: 'bold' }}>Strings </Text> 
            são uma sequência de caracteres adjacentes na memória. 
        </Paragraph>
        <Paragraph>Essa sequência de caracteres pode ser uma palavra ou frase.</Paragraph>
        <Paragraph>
            Em outras palavras, strings são
            <Text style={{ fontWeight: 'bold' }}> arrays </Text>  
            do tipo 
            <Text style={{ fontWeight: 'bold' }}> char.</Text>  
        </Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Declaração e Atribuição:</Text>

        <Text style={{ marginTop: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
            str
            [<Text style={{ color: '#0000FF' }}>6</Text>];
        </Text>
        <Text>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
            str
            [<Text style={{ color: '#0000FF' }}>6</Text>] = 
            <Text style={{ color: '#0000FF' }}>"Teste"</Text>;
        </Text>
        <Text>
            str
            [<Text style={{ color: '#0000FF' }}>6</Text>] = 'L';
        </Text>

        <Paragraph style={{ marginTop: 10 }}>
            Repare que são utilizadas 
            <Text style={{ fontWeight: 'bold' }}> "aspas duplas" </Text>  
            na atribuição de palavras na inicialização da string e 
            <Text style={{ fontWeight: 'bold' }}> 'aspas simples' </Text>  
            na atribuição de um único caractere.
        </Paragraph>

        <ImageZoom image={Topico10Image1} />
    </Page>
  );
};

export default Aula01_01;
