import React from 'react'
import { Divider, Title, Text, Paragraph } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula03_03 = () => {
  return (
      <Page nextRoute='Menu'>
          <Title style={Styles.title}>Comando printf() - Exemplos</Title>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph style={{ fontWeight: 'bold' }}>Exemplo 1</Paragraph>
          <Paragraph>Código que irá imprimir "<Text style={{ fontWeight: 'bold' }}>Digite um texto:</Text>" na tela</Paragraph>
          
          <Text>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
          </Text>
          <Text style={{marginLeft: 12 }}>printf(<Text style={{ color: '#0000FF' }}>"Digite um texto:"</Text>);{'\n'}</Text>
          <Text style={{ marginLeft: 12 }}>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
          </Text>
          <Text>{'}'}</Text>

          <Paragraph>A saída será:</Paragraph>
          <Paragraph style={{ fontWeight: 'bold' }}>Digite um texto:</Paragraph>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph style={{ fontWeight: 'bold' }}>Exemplo 2</Paragraph>
          <Paragraph>Código para imprimir o valor das variáveis <Text style={{ fontWeight: 'bold' }}>inteiro1</Text> e <Text style={{ fontWeight: 'bold' }}>inteiro2</Text> do tipo inteiro</Paragraph>
          
          <Text>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
          </Text>
          <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> inteiro1 = <Text style={{ color: '#0000FF' }}>20</Text>;</Text>
          <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> inteiro2 = <Text style={{ color: '#0000FF' }}>30</Text>;{'\n'}</Text>
          <Text style={{marginLeft: 12 }}>printf(<Text style={{ color: '#0000FF' }}>"%d, %d"</Text>, inteiro1, inteiro2);{'\n'}</Text>
          <Text style={{ marginLeft: 12 }}>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
          </Text>
          <Text>{'}'}</Text>

          <Paragraph>A saída será:</Paragraph>
          <Paragraph style={{ fontWeight: 'bold' }}>20, 30</Paragraph>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph style={{ fontWeight: 'bold' }}>Exemplo 3</Paragraph>
          <Paragraph>Código para imprimir o valor da variável do tipo <Text style={{ fontWeight: 'bold' }}>float</Text></Paragraph>
          
          <Text>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
          </Text>
          <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>float</Text> real = <Text style={{ color: '#0000FF' }}>5.25</Text>;{'\n'}</Text>
          <Text style={{marginLeft: 12 }}>printf(<Text style={{ color: '#0000FF' }}>"%f"</Text>, real);{'\n'}</Text>
          <Text style={{ marginLeft: 12 }}>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
          </Text>
          <Text>{'}'}</Text>

          <Paragraph>A saída será:</Paragraph>
          <Paragraph style={{ fontWeight: 'bold' }}>5.250000</Paragraph>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph style={{ fontWeight: 'bold' }}>Exemplo 4</Paragraph>
          <Paragraph>Código para imprimir o valor do caractere <Text style={{ fontWeight: 'bold' }}>letra</Text> do tipo <Text style={{ fontWeight: 'bold' }}>char</Text></Paragraph>
          
          <Text>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
          </Text>
          <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>char</Text> letra = <Text style={{ color: '#800080' }}>'C'</Text>;{'\n'}</Text>
          <Text style={{marginLeft: 12 }}>printf(<Text style={{ color: '#0000FF' }}>"%c"</Text>, letra);{'\n'}</Text>
          <Text style={{ marginLeft: 12 }}>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
          </Text>
          <Text>{'}'}</Text>

          <Paragraph>A saída será:</Paragraph>
          <Paragraph style={{ fontWeight: 'bold' }}>C</Paragraph>
          <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

          <Paragraph style={{ fontWeight: 'bold' }}>Exemplo 5</Paragraph>
          <Paragraph>Imprimindo valores e texto</Paragraph>
          
          <Text>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
          </Text>
          <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> x = <Text style={{ color: '#0000FF' }}>10</Text>;</Text>
          <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>float</Text> y = <Text style={{ color: '#0000FF' }}>20.5</Text>;{'\n'}</Text>
          <Text style={{marginLeft: 12 }}>printf(<Text style={{ color: '#0000FF' }}>"O valor de x eh %d e o de y eh %f"</Text>, x, y);{'\n'}</Text>
          <Text style={{ marginLeft: 12 }}>
            <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
          </Text>
          <Text>{'}'}</Text>

          <Paragraph>A saída será:</Paragraph>
          <Paragraph style={{ fontWeight: 'bold' }}>O valor de x eh 10 e o de y eh 20.500000</Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>
      </Page>
  );
};

export default Aula03_03;
