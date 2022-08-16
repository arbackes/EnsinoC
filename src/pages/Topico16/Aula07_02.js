import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper'
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula07_02 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Leitura de Caracteres</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          A função <Text style={{ fontWeight: 'bold' }}>fgetc()</Text> também pode ser utilizada para ler um caractere do teclado (dispositivo de entrada padrão).{'\n'}
          Nesse caso, é necessário mudar a variável que aponta para o local onde será lido o caractere:{'\n'}
        </Paragraph>

        <Text><Text style={{ color: '#000080', fontWeight: 'bold' }}>int</Text> main() {'{'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>char</Text> ch;</Text>
        <Text style={{ marginLeft: 10 }}>ch = fgetc(stdin);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}>printf(<Text style={{ color: '#0000FF' }}>"%c\n"</Text>, ch);{'\n'}</Text>
        <Text style={{ marginLeft: 10 }}><Text style={{ color: '#000080', fontWeight: 'bold' }}>return</Text> <Text style={{ color: '#0000FF' }}>0</Text>;</Text>
        <Text>{'};\n'}</Text>
    </Page>
  );
};

export default Aula07_02;
