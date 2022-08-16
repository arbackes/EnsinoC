import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>String - Escrita</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph style={{ marginBottom: 10 }}>
            Para se escrever uma 
            <Text style={{ fontWeight: 'bold' }}> string </Text>
            na tela utilizamos a função 
            <Text style={{ fontWeight: 'bold' }}> printf().</Text>
        </Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ fontWeight: 'bold' }}>Exemplo:</Text>
        <Text>
          <Text style={{ color: '#000080', fontWeight: 'bold' }}>char </Text> 
          palavra
          [<Text style={{ color: '#0000FF' }}>20</Text>] = 
          <Text style={{ color: '#0000FF' }}> "Linguagem C"</Text>;
        </Text>
        <Text>printf(<Text style={{ color: '#0000FF' }}>"%s"</Text>, palavra);</Text>
    </Page>
  );
};

export default Aula02_02;
