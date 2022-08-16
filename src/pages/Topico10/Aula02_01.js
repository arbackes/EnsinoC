import React from 'react'
import { Divider, Title, Paragraph, Text, } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_01 = () => {
  return (
    <Page nextRoute='Aula02_02'>
        <Title style={Styles.title}>Strings - Leitura</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>
            Para fazer a leitura de uma 
            <Text style={{ fontWeight: 'bold' }}> string </Text>
            do teclado podem ser utilizadas duas funções:
        </Paragraph>
        <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>scanf()</Text>
        <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>gets():</Text>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo usando scanf()</Text>
        <Text>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          palavra
          [<Text style={{ color: '#0000FF' }}>20</Text>];
        </Text>
        <Text>scanf(<Text style={{ color: '#0000FF' }}>"%s"</Text>, palavra);</Text>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo usando gets()</Text>
        <Text>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          palavra
          [<Text style={{ color: '#0000FF' }}>20</Text>];
        </Text>
        <Text>gets(palavra);</Text>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>Qual a diferença entre as duas funções?</Paragraph>
        <Paragraph style={{ marginLeft: 10 }}>
            Na 
            <Text style={{ fontWeight: 'bold' }}> scanf </Text>
            a leitura é feita até que o usuario digite 
            <Text style={{ fontStyle: 'italic'}}> espaço </Text>
            ou 
            <Text style={{ fontStyle: 'italic'}}>  enter.</Text>
        </Paragraph>
        <Paragraph style={{ marginLeft: 10 }}>
            Já a 
            <Text style={{ fontWeight: 'bold' }}> gets </Text>
            lê a string até que seja lido a tecla
            <Text style={{ fontStyle: 'italic'}}> enter.</Text> 
        </Paragraph>
        
    </Page>
  );
};

export default Aula02_01;
