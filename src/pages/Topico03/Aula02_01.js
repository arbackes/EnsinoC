import React from 'react'
import { Divider, Title, Text, Paragraph, Subheading } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula02_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>A função putchar()</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          A função <Text style={{ fontWeight: 'bold' }}>putchar()</Text> tem como argumento um inteiro (entre 0 e 255) e escreve na tela o caractere que corresponde a esse inteiro.
          {'\n'}
        </Paragraph>

        <Subheading>Forma geral:</Subheading>
        <Paragraph>
          putchar(variavel);
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Exemplo:</Subheading>
        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>char</Text> c;</Text>
        <Text style={{marginLeft: 12 }}>printf(<Text style={{ color: '#0000FF' }}>"Digite um caracter:"</Text>);</Text>
        <Text style={{marginLeft: 12 }}>c = getchar();</Text>
        <Text style={{marginLeft: 12 }}>putchar(c);{'\n'}</Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          Neste exemplo, a função <Text style={{ fontWeight: 'bold' }}>getchar()</Text> está sendo usada para ler um caractere e <Text style={{ fontWeight: 'bold' }}>putchar()</Text> para escrever o caractere na tela.
        </Paragraph>
    </Page>
  );
};

export default Aula02_01;
