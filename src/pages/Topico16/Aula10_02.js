import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula09_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Leitura de String</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        A função <Text style={{ fontWeight: 'bold' }}>fgets()</Text> também pode ser utilizada para ler uma string do teclado (dispositivo de entrada padrão).{'\n'}
        Nesse caso, é necessário mudar a variável que aponta para o local onde será lido a string:{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> nome[<Text style={{ color: '#0000FF' }}>50</Text>];</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"Digite um nome: "</Text>);</Text>
        <Text style={{ marginLeft: 10 }}>fgets(nome, <Text style={{ color: '#0000FF' }}>50</Text>, stdin);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"O nome digitado foi %s\n"</Text>, nome);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula09_02;
