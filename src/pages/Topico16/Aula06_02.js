import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula06_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Escrita de Caracteres</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          A função <Text style={{ fontWeight: 'bold' }}>fputc()</Text> também pode ser utilizada para escrever um caractere na tela.{'\n'}
          Nesse caso, é necessário mudar a variável que aponta para o local onde será gravado o caractere:{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}>fputc('*', stdout);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'}\n'}</Text>

        <Paragraph>Nesse exemplo, o caractere * será exibido na tela do monitor (dispositivo de saída padrão).</Paragraph>
    </Page>
  );
};

export default Aula06_02;
