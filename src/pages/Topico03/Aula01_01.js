import React from 'react'
import { Divider, Title, Text, Paragraph, Subheading } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula01_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>A função getchar()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          A função <Text style={{ fontWeight: 'bold' }}>getchar()</Text> realiza a leitura de um único caractere do teclado.
          {'\n'}
        </Paragraph>

        <Subheading>Forma geral:</Subheading>
        <Paragraph>
          variavel = getchar();
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Exemplo:</Subheading>
        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>char</Text> c;</Text>
        <Text style={{marginLeft: 12 }}>c = getchar();</Text>
        <Text style={{marginLeft: 12 }}>printf(<Text style={{ color: '#0000FF' }}>"Caractere:%c\n"</Text>,c);</Text>
        <Text style={{marginLeft: 12 }}>printf(<Text style={{ color: '#0000FF' }}>"Codigo ASCII: %d\n"</Text>,c);{'\n'}</Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
        
        <Paragraph>
          Após realizar a leitura, o caractere é armazenado em uma variável.{'\n'}
          Neste exemplo, o caractere é armazenado na variável <Text style={{ fontWeight: 'bold' }}>c</Text>.
        </Paragraph>
    </Page>
  );
};

export default Aula01_01;
