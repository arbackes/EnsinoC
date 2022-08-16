import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula09_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Escrita de String</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
        A função <Text style={{ fontWeight: 'bold' }}>fputs()</Text> também pode ser utilizada para escrever uma string na tela (dispositivo de saída padrão).{'\n'}
        Nesse caso, é necessário mudar a variável que aponta para o local onde será gravado o caractere:{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> texto[<Text style={{ color: '#0000FF' }}>30</Text>] = <Text style={{ color: '#0000FF' }}>"Hello World!\n"</Text>;</Text>
        <Text style={{ marginLeft: 10 }}>fputs(texto, stdout);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula09_02;
