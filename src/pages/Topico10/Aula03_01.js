import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_01 = () => {
  return (
    <Page nextRoute='Aula03_02'>
        <Title style={Styles.title}>Declaração e Atribuição de Strings</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Importante:</Text>
        <Paragraph style={{ marginLeft: 10 }}>
          As 
          <Text style={{ fontWeight: 'bold' }}> strings </Text>
          têm no elemento seguinte a sua última letra da palavra armazenada o caractere 
          <Text style={{ fontWeight: 'bold' }}> '\0'.</Text>
        </Paragraph>
        <Paragraph style={{ marginLeft: 10 }}>
          Ao declarar uma 
          <Text style={{ fontWeight: 'bold' }}> string </Text>
          devemos lembrar de considerá-lo.
        </Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>
          Por se tratar de um
          <Text style={{ fontWeight: 'bold' }}> array, </Text>   
          cada caractere de uma
          <Text style={{ fontWeight: 'bold' }}> string </Text>   
          podem ser acessados individualmente por meio de um índice. 
        </Paragraph>

        <Text>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          str
          [<Text style={{ color: '#0000FF' }}>6</Text>] = 
          <Text style={{ color: '#0000FF' }}>"Teste"</Text>;
        </Text>

        <Text style={{ marginTop: 10 }}>
          str
          [<Text style={{ color: '#0000FF' }}>0</Text>] = 'L';
        </Text>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Importante:</Text>
        <Paragraph style={{ marginLeft: 10 }}>
          As <Text style={{ fontWeight: 'bold' }}>strings</Text> acima possuem tamanho 6. 
        </Paragraph>
        <Paragraph style={{ marginLeft: 10 }}>
          Isso significa que podem armazenar
          <Text style={{ fontWeight: 'bold' }}> 5 caracteres </Text>  
          mais o 
          <Text style={{ fontWeight: 'bold' }}> '\0'.</Text>  
        </Paragraph>
    </Page>
  );
};

export default Aula03_01;
