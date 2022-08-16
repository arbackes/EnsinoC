import React from 'react'
import { Divider, Title, Paragraph, Text } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula04_01 = () => {
  return (
    <Page nextRoute='Aula04_02'>
        <Title style={Styles.title}>Comando for</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>O comando <Text style={{ fontWeight: 'bold' }}>for</Text> É usado para repetir um comando ou bloco de comando por um número pré definido de vezes.</Paragraph>
        <Paragraph>Em geral, utilizamos quando precisamos ir de um <Text style={{ fontWeight: 'bold' }}>valor inicial</Text> até um <Text style={{ fontWeight: 'bold' }}>valor final</Text></Paragraph>

        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Text style={{ marginBottom: 10, fontWeight: 'bold' }}>Forma geral:</Text>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>for</Text>(inicialização; condição; incremento){'{'}</Text>
        <Text style={{ marginLeft: 10 }}>sequencia de comandos;</Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula04_01;
