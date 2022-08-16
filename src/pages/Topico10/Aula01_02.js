import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import { Topico10Image1 } from '../../../images'
import Styles from '../../styles/styles'
import ImageZoom from '../../components/ImageZoom';
import Page from '../../components/Page'

const Aula01_02 = () => {
  return (
    <Page nextRoute='Aula01_03'>
        <Title style={Styles.title}>Strings - Arrays de Caracteres</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Importante:</Text> 
        <Paragraph>
            Nas 
            <Text style={{ fontWeight: 'bold' }}> strings, </Text> 
            , a posição seguinte a última letra da palavra armazenada irá sempre armazenar o caractere 
            <Text style={{ fontWeight: 'bold' }}> '\0'.</Text> 
        </Paragraph>
        <Paragraph>O caracter <Text style={{ fontWeight: 'bold' }}> '\0' </Text> indica o fim da sequência de caracteres.</Paragraph>
        <Paragraph>
            Ao declarar uma <Text style={{ fontWeight: 'bold' }}> string </Text> devemos lembrar de considerá-lo no tamanho total da string.
        </Paragraph>
        <Paragraph style={{ marginBottom: 10 }}>Isso significa que uma string de tamanho 6 comporta uma palavra de no máximo 5 caracteres.</Paragraph>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:</Text> 

        <Text style={{ marginLeft: 10 }}>
            <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
            str
            [<Text style={{ color: '#0000FF' }}>6</Text>] = 
            <Text style={{ color: '#0000FF' }}>"Teste"</Text>;
        </Text>

        <ImageZoom image={Topico10Image1} />
    </Page>
  );
};

export default Aula01_02;
