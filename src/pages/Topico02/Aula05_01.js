import React from 'react'
import { Divider, Title, Text, Paragraph, Subheading } from 'react-native-paper';
import Styles from '../../styles/styles'
import Page from '../../components/Page'

const Aula05_01 = () => {
  return (
    <Page nextRoute='Menu'>
        <Title style={Styles.title}>Declaração de Várias Variáveis</Title>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Paragraph>
          A linguagem C suporta a declaração de várias variáveis do mesmo tipo. Cada nome de variável é separado por uma vírgula.
          {'\n'}
        </Paragraph>

        <Subheading>Forma geral:</Subheading>
        <Paragraph>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>tipo_da_variavel</Text> nome_da_variavel_1, nome_da_variavel_2;
        </Paragraph>
        <Paragraph>
          As variáveis podem ser inicializadas durante a declaração.
        </Paragraph>
        <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

        <Subheading>Exemplo:</Subheading>
        <Text>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> main() {'{'}
        </Text>
        <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>float</Text> x, y;</Text>
        <Text style={{marginLeft: 12 }}><Text style={{ fontWeight: 'bold', color: '#000080' }}>int</Text> i = <Text style={{ color: '#0000FF' }}>0</Text>, j = <Text style={{ color: '#0000FF' }}>10</Text>;{'\n'}</Text>
        <Text style={{ marginLeft: 12 }}>
          <Text style={{ fontWeight: 'bold', color: '#000080' }}>return</Text> 0;
        </Text>
        <Text>{'}'}</Text>
    </Page>
  );
};

export default Aula05_01;
